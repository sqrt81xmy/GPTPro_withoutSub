import asyncio
import multiprocessing
import os
import re
import string
from time import time
import json
import subprocess
from slither import Slither
import shutil
from agent.tools.deepseek import chatWithMessages




def read_file(filePath):
    with open(filePath, "r", encoding='utf-8') as file:
        content = file.read()
        content += "\n\n\n"
    return content


def chatWithDeepseek(promptStudent, student_message):
    try:
        resStudent = asyncio.run(chatWithMessages(promptStudent, student_message))  # 启动主程序
        # print(resStudent)
        student_message.append({"role": "assistant", "content": resStudent})
        return resStudent
    except Exception as e:
        print(f"An error occurred during execution: {e}")  # 捕获并输出主程序的错误


def deal_findBlock(file_content, student_message,mainContract):
    promptStudent = read_file("./agent/first_agent/prompt._findblock.txt")
    letters = string.ascii_letters
    for letter in letters:
        file_content = file_content.replace(f"\\{letter}", f"\\\\{letter}")
    promptStudent = re.sub(r'`solidityFile`', file_content, promptStudent)
    promptStudent = re.sub(r'`mainContract`', mainContract, promptStudent)
    # print(promptStudent.__len__(), file_path)
    resStudent = chatWithDeepseek(promptStudent, student_message)
    return resStudent


def deal_reachStatement_if(student_message):
    promptStudent = read_file("./agent/first_agent/prompt_reach_statement_if.txt")
    # promptStudent = re.sub(r'`\$\{solidityFile\}`', file_content, promptStudent)
    # promptStudent = re.sub(r'`\$\{statementArray\}`', findBlockRes, promptStudent)
    # promptStudent = re.sub(r'`\$\{functionName\}`', functionName, promptStudent)
    # print(promptStudent.__len__(), file_path)
    resStudent = chatWithDeepseek(promptStudent, student_message)
    return resStudent

def deal_llm_random(file_content, student_message):
    promptStudent = read_file("./agent/first_agent/llm_random.txt")
    letters = string.ascii_letters
    for letter in letters:
        file_content = file_content.replace(f"\\{letter}", f"\\\\{letter}")
    promptStudent = re.sub(r'`solidityFile`', file_content, promptStudent)
    # print(promptStudent.__len__(), file_path)
    resStudent = chatWithDeepseek(promptStudent, student_message)
    return resStudent

def deal_reachStatement_function(student_message):
    promptStudent = read_file("./agent/first_agent/prompt_reach_statement_function.txt")
    # promptStudent = re.sub(r'`\$\{solidityFile\}`', file_content, promptStudent)
    # promptStudent = re.sub(r'`\$\{statementArray\}`', findBlockRes, promptStudent)
    # promptStudent = re.sub(r'`\$\{functionName\}`', functionName, promptStudent)
    # print(promptStudent.__len__(), file_path)
    resStudent = chatWithDeepseek(promptStudent, student_message)
    return resStudent


def dealJson(jsonRes, funcName):
    content = jsonRes.replace("```json", "").replace("```", "").strip()
    data = json.loads(content)
    for i in range(data.__len__()):
        if (data[i]["functionName"] == funcName):
            return data[i].__str__()
    return None


def deal_return_array_form_data(jsonRes):
    content = jsonRes.replace("```json", "").replace("```", "").strip()
    data = json.loads(content)
    return data


def deal_return_specific_length(data, ind, len):
    ##TODO
    ### 返回从索引ind开始的len长度的子数组
    return data[ind:ind + len]


def deal_split_array(data):
    ##TODO:返回一个字典数组，每个元素的组成是{data,functionName}
    res = []
    length = 3
    for i in range(len(data) - length):
        datax = deal_return_specific_length(data, i, length)
        res.append({"data": datax, "functionName": data[i]["functionName"]})
    startInd = len(data) - length
    datax = deal_return_specific_length(data, startInd, length)
    for j in range(length):
        res.append({"data": datax, "functionName": data[startInd]["functionName"]})
    return res


def extract_wrapped_content(input_string):
    # 定义正则表达式，匹配被 ```json 和 ``` 包裹的内容
    pattern = r'```json\s+(.*?)\s+```'
    match = re.search(pattern, input_string, re.DOTALL)  # 使用 re.DOTALL 匹配多行内容

    # 如果匹配成功，返回提取的内容
    if match:
        return match.group(1).strip()  # 去除首尾空白字符
    else:
        return None  # 如果没有匹配到，返回 None


def deal_match_json_content(content):
    ## TODO:把识别出来的内容直接按照json格式读入然后返回一个数组
    modifiedContent = extract_wrapped_content(content)
    dataArray = json.loads(modifiedContent)
    return dataArray


def worker(args):
    file_content, stuMes, res1 = args
    print("res1414", res1)
    return deal_reachStatement_if(file_content, stuMes, res1["data"], res1["functionName"])


def deal_subprocess_deepseek(file_content, splitArray, stuMes):
    ## TODO:返回多线程访问deepseek的所有结果,每次最多开PC的核心数个
    m = multiprocessing.cpu_count()
    max_workers = max(1, m - 2)  # 最多开 m-2 个线程
    tasks = [(file_content, stuMes, res1) for res1 in splitArray]

    # 分批处理任务
    batch_size = max_workers  # 每批的任务数等于最大工作进程数
    res2_list = []

    with multiprocessing.Pool(processes=max_workers) as pool:
        for i in range(0, len(tasks), batch_size):
            batch = tasks[i:i + batch_size]  # 获取当前批次的子任务
            print(f"Processing batch: {i}")
            batch_results = pool.map(worker, batch)  # 处理当前批次
            res2_list.extend([result[0] for result in batch_results])  # 收集结果

    # 打印所有 res2 结果
    print("All res2 results:", res2_list)
    ##TODO: res是每一个多线程的结果
    subprocess_res = []
    for i in range(len(res2_list)):
        subprocess_res.append(deal_match_json_content(res2_list[i]))
    return subprocess_res


##这个位置没有做去重
def deal_return_set_res(data):
    ##TODO:把GPT的所有结果都返回成一个数组，然后做成set
    res = []
    map = {}
    for i in range(len(data)):
        for j in range(len(data[i])):
            functionName = data[i][j]["functionName"]
            if (not (functionName in map.keys())):
                map[functionName] = []
            sequences = data[i][j]["sequences"]
            for k in range(len(sequences)):
                map[functionName].append(sequences[k])
    keys = data.keys
    for key in keys:
        ## key是functionName
        functionName = key
        sequences = map[key]
        res.append({
            functionName: functionName,
            sequences: sequences
        })
    return res


def summary(file_content, res1, stuMes):
    data = deal_return_array_form_data(res1)
    splitArray = deal_split_array(data)

    deepseekRes = deal_subprocess_deepseek(file_content, splitArray, stuMes)
    setRes = deal_return_set_res(deepseekRes)
    return setRes


def setList(lst):
    res = []
    resMap = {}
    for i in range(lst.__len__()):
        str = ""
        for j in range(lst[i].__len__()):
            str += lst[i][j]['functionName']
        if (str in resMap.keys()):
            continue
        else:
            res.append(lst[i])
            resMap[str] = 1
    return res

def get_inherited(slither,map1,inherits,contract_slither):
    if contract_slither.name not in map1.keys() and contract_slither.contract_kind == 'contract':
            map1[contract_slither.name] = 1
            inherits.append(contract_slither.name)
    else:
        return
    for inherited_contract in contract_slither.inheritance:
        get_inherited(slither,map1,inherits,inherited_contract)

def get_called(slither,map1,called,contract_slither):
    if contract_slither.name not in map1.keys()  and contract_slither.contract_kind != 'library':
            print(contract_slither.contract_kind)
            map1[contract_slither.name] = 1
            called.append(contract_slither.name)
    else:
        return

    FUNCTIONS_NEDD_CONSIDERED = []
    FUNCTIONS_NEDD_CONSIDERED.append(contract_slither.constructor)
    FUNCTIONS_NEDD_CONSIDERED += contract_slither.functions

    for function in FUNCTIONS_NEDD_CONSIDERED: 
        if function :
            for external_call in function.high_level_calls:
                contract_called, function_called = external_call
                get_called(slither,map1,called,contract_called)
    return None

def operate_inherit(slither,needs_to_deploy,inherits):
    for contract in slither.contracts: 
        print(f"inherit_Contract: {contract.name}")     
        if contract.name in needs_to_deploy:
            ##本合约的名字不应该在其他待部署合约的inherit树上：
            flag = 1 ##合约名字在树上_标志
            for inherit in inherits:
                if contract.name in inherit:
                    flag = 0
                    break
            if flag == 1: ##维持标志
                map_inherited = {}
                inherit = []
                get_inherited(slither,map_inherited,inherit,contract)
                inherits.append(inherit)

def operate_called(slither,needs_to_deploy,calls):
    for contract in slither.contracts: 
        print(f"call_Contract: {contract.name}")     
        if contract.name in needs_to_deploy:
            ##本合约的名字不应该在其他待部署合约的call树上：
            flag = 1 ##合约名字在树上_标志
            for call in calls:
                if contract.name in call:
                    flag = 0
                    break
            if flag == 1: ##维持标志 
                map_called = {}
                call = []
                get_called(slither,map_called,call,contract)
                calls.append(call)

def get_contract_content(contract): 
    if(contract.contract_kind == 'library' or contract.contract_kind == 'interface'):
        return ""
    contract_path = contract.source_mapping.filename.absolute
    with open(contract_path,'r') as file:
        content_lines = file.readlines() 
    lines = contract.source_mapping.lines
    str1 = ""
    for numberLine in lines:
        try:
            str1 += content_lines[numberLine - 1]
        except Exception as e: 
            return str1
    return str1

def deal_content(calls,inherits,slither):
    res = []
    for call in calls:
        res += call
    for inherit in inherits:
        res += inherit
    contract_map = {}
    for contract in slither.contracts:
        contract_map[contract.name] = contract
    res_content = ""
    res = list(set(res))
    for contract_name in res:
        contract = contract_map[contract_name]
        if 'node_modules' in contract.source_mapping.filename.absolute:
            continue 
        str1 = get_contract_content(contract)
        res_content += str1
    return res_content

def rm_node(path):
    # 删除 node_modules 目录
    node_modules_path = os.path.join(path, "node_modules")
    if os.path.exists(node_modules_path):
        print(f"删除路径 {path} 中的 node_modules 目录...")
        shutil.rmtree(node_modules_path)
    else:
        print(f"路径 {path} 中没有 node_modules 目录") 

    print(f"路径 {path} 处理完成\n")

def install_node(path):
    print(f"在路径 {path} 中运行 npm install --legacy-peer-deps...")
    if os.path.exists(os.path.join(path,'yarn.lock')):
        try:
            subprocess.run(["yarn", "install"], check=True)
            return True
        except subprocess.CalledProcessError as e: 
            try:
                subprocess.run(["npm", "install" ,"--legacy-peer-deps"], check=True)
                return True
            except subprocess.CalledProcessError as e:
                try:
                    subprocess.run(["npm", "install" ,"hardhat"], check=True)
                    return True
                except subprocess.CalledProcessError as e:
                    print(f"在路径 {path} 中运行 npm install --legacy-peer-deps 失败: {e}") 
                    return False

def pre_process(project_path,mainContract):
    cur_dir = os.getcwd()
    os.chdir(project_path)
    slither_flag = False
    if os.path.exists(os.path.join(project_path,'node_modules')):
        try:
            slither = Slither(project_path)  
            slither_flag = True
        except Exception as e: 
            rm_node(project_path)
    if not slither_flag:   
        flag = install_node(project_path)
        if flag == False:
            exit(0)
        try:
            slither = Slither(project_path)  
        except Exception as e:
            exit(0)
    # slither = Slither(project_path) 
    inherits = []
    calls = [] 
    needs_to_deploy = [mainContract]
    operate_inherit(slither,needs_to_deploy,inherits)
    operate_called(slither,needs_to_deploy,calls) 
    content = deal_content(calls,inherits,slither) 
    os.chdir(cur_dir)
    return content,slither,len(calls)+len(inherits)

def get_all_sol(base_dir,sol_array):
    if(not os.path.isdir(base_dir)):
        return
    dirs = os.listdir(base_dir)
    for dir in dirs:
        if(dir.endswith('.sol') and (not os.path.isdir(os.path.join(base_dir,dir)))):
            sol_array.append(os.path.join(base_dir,dir))
        else:
            if not 'node_modules' in dir:
                get_all_sol(os.path.join(base_dir,dir),sol_array)

def pre_process1(project_path,mainContract):
    cur_dir = os.getcwd()
    os.chdir(project_path)
    slither_flag = False
    if os.path.exists(os.path.join(project_path,'node_modules')):
        try:
            slither = Slither(project_path)  
            slither_flag = True
        except Exception as e: 
            rm_node(project_path)
    if not slither_flag:   
        flag = install_node(project_path)
        if flag == False:
            exit(0)
        try:
            slither = Slither(project_path)  
        except Exception as e:
            exit(0)
    solc_array = []
    get_all_sol(project_path,solc_array)
    content = ""
    for path in solc_array:
        with open(path,'r') as file:
            tmp_content = file.read()
        content += tmp_content
    os.chdir(cur_dir)
    return content,slither,len(slither.contracts)

def generateSequenceFromDeepseek(project_path,mainContract): 
    student_message = []
    file_content,slither,len_contracts = pre_process1(project_path,mainContract)
    ###这个agent会自动把deepseek的回答放在message聊天记录里面
    start_time = time()
    deal_findBlock(file_content, student_message,mainContract)
    res2 = deal_reachStatement_if(student_message) 
    end_time = time()
    log_str = str(end_time - start_time) + ',' + str(len(file_content)) + ',' + str(len_contracts)
    ###把结果输出出去  
    if os.path.exists('/home/test/output/log_cost.txt'):
        with open('/home/test/output/log_cost.txt', 'w') as file:
            file.write("")  # 创建一个空文件
    with open('/home/test/tools/GPTPro/log_cost.txt','a') as file:
        file.write(log_str + '\n')
    return res2,slither

def tmp_jioaben():
    tmpDir = "../../B3"
    solDir = os.path.join(tmpDir,"sol")
    assetsDir = os.path.join(tmpDir, "assets")
    assetsPath = os.path.join(assetsDir, "B3.list")
    with open(assetsPath) as file:
        lines = file.readlines()
        # 创建一个空字典
    mainContract_map = {}

    # 遍历每一行，将键值对添加到字典中
    for line in lines:
        key, value = line.strip().split(",")
        mainContract_map[key] = value

    for file_name in os.listdir(solDir):
        output_file = file_name.replace(".sol", "_output.txt")
        output_directory = os.path.join(tmpDir, "output")
        output = os.path.join(output_directory, output_file)
        if output_file in os.listdir(output_directory):
            continue  ##成功生成的不再生成
        messgaes = []
        filenameTag = file_name.replace(".sol", "")
        mainContract = mainContract_map[filenameTag]
        try:
            res = generateSequenceFromDeepseek(tmpDir,file_name,messgaes,mainContract)
        except Exception as e:
            with open(os.path.join(solDir,file_name))as file:
                content = file.read()
            print("error",file_name,e)
            continue
        with open(output,"w") as file:
            file.write(res)

# tmp_jioaben()
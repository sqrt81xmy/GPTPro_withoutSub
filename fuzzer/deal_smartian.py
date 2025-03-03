import json
import os
import subprocess
import re
import json5

# from agent.second_agent.deepseek_deal_result import deal_decode_error
from agent.tools.GPT2Seed import GPT2SmartianSeed
from agent.first_agent.deepseek_findblock_reachif import chatWithDeepseek

def get_num(path):
    pattern = r'/(\d+)(/|$)'
    match = re.search(pattern, path)
    if match:
        print(f"路径: {path}")
        print(f"提取的数字: {match.group(1)}")
        return match.group(1)
    else:
        return -1

def get_prompt(prompt_base,content,external_contracts):
    str1 = ''
    for i in range(len(external_contracts)):
        str1 += external_contracts[i]
        if i != len(external_contracts) -1 :
            str1 += ','
    prompt = prompt_base.replace('{external_contracts}',str1)
    prompt += "\n\n\n"
    prompt += content 
    return prompt


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

def get_solc_file_content(project_path,mainContract):
    solc_array = []
    get_all_sol(project_path,solc_array)
    sol_map = {}
    for solc in solc_array:
        solcs = solc.split('/')
        sol_map[solcs[-1]] = solc 
    path = sol_map[mainContract+'.sol']
    with open(path,'r') as file:
        content = file.read()
    return content

def deal_deploy(project_path,mainContract,deploy_static_analyze_dir): 
    with open("./agent/deploy/prompt_deploy_en.txt",'r') as file:
        prompt_base = file.read()    
    slither_analizer_dir = deploy_static_analyze_dir
    num = get_num(project_path)
    slither_analizer_file = str(num) + '.json'
    slither_analizer_path = os.path.join(slither_analizer_dir,slither_analizer_file)
    with open(slither_analizer_path,'r') as file:
        analyze_json = json.load(file)
    external_functions = analyze_json['external_functions'] 
    external_contracts = []
    for arr in external_functions:
        if mainContract in arr:
            external_contracts = arr
            external_contracts
            break
    if len(external_contracts) == 0:
        return
    content = get_solc_file_content(project_path,mainContract)
    prompt = get_prompt(prompt_base,content,external_contracts)
    res = chatWithDeepseek(prompt,[]) 
    return res  


def deal_smartian_fuzzer(data,dataset_dir,file_name,mainContract,outputDir,timeLimit,seedDir,
                         normalFuncsDir,project_name,project_path,
                         deploy_static_analyze_dir,allbinsDir
                        ):

    res = deal_deploy(project_path,mainContract,deploy_static_analyze_dir)
    # with open("/home/mingyue/GPTSmart_smartian/fuzzer/smar.json",'r') as file:
    #     res = file.read()
    '''
        res:
        {
            "type": 1,
            "res": [
                {"name": "name1", "address": "address1"},
                {"name": "name2", "address": "address2"}
            ],
            "deploy": "-deploy_contract contract1 contract2 -deploy_address address1 address2 -deploy_account account1 account2"
        }
        {
            "type": 2,
            "res": [
                {"name": ["name1"], "call": "func1(param1, param2)", "is_constructor": true},
                {"name": ["name2"], "call": "func2(param1)", "is_constructor": false}
            ],
            "deploy": "-deploy_contract contract1 contract2 -deploy_address address1 address2 -deploy_account account1 account2"
        }
    '''
    deploy_res = None
    try:
        deploy_res = json5.loads(res) 
    except:
        deploy_res = None
    if(deploy_res is not None):
        GPT2SmartianSeed(data,normalFuncsDir,seedDir,mainContract,project_name,deploy_res=deploy_res)
    else:
        GPT2SmartianSeed(data,normalFuncsDir,seedDir,mainContract,project_name)
    # seed_filename = filename.replace(".sol", "_seed.txt")
    # seed_path = os.path.join(seedDir, seed_filename)
    # seed_path = os.path.abspath(seedDir) 
    project_path = os.path.join(dataset_dir,project_name)
    abiPath = os.path.join(project_path,file_name)
    abiPath = os.path.join(abiPath, mainContract+'.abi')
    binPath = os.path.join(project_path,file_name)
    binPath = os.path.join(binPath,mainContract+'.bin')
    cmd = "sudo dotnet workload update"
    cmd_str_build = "dotnet build /home/test/tools/GPTPro/Smartian/src/Smartian.fsproj"
    cmd_str_exec = "dotnet /home/test/tools/GPTPro/Smartian/src/bin/Debug/net8.0/Smartian.dll fuzz " \
                    " -p " + binPath + " -a " + abiPath + \
                    " -t " + timeLimit + " -o " + outputDir
    try:
        cmd_str_exec += ' '
        deployStr = deploy_res['deploy']
        deployArray = deployStr.split(' ')
        deployContracts = []
        deployAddresses = []
        deployAccounts = []

        # 遍历列表，提取参数
        current_flag = None
        for part in deployArray:
            if part == "-deploy_contract" or part == "--deploy_contract":
                current_flag = "contract"
            elif part == "-deploy_address" or part == "--deploy_address":
                current_flag = "address"
            elif part == "-deploy_account" or part == "--deploy_account":
                current_flag = "account"
            else:
                if current_flag == "contract":
                    deployContracts.append(part)
                elif current_flag == "address":
                    deployAddresses.append(part)
                elif current_flag == "account":
                    deployAccounts.append(part)

        pathArray = []
        resAddress = []
        resAccounts = []
        for i in range(len(deployContracts)):
            contract = deployContracts[i]
            binName = contract+'.bin'
            binPath = os.path.join(allbinsDir,project_name)
            binPath = os.path.join(binPath,binName)
            if os.path.exists(binPath):
                pathArray.append(binPath)
                resAddress.append(deployAddresses[i])
                resAccounts.append(deployAccounts[i])
        def format_address(address):
            # 确保以 0x 开头
            if not address.startswith("0x"):
                address = "0x" + address
             # 补齐不足的字符（用 0 填充）
            if len(address) < 42:
                address = "0x" + address[2:].rjust(40, "0")
            # 去掉多余的字符（保留 0x 后的 40 个字符）
            address = address[:42]  # 0x + 40 个字符 
            return address
        # 处理 resAddress
        resAddress = [format_address(addr) for addr in resAddress] 
        # 处理 resAccounts
        resAccounts = [format_address(acc) for acc in resAccounts]
        ## account和address可能有问题，改一下
        contract_part = "-deploy_contract " + " ".join(pathArray)
        address_part = "-deploy_address " + " ".join(resAddress)
        account_part = "-deploy_account " + " ".join(resAccounts)
        # 拼接成完整命令
        command = f"{contract_part} {address_part} {account_part}"
        cmd_str_exec += command
    except Exception as e:
        print(f"Build failed with error: {e}") 

    try:
        print("Running build command...")
        result_build = subprocess.run(cmd, shell=True, check=True, text=True)
        print("Build completed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Build failed with error: {e}")
        exit(1)  # 如果 build 失败，退出程序

    # 执行 build 命令
    try:
        print("Running build command...")
        result_build = subprocess.run(cmd_str_build, shell=True, check=True, text=True)
        print("Build completed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Build failed with error: {e}")
        exit(1)  # 如果 build 失败，退出程序

    # 执行 exec 命令
    try:
        print("Running exec command...")
        result_exec = subprocess.run(cmd_str_exec, shell=True, check=True, text=True)
        print("Exec completed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Exec failed with error: {e}")



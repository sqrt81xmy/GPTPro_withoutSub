import json
import os
import re
import shutil
from slither import Slither
from solc_select import solc_select
from packaging import specifiers, version
import subprocess


base_dir = "DAppSCAN/DAppSCAN-source/contracts/Ackee_Blockchain-Layer_Zero/LayerZero-a5b266aa54714035314cbe5e451b2ec0db81b552/contracts"


def get_solc_version(file_path):
    """
    从 Solidity 文件中提取 pragma 声明的版本
    """
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        match = re.search(r"pragma solidity\s+([^;]+);", content)
        if match:
            version = match.group(1).strip()
            return version
    return None

def install_solc_version(version_range):
    """
    根据版本范围（如 '>=0.5.0'）返回一个应该安装的 Solidity 版本。
    如果没有满足范围的版本，则安装一个默认版本（如最新稳定版本）。
    
    :param version_range: Solidity 版本范围（字符串，如 '>=0.5.0'）
    :return: 安装的 Solidity 版本（字符串）
    """
    if re.match(r"^\d+\.\d+\.\d+$", version_range):
        # 如果是具体的版本号，直接返回该版本
        recommended_version = version_range
    else:
        # 获取已安装的 Solidity 版本
        result = subprocess.run(["solc-select", "versions"], capture_output=True, text=True)
        installed_versions = []
        for line in result.stdout.splitlines():
            
            if line.strip().startswith("Available versions:"):
                continue
            version_match = re.match(r"(\d+\.\d+\.\d+)", line.strip())
            if version_match:
                installed_versions.append(version_match.group(1))
        
        # 解析版本范围
        spec = specifiers.SpecifierSet(version_range)
        
        # 检查是否有已安装的兼容版本
        compatible_versions = [v for v in installed_versions if version.parse(v) in spec]
        if compatible_versions:
            recommended_version = max(compatible_versions, key=lambda v: version.parse(v))
            solc_select.switch_global_version(recommended_version,False)
            # 如果有兼容版本，返回最新的兼容版本
            return recommended_version
        
        # 如果没有兼容版本，获取可安装的版本列表
        result = subprocess.run(["solc-select", "install"], capture_output=True, text=True)
        available_versions = []
        for line in result.stdout.splitlines():
            if line.strip().startswith("Available versions to install:"):
                continue
            available_versions.append(line.strip())
        
        # 从可安装的版本中选择满足范围的最新版本
        compatible_available_versions = [v for v in available_versions if version.parse(v) in spec]
        if compatible_available_versions:
            # 选择满足范围的最新版本
            recommended_version = max(compatible_available_versions, key=lambda v: version.parse(v))
        else:
            # 如果没有满足范围的版本，选择默认版本（最新稳定版本）
            print("No compatible version found for the range. Installing the latest stable version.")
            recommended_version = max(available_versions, key=lambda v: version.parse(v))
    
    # 安装推荐的版本
    try:
        print(f"Installing Solidity version {recommended_version}...")
        subprocess.run(["solc-select", "install", recommended_version], check=True)
        solc_select.switch_global_version(recommended_version,False)
        print(f"Solidity version {recommended_version} installed successfully.")
        return recommended_version
    except subprocess.CalledProcessError as e:
        print(f"Failed to install Solidity version {recommended_version}: {e}")
        # 如果安装失败，尝试安装另一个版本
        fallback_version = "0.8.0"  # 默认回退版本
        try:
            print(f"Attempting to install fallback version {fallback_version}...")
            subprocess.run(["solc-select", "install", fallback_version], check=True)
            solc_select.switch_global_version(recommended_version,False)
            print(f"Fallback Solidity version {fallback_version} installed successfully.")
            return fallback_version
        except subprocess.CalledProcessError as e:
            print(f"Failed to install fallback version {fallback_version}: {e}")
            raise RuntimeError("Unable to install any Solidity version.")


def set_solidity_correct_version(file_path):
    version = get_solc_version(file_path)
    if version:
        install_solc_version(version)
        
        


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



def deal_call_contract(base_dir):
   
    # set_solidity_correct_version(base_dir)
    slither = Slither(base_dir)  # 当前目录下的所有 Solidity 文件
    # 遍历所有合约
    for contract in slither.contracts:
        print(f"call_Contract: {contract.name}")
        
        # 遍历所有函数
        for function in contract.functions:
            print(f"  Function: {function.name}")
            
            # 遍历函数中的调用
            for internal_call in function.internal_calls:
                print(f"    -> Internal call: {internal_call.name}")
            
            for external_call in function.high_level_calls:
                contract_called, function_called = external_call
                print(f"    -> External call: {contract_called.name}.{function_called.name}")
            
            for low_level_call in function.low_level_calls:
                print(f"    -> Low-level call: {low_level_call}")

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


def deal_error(path):
    with open("./error.txt",'a') as file:
        file.write(path+'\n')
    return None

def rm_node(path):
    # 删除 node_modules 目录
    node_modules_path = os.path.join(path, "node_modules")
    if os.path.exists(node_modules_path):
        print(f"删除路径 {path} 中的 node_modules 目录...")
        shutil.rmtree(node_modules_path)
    else:
        print(f"路径 {path} 中没有 node_modules 目录")
        deal_error(path)

    print(f"路径 {path} 处理完成\n")

def install_node(path):
    print(f"在路径 {path} 中运行 npm install hardhat...")
    try:
        subprocess.run(["npm", "install"], check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"在路径 {path} 中运行 npm install hardhat 失败: {e}") 
        return False

def output(path,called,outputDir):
    dict1 = {'file_path':path,'external_functions':called}
    pattern = r'/(\d+)(/|$)'
    match = re.search(pattern, path)
    if match:
        print(f"路径: {path}")
        print(f"提取的数字: {match.group(1)}")
        with open(os.path.join(outputDir,str(match.group(1)))+'.json','w') as file:
            json.dump(dict1, file, indent=4)
    else:
        deal_error(path)

def deal_mainContracts(path):
    mainContracts_path = os.path.join(path,'deploy.txt')
    if not os.path.exists(mainContracts_path):
        print(f"主文件存储deploy.txt不存在: {mainContracts_path}")
        deal_error(path)
        return []
    with open(mainContracts_path,'r') as file:
        ls = file.readlines() 
    solc_array = []
    get_all_sol(path,solc_array)
    sol_map = {}
    for solc in solc_array:
        solcs = solc.split('/')
        sol_map[solcs[-1]] = solc
    after_filtered = []
    for line in ls: 
        file_name = line.strip()
        if not file_name.endswith('.sol'):
            file_name += '.sol'  
        if file_name in sol_map.keys():
            after_filtered.append(sol_map[file_name])
    return after_filtered
 

if __name__ == "__main__": 
    # dir = "/home/mingyue/Smartian/DAppSCAN/DAppSCAN-source/contracts/Chainsulting-Furucombo-project2/trevi-b3f7fd332873321152db48c9d43fc23a60a29f1a"
    # dir = "/home/mingyue/Smartian/Web3Bugs/contracts/5"
    # base_dir = "/home/mingyue/Smartian/Web3Bugs/contracts/5/vader-protocol"
    # base_dir = "/home/mingyue/Smartian/Web3Bugs/contracts/10/contracts"
    base_dir = "/home/mingyue/Smartian/Web3Bugs"
    file = "hardhat_pro.txt"
    file_path = os.path.join(base_dir,file)
    with open("./error.txt",'w') as file:
        file.write('')
    with open(file_path,'r') as file:
        lines = file.readlines()
    # needs_to_deploy = ['Visor','MainFrame','Hypervisor']
    for line in lines:
        path = line.strip() 
        # 检查路径是否存在
        if not os.path.exists(path):
            print(f"路径不存在: {path}")
            deal_error(path)
            continue

        #读取目标项目的主文件：
        after_filter = deal_mainContracts(path)
        if len(after_filter) == 0:
            print(f"deploy.txt可能存在问题! {path}")
            deal_error(path)
            continue
       
        # 切换到目标路径
        os.chdir(path)
        ## 安装node_modules
        if os.path.exists(os.path.join(path,'node_modules')):
            flag = install_node(path)
            if flag == False:
                continue
        
        slither = Slither(path) 
        ##先制作一个文件的contracts_map
        contacts_map = {}
        effective_deploys = 0
        for contract in slither.contracts:
            abs_path = contract.source_mapping.filename.absolute
            if abs_path not in contacts_map.keys():
                contacts_map[abs_path] = []
                contacts_map[abs_path].append(contract)
                effective_deploys += 1
            else:
                contacts_map[abs_path].append(contract)
                effective_deploys += 1
        
        needs_to_deploy = []
        for filter1 in after_filter:
            if filter1 in contacts_map.keys():
                for contract in contacts_map[filter1]:
                    needs_to_deploy.append(contract.name)

        if len(needs_to_deploy) == 0:
            print(f"deploy.txt可能存在问题! {path}")
            deal_error(path)
            continue
        ## start_to operate
        inherits = []
        calls = [] 
        operate_inherit(slither,needs_to_deploy,inherits)
        operate_called(slither,needs_to_deploy,calls) 
        # deal_content(calls,inherits,slither)
        output(path,calls,os.path.join(base_dir,'output')) 
        ##卸载node_modules
        rm_node(path)

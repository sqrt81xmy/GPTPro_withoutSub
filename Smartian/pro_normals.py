import os
import time
import subprocess
import shutil

# 定义路径
b2_directory = '/home/mingyue/Smartian/dataset_project/dataset'                                      # B2 文件夹路径 
output_directory = '/home/mingyue/Smartian/dataset_project/normalFuncs'   # output 文件夹路径

# 如果 output 文件夹不存在，则创建它
if not os.path.exists(output_directory):
    os.mkdir(output_directory)

# 遍历 bin 文件夹中的每个文件
cnt = 0
for proName in os.listdir(b2_directory):
    project_path = os.path.join(b2_directory,proName)
    normal_path = os.path.join(output_directory,proName)
    for fileName in os.listdir(project_path):
        file_path = os.path.join(project_path,fileName)
        abi_bin_files = os.listdir(file_path)
        abi_map = {}
        bin_map = {}
        contracts = []
        for abi_bin_file in abi_bin_files:
            if abi_bin_file.endswith('.abi'):
                abi_map[abi_bin_file] = abi_bin_file
            if abi_bin_file.endswith('.bin'):
                bin_map[abi_bin_file] = abi_bin_file
        for abi_file in abi_map.keys():
            contracts.append(abi_file.replace('.abi',''))
        for contract in contracts:
            abi_path = os.path.join(file_path,contract+'.abi')
            bin_path = os.path.join(file_path,contract+'.bin')

            output_file = os.path.join(normal_path, contract + '_normalFuncs.txt')
            if(os.path.exists(output_file)):
                # print("kl",cnt)
                # cnt+=1
                continue
            # else:
            #     print(filename)
            cnt+=1
                    # 创建命令
            command = f"dotnet ./src/bin/Debug/net8.0/Smartian.dll fuzz -p {bin_path} -a {abi_path} -t 3600 -o output"
            print(f"Executing command: {command}")

            # 启动子进程运行命令
            process = subprocess.Popen(command, shell=True)

            # 等待 5 秒
            time.sleep(5)

            # 结束子进程
            process.terminate()
            process.wait()  # 等待进程退出

            # 检查 normalFuncs.txt 文件是否生成
            # normal_funcs_file = './normalFuncs.txt'
            # if os.path.exists(normal_funcs_file):
            #     # 生成新的文件名
            #     new_file_name = os.path.join(output_directory, f"{filename.replace('.bin', '')}_normalFuncs.txt")
            #     # 移动并重命名文件
            #     shutil.move(normal_funcs_file, new_file_name)
            #     print(f"Moved {normal_funcs_file} to {new_file_name}")
            #     time.sleep(5)
            # else:
            #     print(f"No normalFuncs.txt found after running the command for {filename}.")/home/mingyue/Smartian/EVMAnalysis/src/FrontEnd
import os
base_dir = "./dataset_project/normalFuncs"
dirs = os.listdir(base_dir)
with open("./artic.txt",'r') as file:
    lines = file.readlines()
res_lines = []
for dir in dirs:
    for normal in os.listdir(os.path.join(base_dir,dir)):
        tag = normal.replace('_normalFuncs.txt','')
        tmp_str = tag + ',' + dir
        for line in lines:
            if tmp_str in line:
                res_lines.append(line)
with open("./res_arti.txt",'w') as file:
    file.writelines(res_lines)

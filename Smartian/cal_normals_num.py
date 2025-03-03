import os
base_dir = "/home/mingyue/Smartian/dataset_project/normalFuncs"
cnt = 0
for dir in os.listdir(base_dir):
    pro_dir = os.path.join(base_dir,dir)
    files = os.listdir(pro_dir)
    cnt += len(files)
print(cnt)
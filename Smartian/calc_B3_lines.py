import os

base_b3_dir = "./B3/sol"
dirs = os.listdir(base_b3_dir)
max_l = 0
for dir in dirs:
    with open(os.path.join(base_b3_dir,dir),"r") as file:
        lines = file.readlines()
    if(len(lines)>max_l):
        max_l = len(lines)
print(max_l)
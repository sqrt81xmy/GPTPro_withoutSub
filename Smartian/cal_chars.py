import os
cnt = 0

def cal_pro_chars(path):
    global cnt
    if not os.path.isdir(path):
        if(path.endswith('.sol')):
            with open(path,'r') as file:
                content = file.read()
            cnt += len(content)
        return
    dirs = os.listdir(path)
    for dir in dirs:
        cal_pro_chars(os.path.join(path,dir))

if __name__ == "__main__":
    file_path = "/home/mingyue/Smartian/Web3Bugs/hardhat_pro.txt"
    xx = 0
    with open(file_path,'r') as file:
        lines = file.readlines()
    for line in lines:
        cnt = 0
        path = line.strip()
        cal_pro_chars(path) 
        if(cnt<192000):
            xx += 1
        print(cnt)
    print(xx)
    
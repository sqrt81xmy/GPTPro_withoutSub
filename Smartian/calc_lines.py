import os
base_dir = "DAppSCAN/DAppSCAN-source/contracts"
yh = []
cnt = 0
def deal_lines(file_path):
    global cnt
    if(os.path.isdir(file_path)):
        dirs = os.listdir(file_path)
        for dir in dirs:
            if dir.endswith(".sol"):
                with open(os.path.join(file_path,dir),"r", encoding="ISO-8859-1") as file:
                    lines = file.read()
                    cnt += len(lines)
            else:
                deal_lines(os.path.join(file_path,dir))

def calc_lines():
    global cnt
    with open("./DApp_dataset.txt","r") as file:
        lines = file.readlines()
    for line in lines:
        line = line.replace('\n','')
        file_path = os.path.join(base_dir,line)
        cnt = 0
        deal_lines(file_path)
        yh.append({
            "project": line,
            "cnt": cnt
            })

def calc_lines1():
    global cnt
    dirs = os.listdir(base_dir)
    for dir in dirs:
        file_path = os.path.join(base_dir,dir)
        cnt = 0
        deal_lines(file_path)
        yh.append({
            "project": dir,
            "cnt": cnt
            })

calc_lines()
str1 = ""
ll = 0
cvcv = 0
for xx in yh:
    if(xx['cnt']>6000): 
        str1 += (str(xx['cnt']) +"  " + xx['project'] )
        str1 += "\n"
        if(xx['cnt'] > cvcv):
            cvcv = xx['cnt']
    if(xx['cnt']>192000):
        ll += 1
with open("./lines_DApp_all.txt","w") as file:
    file.write(str1)
print(ll,cvcv)


import os
import json
baseDir = "/home/mingyue/Smartian/DAppSCAN/DAppSCAN-source/SWCsource"
targets = [101,104,105,106,107,110,113,114,115,116,124,127]
DApp = []

def dfs_json(baseDir,jsonArray):
    dirs = os.listdir(baseDir)
    for dir in dirs:
        if dir.endswith('.json'):
            jsonArray.append(os.path.join(baseDir,dir))
        else:
            dfs_json(os.path.join(baseDir,dir),jsonArray)

def exist_target(category):
    for target in targets:
        if str(target) in category:
            return True
    return False

def deal_json(json_file):
    with open(json_file,"r") as file:
        content = json.load(file)
    for SWC in content['SWCs']:
        category = SWC['category']
        if exist_target(category):
            DApp.append(content['filePath'])
            break

def calc_datasets_num_DAppScan():
    projects = os.listdir(baseDir)
    for project in projects:
        project_dir = os.path.join(baseDir,project)
        jsonArray = []
        dfs_json(project_dir,jsonArray)
        for json_file in jsonArray:
            deal_json(json_file)

calc_datasets_num_DAppScan()
str = ""
xx = []
for pro in DApp:
    array = pro.split('/')
    xx.append(array[2])
xx = list(set(xx))
for hh in xx:
    str += hh
    str += '\n'
with open("./DApp_dataset.txt",'w') as file:
    file.write(str)
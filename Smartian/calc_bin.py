import os
import json
base_dir = "/home/mingyue/Smartian/DAppSCAN/DAppSCAN-bytecode/bytecode/consensys-The_LAO"
bin = ""
def calc_bin():
    entries = os.listdir(base_dir)
    for entry in entries:
        json_path = os.path.join(base_dir,entry)
        with open(json_path,"r") as file:
            content = json.load(file)
        mm = 1

calc_bin()

import json
from deepseek_findblock_reachif import chatWithDeepseek

def deal_decode_error(messages):

    with open("prompt_check_decodeError_result.txt") as file:
        prompt = file.read()
    resStudent = chatWithDeepseek(prompt, messages)
    return resStudent


import json
import re

from agent.first_agent.deepseek_findblock_reachif import chatWithDeepseek

def deal_decode_error(result):
    messages = []
    with open("./agent/second_agent/prompt_check_decodeError_result.txt") as file:
        prompt = file.read()
    prompt = re.sub(r'`input`', result, prompt)
    resStudent = chatWithDeepseek(prompt, messages)
    return resStudent


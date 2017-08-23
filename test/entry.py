print("file is", __file__)
print("package is", __package__)


from sys import path as routine
from os import system
from pprint import pprint


pprint(routine)
# print("erase routine", routine.pop(0))
routine.append("./implicit")
pprint(routine)


import explicit.libe
from libi import *


print(type(explicit.libe))
print(dir(explicit.libe))

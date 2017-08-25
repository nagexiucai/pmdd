from cfg import tprint, tpprint


tprint("file is", __file__)
tprint("package is", __package__)


from sys import path as routine
from os import system


# tpprint(routine)
# tprint("erase routine", routine.pop(0))
routine.append("./implicit")
# tpprint(routine)


# 测试引入实体后重命名
from explicit.libe import a, aa, b, BB
from libi import *


class TestForFromClassImportItsSundryAttributes:
    ClassAttribute = lambda: tprint("class attribute")
    def ordinaryMethod(self):
        tprint("ordinary method")
    @staticmethod
    def staticMethod():
        tprint("static method")
    @classmethod
    def classMethod(that):
        tprint("class method")
    def __repr__(self):
        tprint("magic method")
        return "test for from class import its sundry attributes"

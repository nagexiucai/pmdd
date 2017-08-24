print("file is", __file__)
print("package is", __package__)


from sys import path as routine
from os import system
from pprint import pprint


pprint(routine)
# print("erase routine", routine.pop(0))
routine.append("./implicit")
pprint(routine)


from explicit.libe import a, aa, b, BB
from libi import *


class TestForFromClassImportItsSundryAttributes:
    ClassAttribute = lambda: print("class attribute")
    def ordinaryMethod(self):
        print("ordinary method")
    @staticmethod
    def staticMethod():
        print("static method")
    @classmethod
    def classMethod(that):
        print("class method")
    def __repr__(self):
        print("magic method")
        return "test for from class import its sundry attributes"

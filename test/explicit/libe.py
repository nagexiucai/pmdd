print("file is", __file__)
print("package is", __package__)


from operator import getitem
from collections import Counter


def me():
    print("this is", me.__name__, "in", __file__)


from explicit.intricacy import *

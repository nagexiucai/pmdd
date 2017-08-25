from cfg import tprint


tprint("file is", __file__)
tprint("package is", __package__)


from operator import getitem
from collections import Counter


def me():
    tprint("this is", me.__name__, "in", __file__)


from explicit.intricacy import *


# 测试相对引入
# from ..implicit import libi  # attempted relative import beyond top-level package
from .intricacy import *

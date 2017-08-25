from cfg import tprint


tprint("file is", __file__)
tprint("package is", __package__)


def init():
    tprint("this is", __file__, init.__name__, "in", __file__)


class Init(object):
    def __init__(self):
        tprint("i am", self.__class__.__name__, "in", __file__)


from explicit.intricacy.a import *
from explicit.intricacy.b import b, bb as BB

__all__ = (
    "a",
    "aa",
    "b",
    "BB"
)

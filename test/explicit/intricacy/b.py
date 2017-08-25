from cfg import tprint


tprint("file is", __file__)
tprint("package is", __package__)


def b():
    tprint("this is", b.__name__, "in", __file__)


def bb():
    tprint("this is", bb.__name__, "in", __file__)


def bbb():
    tprint("this is", bbb.__name__, "in", __file__)

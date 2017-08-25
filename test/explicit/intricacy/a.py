from cfg import tprint


tprint("file is", __file__)
tprint("package is", __package__)


def a():
    tprint("this is", a.__name__, "in", __file__)


def aa():
    tprint("this is", aa.__name__, "in", __file__)

print("file is", __file__)
print("package is", __package__)


def a():
    print("this is", a.__name__, "in", __file__)


def aa():
    print("this is", aa.__name__, "in", __file__)

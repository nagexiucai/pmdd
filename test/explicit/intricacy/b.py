print("file is", __file__)
print("package is", __package__)


def b():
    print("this is", b.__name__, "in", __file__)


def bb():
    print("this is", bb.__name__, "in", __file__)


def bbb():
    print("this is", bbb.__name__, "in", __file__)

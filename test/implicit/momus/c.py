print("file is", __file__)
print("package is", __package__)


def c():
    print("this is", c.__name__, "in", __file__)

def cc():
    print("this is", cc.__name__, "in", __file__)

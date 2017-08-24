print("file is", __file__)
print("package is", __package__)


def init():
    print("this is", __file__, init.__name__, "in", __file__)


class Init(object):
    def __init__(self):
        print("i am", self.__class__.__name__, "in", __file__)

# TODO: 目录模块下__init__.py中顶层定义下列魔法仍是然并卵
def __init__(this, *args, **kwargs):
    print("top __init__ function within folder module's __init__.py", this, args, kwargs, "in", __file__)

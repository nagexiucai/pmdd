from cfg import tprint


tprint("file is", __file__)
tprint("package is", __package__)


# TODO: 在脚本顶层定义以下魔法属性是然并卵的事情
# __new__
# __init__
# __call__
# __add__
# __del__
# __eq__
# __metaclass__
# __slot__


# TODO: 为何可以给模块对象动态添加却用不到下列方法
# def __getattr__(this, name):
#     tprint("get a none-existent attribute", name, "in", __file__)
# def __setattr__(this, name, entity):
#     tprint("set attribute", this, name, entity, "in", __file__)
# def __getattribute__(this, name):
#     tprint("get a defined attribute", name, "in", __file__)


__dict__ = {"name": "bob", "sex": "secret"}


def __init__(this, *args, **kwargs):
    tprint("top __init__ function within a script is", type(__init__), "in", __file__, this, args, kwargs)


__init__ = lambda *args, **kwargs: tprint(args, kwargs)  # TODO: 脚本顶层函数和变量名会被后者覆盖


def d():
    tprint("this is", d.__name__, "in", __file__)


def dd():
    tprint("this is", dd.__name__, "in", __file__)


class D:
    def __init__(self):
        tprint("classic class in newer python is normal class automatically")


# __name__ = "kookie"  # TODO: 仅在启动脚本没有__name__属性时系统会将该属性设置为__main__


if __name__ == "__main__":
    tprint(type(__init__), __init__())  # TODO: 调用的__init__此时身为后定义的

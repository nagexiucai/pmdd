from cfg import tprint, tpprint


tprint("file is", __file__)
tprint("package is", __package__)


def init():
    tprint("this is", __file__, init.__name__, "in", __file__)


class Init(object):
    def __init__(self):
        tprint("i am", self.__class__.__name__, "in", __file__)


def me():
    tprint("this is", me.__name__, "in", __file__)


from momus import c


c.c()
c.cc()

import momus
tprint("folder without __init__.py is", type(momus), "in", __file__, dir(momus))
tprint("script under folder without __init__ attribute is", type(c), "in", __file__, dir(c))


from momus import d
d.age = 0
tprint(d.age, dir(d))
from cfg import tpprint
tprint("=====folder module without __init__.py===== from", __file__)
tpprint(momus.__dict__)
tprint("=====script module===== from", __file__)
tpprint(d.__dict__)
tprint("=====function within script module===== from", __file__)
tpprint(d.d.__dict__)
tprint("=====class within script module===== from", __file__)
tpprint(d.D.__dict__)
from momus import c as C
tprint("=====use as rename entities===== from", __file__)
tpprint(C.__dict__)
tprint(C.__spec__.origin)

# 测试相对导入
# from .momus.c import c  # cannot perform relative import because parent module '' not loaded

print("file is", __file__)
print("package is", __package__)


def init():
    print("this is", __file__, init.__name__, "in", __file__)


class Init(object):
    def __init__(self):
        print("i am", self.__class__.__name__, "in", __file__)


def me():
    print("this is", me.__name__, "in", __file__)


from momus import c


c.c()
c.cc()

import momus
print("folder without __init__.py is", type(momus), "in", __file__, dir(momus))
print("script under folder without __init__ attribute is", type(c), "in", __file__, dir(c))


from momus import d
d.age = 0
print(d.age, dir(d))
from pprint import pprint
print("=====folder module without __init__.py===== from", __file__)
pprint(momus.__dict__)
print("=====script module===== from", __file__)
pprint(d.__dict__)
print("=====function within script module===== from", __file__)
pprint(d.d.__dict__)
print("=====class within script module===== from", __file__)
pprint(d.D.__dict__)
from momus import c as C
print("=====use as rename entities===== from", __file__)
pprint(C.__dict__)
print(C.__spec__.origin)

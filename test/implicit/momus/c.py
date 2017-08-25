from cfg import tprint


tprint("file is", __file__)
tprint("package is", __package__)


def c():
    tprint("this is", c.__name__, "in", __file__)

def cc():
    tprint("this is", cc.__name__, "in", __file__)

# 测试相对导入
from . import d
# from .. import momus  # TODO: attempted relative import beyond top-level package

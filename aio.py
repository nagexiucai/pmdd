#!/usr/bin/env python
# -*- encoding: utf-8 -*-

__version__ = "0.0.1"
__author__ = "nagexiucai"
__email__ = "me@nagexiucai.com"


import sys
import os
import atexit
import importlib
import json
from types import ModuleType
from collections import Counter
from cfg import mprint, mpprint

__out__ = {}
__record__ = []
atexit.register(lambda: mpprint(__record__))
atexit.register(lambda: mpprint(__out__))


import string
import re
import tokenize
import ast
import modulefinder


# TODO:
# 1、仅用文本类型内置方法
# 2、运用正则表达式
# 3、依赖词法库
# 4、基于抽象语法树
# 5、标准工具改造
# a、exec探测module
# b、import钩子（imp/importlib）

suffix = (".py", ".pyc", ".pyd", "pyo", "pyw", ".lib", ".a", ".dll", ".so")

sys.path.extend([
    "./test/",
    "./test/implicit/"
])  # TODO: 将隐式依赖目录路径添加到此处


# mpprint(sys.path)


def __import_from__(module):
    try:
        return __import__(module)
    except (ValueError, ImportError):
        mprint("@", "import failed", module)


def search(name):
    for path in sys.path:
        for root, dirs, files in os.walk(path):
            # mprint(root, dirs, files)
            m = os.path.basename(root)
            if m == name:
                return root
            m = _search(name, files)
            if m:
                return os.path.join(root, m)


def _search(name, files):
    for _ in suffix:
        entity = name + _
        if entity in files:
            return entity


def _relative_convert_to_absolute(relative, abspath):
    buffer = []
    for c in relative:
        if "." == c:
            buffer.append(os.path.basename(os.path.dirname(abspath)))
    buffer.reverse()
    return ".".join(buffer)

def rinse(entry):
    md = {}
    entry = os.path.abspath(entry)
    if os.path.isdir(entry):
        entry = os.path.join(entry, "__init__.py")
    if entry in __record__:
        return {}
    __record__.append(entry)
    with open(entry, encoding="utf-8") as py:
        for line in py:
            line = line.strip()  # TODO: 处理单行注释、多行注释内的import/from-import示例
            if line.startswith("from ") or line.startswith("import "):  # TODO: 处理多行语句（\）
                _ = test(line)
                mprint(">", line)
                if _ is False:
                    mprint("@", "syntax error.")
                elif _ is None:
                    mprint("@", "import error.")
                else:
                    try:
                        if line.startswith("from "):
                            _, __ = line.split(" import ")
                        else:
                            _, __ = line.split("import ")
                        if _:
                            _, package = _.split()
                        else:
                            package = ""
                    except ValueError:
                        mprint("@", "unsupported now")
                        continue
                    phrases = [[__.strip() for __ in _.strip().split("as")] for _ in __.split(",")]
                    if package:
                        if package.startswith("."):
                            package = _relative_convert_to_absolute(package, entry)
                        m = __import_from__(package)
                        if "explicit.libe" == package:  # TODO: 暴露之前对包导入认识的盲点，引起对__import__("x.y")返回值的注意，进而导致rinse的重构
                            for k in dir(m):
                                v = getattr(m, k)
                                if type(v) is ModuleType:
                                    mprint("@", "inner", k)
                        if m:
                            owner = _do_owner(m)
                            mprint("$", package, owner)
                            md[package] = {"user": [entry], "owner": owner}
                        else:
                            mprint("@", "uh-huh")
                    for phrase in phrases:
                        if "cfg" == package:
                            continue
                        if "*" == phrase[-1]:  # TODO: 处理暴力引用（*）
                            mprint("@", "savage import")
                            continue
                        absolute = ".".join((package, phrase[0])) if package else phrase[0]
                        mprint("====>", absolute)
                        m = __import_from__(absolute)
                        if m:
                            owner = _do_owner(m)
                            mprint("$", absolute, owner)
                            md[absolute] = {"user": [entry], "owner": owner}
    return md


def _do_owner(m):
    try:
        owner = m.__spec__.origin
    except AttributeError:
        try:
            owner = m.__spec__
        except AttributeError:
            owner = None
    return owner


def test(text):
    try:
        exec(text)
    except SyntaxError:
        return False
    except ImportError:
        return None
    except SystemError as e:
        mprint("@", dir(e))
    else:
        return True


def tree(entry, out={}):
    if entry in (None, "built-in", "namespace", "frozen"):  # TODO: namespace是目录包下没有__init__.py的__spec__.origin
        return
    _ = os.path.basename(entry)
    for __ in suffix[1:]:
        if _.endswith(__):  # TODO: 似乎直接用entry不需要取出文件名
            return
    md = rinse(entry)
    for k, v in md.items():
        vv = out.get(k)
        if vv is not None:
            vv["user"].extend(v.get("user"))
        else:
            out[k] = v
    if not md:
        return
    for _, information in md.items():
        tree(information.get("owner"), out)


def analyse(jf):
    sb = open(jf, encoding="utf-8")
    jj = json.load(sb)
    sb.close()
    _ = []
    __ = []
    ___ = []
    opposite = {}
    for k, v in jj.items():
        _.append(k)
        __.append(v.get("owner"))
        user = v.get("user")
        assert len(user) == len(set(user))
        ___.extend(user)
        for u in user:
            if u in opposite:  # TODO: py3没有dict.has_key
                opposite[u].append(k)
            else:
                opposite[u] = [k]
    counter = Counter(__)
    mprint("$", "modules in total", len(_), "have not repetition", len(_) == len(set(_)))
    mprint("$", "owners in total", len(__), "have not repetition", len(__) == len(set(__)), "they are", [i for i in filter(lambda _: counter.get(_) > 1, counter)])  # TODO: filter在py3中返回生成器，在py2中返回和数据源容器类型相同
    mprint("$", "users in total", len(set(___)), "but import", len(___), "times in total")
    counter = Counter(___)
    mprint("$", "users repetition >>>>>")
    mpprint([i for i in filter(lambda _: counter.get(_) > 1, counter)])
    mprint("$", "opposite sees >>>>>")
    mpprint(opposite)
    mprint("$", "this project depends on >>>>")
    mpprint(dict([(i, opposite.get(i)) for i in filter(lambda _: _.startswith("E:\\nagexiucai\\pmdd"), opposite)]))


if __name__ == "__main__":
    tree("./test/entry.py", __out__)
    # mprint(dir())
    # mprint(globals())
    # mprint(locals())
    # analyse("./md-maps-plus.json")

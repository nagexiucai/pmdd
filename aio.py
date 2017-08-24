#!/usr/bin/env python
# -*- encoding: utf-8 -*-

__version__ = "0.0.1"
__author__ = "nagexiucai"
__email__ = "me@nagexiucai.com"

import sys
import os
import importlib
from pprint import pprint

import string
import re
import tokenize
import ast


# TODO:
# 1、仅用文本类型内置方法
# 2、运用正则表达式
# 3、依赖词法库
# 4、基于抽象语法树
# a、exec探测module
# b、import钩子（imp/importlib）

suffix = (".py", ".pyc", ".pyd", "pyo", "pyw", ".lib", ".a", ".dll", ".so")

sys.path.extend([
    "./test/",
    "./test/implicit/"
])  # TODO: 将隐式依赖目录路径添加到此处


pprint(sys.path)


def search(name):
    for path in sys.path:
        for root, dirs, files in os.walk(path):
            print(root, dirs, files)
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


def rinse(entry):
    with open(entry) as py:
        for line in py:
            line = line.strip()
            if line.startswith("from ") or line.startswith("import "):  # TODO: 处理多行语句（\）
                _ = test(line)
                if _ is False:
                    print("syntax error.")
                elif _ is None:
                    print("import error.")
                else:
                    print(line)
                    _, __ = line.split("import ")
                    if _:
                        _, package = _.split()
                    else:
                        package = "set"
                    phrases = [_.strip().split("as")[0].strip() for _ in __.split(",")]  # TODO: 处理暴力引用（*）
                    yield package, phrases


def test(text):
    try:
        exec(text)
    except SyntaxError:
        return False
    except ImportError:
        return None
    else:
        return True


def tree(pp):
    for package, phrases in pp:
        print(package, phrases)


if __name__ == "__main__":
    tree(rinse("./test/entry.py"))
    print(dir())
    print(globals())
    print(locals())
    print(search("libe"))

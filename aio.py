#!/usr/bin/env python
# -*- encoding: utf-8 -*-

__version__ = "0.0.1"
__author__ = "nagexiucai"
__email__ = "me@nagexiucai.com"

import os
import re
import importlib
import ast
import tokenize


def walk(entry):
    os.walk()


def parser(text):
    try:
        m = exec(text)
        print(m.__file__)
    except ImportError:
        return False
    else:
        return True


def tree(data):
    pass

if __name__ == "__main__":
    tree(walk("./test/entry.py"))
    print(dir())
    print(globals())
    print(locals())

/*
====> ntpath
$ ntpath C:\Python35\lib\ntpath.py
> import ce
@ import error.
> from ce import _have_functions
@ import error.
> from os.path import (curdir, pardir, sep, pathsep, defpath, extsep, altsep,
@ syntax error.

====> abc
$ abc C:\Python35\lib\abc.py
> from _io import (DEFAULT_BUFFER_SIZE, BlockingIOError, UnsupportedOperation,
@ syntax error.
> from _weakrefset import WeakSet
$ _weakrefset C:\Python35\lib\_weakrefset.py

====> linecache
$ linecache C:\Python35\lib\linecache.py
> from _warnings import (filters, _defaultaction, _onceregistry,
@ syntax error.
> import functools

====> _thread.RLock
@ import failed _thread.RLock
> from the wrapped function to the wrapper function (defaults to
@ syntax error.
> from _functools import cmp_to_key
$ _functools built-in

====> collections  # Import after _weakref to avoid circular import.
@ import failed collections  # Import after _weakref to avoid circular import.
> import sys

====> unittest
$ unittest C:\Python35\lib\unittest\__init__.py
@ ['__cause__', '__class__', '__context__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setstate__', '__sizeof__', '__str__', '__subclasshook__', '__suppress_context__', '__traceback__', 'args', 'with_traceback']
> from .result import TestResult
@ import error.
> from .case import (TestCase, FunctionTestCase, SkipTest, skip, skipIf,
@ syntax error.
@ ['__cause__', '__class__', '__context__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setstate__', '__sizeof__', '__str__', '__subclasshook__', '__suppress_context__', '__traceback__', 'args', 'with_traceback']
> from .suite import BaseTestSuite, TestSuite
@ import error.
> from .loader import (TestLoader, defaultTestLoader, makeSuite, getTestCaseNames,
@ syntax error.
@ ['__cause__', '__class__', '__context__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setstate__', '__sizeof__', '__str__', '__subclasshook__', '__suppress_context__', '__traceback__', 'args', 'with_traceback']
> from .main import TestProgram, main
@ import error.
@ ['__cause__', '__class__', '__context__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setstate__', '__sizeof__', '__str__', '__subclasshook__', '__suppress_context__', '__traceback__', 'args', 'with_traceback']
> from .runner import TextTestRunner, TextTestResult
@ import error.
@ ['__cause__', '__class__', '__context__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setstate__', '__sizeof__', '__str__', '__subclasshook__', '__suppress_context__', '__traceback__', 'args', 'with_traceback']
> from .signals import installHandler, registerResult, removeResult, removeHandler
@ import error.

====> _frozen_importlib
$ _frozen_importlib undefined
@ ['__cause__', '__class__', '__context__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setstate__', '__sizeof__', '__str__', '__subclasshook__', '__suppress_context__', '__traceback__', 'args', 'with_traceback']
> from . import _bootstrap
@ import error.
> import _frozen_importlib_external as _bootstrap_external

====> opcode.__all__
@ import failed opcode.__all__
> import argparse

====> momus.c
$ momus.c namespace
> from cfg import tprint
*/

maps = {
	'__future__': {
		'owner': 'C:\\Python35\\lib\\__future__.py',
		'user': ['doctest.py', 'codeop.py']
	},
	'__main__': {
		'owner': undefined,
		'user': ['pdb.py', 'bdb.py']
	},
	'_bootlocale': {
		'owner': 'C:\\Python35\\lib\\_bootlocale.py',
		'user': ['locale.py']
	},
	'_bz2': {
		'owner': 'C:\\Python35\\DLLs\\_bz2.pyd',
		'user': ['bz2.py']
	},
	'_codecs': {
		'owner': 'built-in',
		'user': ['codecs.py']
	},
	'_collections': {
		'owner': 'built-in',
		'user': ['__init__.py', 'threading.py']
	},
	'_collections_abc': {
		'owner': 'C:\\Python35\\lib\\_collections_abc.py',
		'user': ['os.py', '__init__.py', 'random.py']
	},
	'_compression': {
		'owner': 'C:\\Python35\\lib\\_compression.py',
		'user': ['lzma.py', 'gzip.py', 'bz2.py']
	},
	'_ctypes': {
		'owner': 'C:\\Python35\\DLLs\\_ctypes.pyd',
		'user': ['__init__.py']
	},
	'_datetime': {
		'owner': 'built-in',
		'user': ['datetime.py']
	},
	'_dummy_thread': {
		'owner': 'C:\\Python35\\lib\\_dummy_thread.py',
		'user': ['reprlib.py',
			'_dummy_thread.py',
			'tempfile.py',
			'dummy_threading.py',
			'_strptime.py']
	},
	'_dummy_threading': {
		'owner': 'C:\\Python35\\lib\\threading.py',
		'user': ['dummy_threading.py']
	},
	'_frozen_importlib': {
		'owner': undefined,
		'user': ['__init__.py']
	},
	'_frozen_importlib_external': {
		'owner': 'frozen',
		'user': ['__init__.py']
	},
	'_functools': {
		'owner': 'built-in',
		'user': ['functools.py']
	},
	'_hashlib': {
		'owner': 'C:\\Python35\\DLLs\\_hashlib.pyd',
		'user': ['hashlib.py']
	},
	'_heapq': {
		'owner': 'built-in',
		'user': ['heapq.py']
	},
	'_imp': {
		'owner': undefined,
		'user': ['imp.py']
	},
	'_io': {
		'owner': 'built-in',
		'user': ['io.py']
	},
	'_locale': {
		'owner': 'built-in',
		'user': ['re.py', 'locale.py', '_bootlocale.py']
	},
	'_lzma': {
		'owner': 'C:\\Python35\\DLLs\\_lzma.pyd',
		'user': ['lzma.py']
	},
	'_md5': {
		'owner': 'built-in',
		'user': ['hashlib.py']
	},
	'_opcode': {
		'owner': 'built-in',
		'user': ['opcode.py']
	},
	'_operator': {
		'owner': 'built-in',
		'user': ['operator.py']
	},
	'_random': {
		'owner': 'built-in',
		'user': ['random.py']
	},
	'_sha1': {
		'owner': 'built-in',
		'user': ['hashlib.py']
	},
	'_sha256': {
		'owner': 'built-in',
		'user': ['hashlib.py']
	},
	'_sha512': {
		'owner': 'built-in',
		'user': ['hashlib.py']
	},
	'_signal': {
		'owner': 'built-in',
		'user': ['signal.py']
	},
	'_socket': {
		'owner': 'C:\\Python35\\DLLs\\_socket.pyd',
		'user': ['socket.py']
	},
	'_sre': {
		'owner': 'built-in',
		'user': ['sre_compile.py', 'sre_constants.py']
	},
	'_stat': {
		'owner': 'built-in',
		'user': ['stat.py']
	},
	'_string': {
		'owner': 'built-in',
		'user': ['string.py']
	},
	'_strptime': {
		'owner': 'C:\\Python35\\lib\\_strptime.py',
		'user': ['datetime.py']
	},
	'_struct': {
		'owner': 'built-in',
		'user': ['struct.py']
	},
	'_thread': {
		'owner': 'built-in',
		'user': ['functools.py',
			'reprlib.py',
			'_dummy_thread.py',
			'tempfile.py',
			'threading.py',
			'_strptime.py']
	},
	'_threading_local': {
		'owner': 'C:\\Python35\\lib\\_threading_local.py',
		'user': ['threading.py']
	},
	'_weakref': {
		'owner': 'built-in',
		'user': ['_weakrefset.py', '__init__.py']
	},
	'_weakrefset': {
		'owner': 'C:\\Python35\\lib\\_weakrefset.py',
		'user': ['abc.py', 'weakref.py', 'threading.py']
	},
	'_winapi': {
		'owner': 'built-in',
		'user': ['subprocess.py']
	},
	'abc': {
		'owner': 'C:\\Python35\\lib\\abc.py',
		'user': ['io.py',
			'_collections_abc.py',
			'functools.py',
			'selectors.py']
	},
	'argparse': {
		'owner': 'C:\\Python35\\lib\\argparse.py',
		'user': ['doctest.py',
			'code.py',
			'tokenize.py',
			'inspect.py',
			'dis.py',
			'tarfile.py']
	},
	'atexit': {
		'owner': 'built-in',
		'user': ['weakref.py', '__init__.py']
	},
	'bdb': {
		'owner': 'C:\\Python35\\lib\\bdb.py',
		'user': ['pdb.py']
	},
	'builtins': {
		'owner': undefined,
		'user': ['copy.py',
			'__init__.py',
			'reprlib.py',
			'doctest.py',
			'gettext.py',
			'tokenize.py',
			'codecs.py',
			'locale.py',
			'inspect.py',
			'operator.py',
			'pydoc.py',
			'tarfile.py',
			'lzma.py',
			'gzip.py',
			'bz2.py',
			'subprocess.py']
	},
	'bz2': {
		'owner': 'C:\\Python35\\lib\\bz2.py',
		'user': ['shutil.py', 'tarfile.py']
	},
	'calendar': {
		'owner': 'C:\\Python35\\lib\\calendar.py',
		'user': ['_strptime.py']
	},
	'cfg': {
		'owner': 'C:\\eclipse\\workspace\\pmdd\\cfg.py',
		'user': ['entry.py', 'libi.py', '__init__.py']
	},
	'cmd': {
		'owner': 'C:\\Python35\\lib\\cmd.py',
		'user': ['pdb.py']
	},
	'code': {
		'owner': 'C:\\Python35\\lib\\code.py',
		'user': ['pdb.py']
	},
	'codecs': {
		'owner': 'C:\\Python35\\lib\\codecs.py',
		'user': ['tokenize.py', '__init__.py', 'plistlib.py']
	},
	'codeop': {
		'owner': 'C:\\Python35\\lib\\codeop.py',
		'user': ['code.py']
	},
	'collections': {
		'owner': 'C:\\Python35\\lib\\collections\\__init__.py',
		'user': ['functools.py',
			'__init__.py',
			'traceback.py',
			'doctest.py',
			'argparse.py',
			'tokenize.py',
			'locale.py',
			'enum.py',
			'pprint.py',
			'inspect.py',
			'dis.py',
			'string.py',
			'pydoc.py',
			'shutil.py',
			'threading.py',
			'contextlib.py',
			'__init__.py',
			'platform.py',
			'selectors.py',
			'shlex.py',
			'difflib.py']
	},
	'collections.abc': {
		'owner': 'C:\\Python35\\lib\\collections\\__init__.py',
		'user': ['types.py', 'inspect.py']
	},
	'contextlib': {
		'owner': 'C:\\Python35\\lib\\contextlib.py',
		'user': ['_threading_local.py', 'plistlib.py']
	},
	'copy': {
		'owner': 'C:\\Python35\\lib\\copy.py',
		'user': ['weakref.py',
			'copy.py',
			'__init__.py',
			'argparse.py',
			'gettext.py',
			'tarfile.py',
			'webbrowser.py']
	},
	'copyreg': {
		'owner': 'C:\\Python35\\lib\\copyreg.py',
		'user': ['copy.py', 're.py']
	},
	'ctypes._endian': {
		'owner': 'C:\\Python35\\lib\\ctypes\\__init__.py',
		'user': ['__init__.py']
	},
	'ctypes.wintypes': {
		'owner': 'C:\\Python35\\lib\\ctypes\\__init__.py',
		'user': ['platform.py']
	},
	'datetime': {
		'owner': 'C:\\Python35\\lib\\datetime.py',
		'user': ['plistlib.py', 'calendar.py']
	},
	'difflib': {
		'owner': 'C:\\Python35\\lib\\difflib.py',
		'user': ['doctest.py', 'difflib.py']
	},
	'dis': {
		'owner': 'C:\\Python35\\lib\\dis.py',
		'user': ['pdb.py', 'inspect.py']
	},
	'doctest': {
		'owner': 'C:\\Python35\\lib\\doctest.py',
		'user': ['heapq.py', 'doctest.py', 'difflib.py']
	},
	'dummy_threading': {
		'owner': 'C:\\Python35\\lib\\dummy_threading.py',
		'user': ['bz2.py', 'zipfile.py', 'subprocess.py']
	},
	'email.message': {
		'owner': 'C:\\Python35\\lib\\email\\__init__.py',
		'user': ['pydoc.py']
	},
	'email.parser': {
		'owner': 'C:\\Python35\\lib\\email\\__init__.py',
		'user': ['__init__.py']
	},
	'encodings': {
		'owner': 'C:\\Python35\\lib\\encodings\\__init__.py',
		'user': ['codecs.py', 'locale.py']
	},
	'enum': {
		'owner': 'C:\\Python35\\lib\\enum.py',
		'user': ['signal.py',
			'inspect.py',
			'__init__.py',
			'socket.py',
			'plistlib.py']
	},
	'errno': {
		'owner': 'built-in',
		'user': ['os.py',
			'gettext.py',
			'tempfile.py',
			'shutil.py',
			'gzip.py',
			'subprocess.py',
			'socket.py']
	},
	'explicit.libe': {
		'owner': './test\\explicit\\__init__.py',
		'user': ['entry.py']
	},
	'fnmatch': {
		'owner': 'C:\\Python35\\lib\\fnmatch.py',
		'user': ['bdb.py', 'shutil.py', 'glob.py']
	},
	'functools': {
		'owner': 'C:\\Python35\\lib\\functools.py',
		'user': ['linecache.py',
			'types.py',
			'locale.py',
			'signal.py',
			'fnmatch.py',
			'inspect.py',
			'operator.py',
			'tempfile.py',
			'contextlib.py',
			'pkgutil.py']
	},
	'gc': {
		'owner': 'built-in',
		'user': ['weakref.py']
	},
	'genericpath': {
		'owner': 'C:\\Python35\\lib\\genericpath.py',
		'user': ['posixpath.py', 'ntpath.py']
	},
	'getopt': {
		'owner': 'C:\\Python35\\lib\\getopt.py',
		'user': ['pdb.py', 'pydoc.py', 'webbrowser.py']
	},
	'gettext': {
		'owner': 'C:\\Python35\\lib\\gettext.py',
		'user': ['argparse.py', 'optparse.py', 'getopt.py']
	},
	'glob': {
		'owner': 'C:\\Python35\\lib\\glob.py',
		'user': ['pdb.py', 'webbrowser.py']
	},
	'gzip': {
		'owner': 'C:\\Python35\\lib\\gzip.py',
		'user': ['tarfile.py']
	},
	'hashlib': {
		'owner': 'C:\\Python35\\lib\\hashlib.py',
		'user': ['random.py']
	},
	'heapq': {
		'owner': 'C:\\Python35\\lib\\heapq.py',
		'user': ['__init__.py', 'difflib.py']
	},
	'http.server': {
		'owner': 'C:\\Python35\\lib\\http\\__init__.py',
		'user': ['pydoc.py']
	},
	'imp': {
		'owner': 'C:\\Python35\\lib\\imp.py',
		'user': ['inspect.py']
	},
	'importlib': {
		'owner': 'C:\\Python35\\lib\\importlib\\__init__.py',
		'user': ['inspect.py', 'imp.py', 'pkgutil.py']
	},
	'importlib._bootstrap': {
		'owner': 'C:\\Python35\\lib\\importlib\\__init__.py',
		'user': ['imp.py', 'pydoc.py']
	},
	'importlib._bootstrap_external': {
		'owner': 'C:\\Python35\\lib\\importlib\\__init__.py',
		'user': ['imp.py',
			'pydoc.py',
			'py_compile.py']
	},
	'importlib.machinery': {
		'owner': 'C:\\Python35\\lib\\importlib\\__init__.py',
		'user': ['inspect.py',
			'imp.py',
			'pydoc.py',
			'py_compile.py',
			'pkgutil.py']
	},
	'importlib.util': {
		'owner': 'C:\\Python35\\lib\\importlib\\__init__.py',
		'user': ['imp.py',
			'pydoc.py',
			'zipfile.py',
			'py_compile.py',
			'pkgutil.py']
	},
	'inspect': {
		'owner': 'C:\\Python35\\lib\\inspect.py',
		'user': ['doctest.py',
			'pdb.py',
			'bdb.py',
			'pydoc.py',
			'pkgutil.py']
	},
	'io': {
		'owner': 'C:\\Python35\\lib\\io.py',
		'user': ['os.py',
			'doctest.py',
			'gettext.py',
			'tokenize.py',
			'pprint.py',
			'dis.py',
			'pydoc.py',
			'tempfile.py',
			'tarfile.py',
			'lzma.py',
			'_compression.py',
			'gzip.py',
			'bz2.py',
			'zipfile.py',
			'__init__.py',
			'subprocess.py',
			'socket.py',
			'plistlib.py',
			'shlex.py']
	},
	'itertools': {
		'owner': 'built-in',
		'user': ['weakref.py',
			'__init__.py',
			'reprlib.py',
			'traceback.py',
			'tokenize.py',
			'inspect.py',
			'threading.py',
			'plistlib.py']
	},
	'keyword': {
		'owner': 'C:\\Python35\\lib\\keyword.py',
		'user': ['__init__.py']
	},
	'libi': {
		'owner': './test/implicit\\libi.py',
		'user': ['entry.py']
	},
	'linecache': {
		'owner': 'C:\\Python35\\lib\\linecache.py',
		'user': ['warnings.py',
			'traceback.py',
			'doctest.py',
			'pdb.py',
			'bdb.py',
			'inspect.py']
	},
	'locale': {
		'owner': 'C:\\Python35\\lib\\locale.py',
		'user': ['gettext.py',
			'_bootlocale.py',
			'_strptime.py',
			'calendar.py']
	},
	'logging': {
		'owner': 'C:\\Python35\\lib\\logging\\__init__.py',
		'user': ['hashlib.py']
	},
	'lzma': {
		'owner': 'C:\\Python35\\lib\\lzma.py',
		'user': ['shutil.py', 'tarfile.py']
	},
	'marshal': {
		'owner': 'built-in',
		'user': ['pkgutil.py']
	},
	'math': {
		'owner': 'built-in',
		'user': ['random.py', 'selectors.py', 'datetime.py']
	},
	'momus': {
		'owner': 'namespace',
		'user': ['libi.py']
	},
	'momus.c': {
		'owner': 'namespace',
		'user': ['libi.py']
	},
	'momus.d': {
		'owner': 'namespace',
		'user': ['libi.py']
	},
	'msvcrt': {
		'owner': 'built-in',
		'user': ['subprocess.py']
	},
	'nt': {
		'owner': 'built-in',
		'user': ['os.py', 'shutil.py', 'ntpath.py']
	},
	'ntpath': {
		'owner': 'C:\\Python35\\lib\\ntpath.py',
		'user': ['os.py']
	},
	'opcode': {
		'owner': 'C:\\Python35\\lib\\opcode.py',
		'user': ['dis.py']
	},
	'operator': {
		'owner': 'C:\\Python35\\lib\\operator.py',
		'user': ['__init__.py', 'inspect.py']
	},
	'optparse': {
		'owner': 'C:\\Python35\\lib\\optparse.py',
		'user': ['calendar.py', 'optparse.py']
	},
	'os': {
		'owner': 'C:\\Python35\\lib\\os.py',
		'user': ['entry.py',
			'cfg.py',
			'os.py',
			'linecache.py',
			'doctest.py',
			'pdb.py',
			'argparse.py',
			'gettext.py',
			'locale.py',
			'bdb.py',
			'fnmatch.py',
			'posixpath.py',
			'genericpath.py',
			'inspect.py',
			'imp.py',
			'pydoc.py',
			'tempfile.py',
			'shutil.py',
			'tarfile.py',
			'gzip.py',
			'zipfile.py',
			'py_compile.py',
			'random.py',
			'__init__.py',
			'platform.py',
			'__init__.py',
			'subprocess.py',
			'socket.py',
			'plistlib.py',
			'optparse.py',
			'webbrowser.py',
			'glob.py',
			'getopt.py',
			'shlex.py',
			'pkgutil.py',
			'ntpath.py']
	},
	'os.path': {
		'owner': 'C:\\Python35\\lib\\os.py',
		'user': ['os.py', '__init__.py', 'py_compile.py', 'pkgutil.py']
	},
	'pdb': {
		'owner': 'C:\\Python35\\lib\\pdb.py',
		'user': ['doctest.py', 'pdb.py']
	},
	'pkgutil': {
		'owner': 'C:\\Python35\\lib\\pkgutil.py',
		'user': ['pydoc.py', 'pkgutil.py']
	},
	'platform': {
		'owner': 'C:\\Python35\\lib\\platform.py',
		'user': ['pydoc.py']
	},
	'plistlib': {
		'owner': 'C:\\Python35\\lib\\plistlib.py',
		'user': ['platform.py']
	},
	'posixpath': {
		'owner': 'C:\\Python35\\lib\\posixpath.py',
		'user': ['os.py', 'fnmatch.py']
	},
	'pprint': {
		'owner': 'C:\\Python35\\lib\\pprint.py',
		'user': ['cfg.py', 'pdb.py']
	},
	'py_compile': {
		'owner': 'C:\\Python35\\lib\\py_compile.py',
		'user': ['zipfile.py']
	},
	'pydoc': {
		'owner': 'C:\\Python35\\lib\\pydoc.py',
		'user': ['pdb.py']
	},
	'pydoc_data.topics': {
		'owner': 'C:\\Python35\\lib\\pydoc_data\\__init__.py',
		'user': ['pydoc.py']
	},
	'random': {
		'owner': 'C:\\Python35\\lib\\random.py',
		'user': ['tempfile.py']
	},
	're': {
		'owner': 'C:\\Python35\\lib\\re.py',
		'user': ['warnings.py',
			'doctest.py',
			'pdb.py',
			'argparse.py',
			'textwrap.py',
			'gettext.py',
			'tokenize.py',
			'token.py',
			'locale.py',
			'pprint.py',
			'fnmatch.py',
			'posixpath.py',
			'inspect.py',
			'string.py',
			'pydoc.py',
			'tarfile.py',
			'zipfile.py',
			'platform.py',
			'plistlib.py',
			'_strptime.py',
			'glob.py',
			'shlex.py',
			'difflib.py',
			'keyword.py']
	},
	'reprlib': {
		'owner': 'C:\\Python35\\lib\\reprlib.py',
		'user': ['__init__.py', 'bdb.py', 'pydoc.py']
	},
	'select': {
		'owner': 'C:\\Python35\\DLLs\\select.pyd',
		'user': ['pydoc.py', 'subprocess.py', 'selectors.py']
	},
	'selectors': {
		'owner': 'C:\\Python35\\lib\\selectors.py',
		'user': ['subprocess.py', 'socket.py']
	},
	'shlex': {
		'owner': 'C:\\Python35\\lib\\shlex.py',
		'user': ['pdb.py', 'webbrowser.py']
	},
	'shutil': {
		'owner': 'C:\\Python35\\lib\\shutil.py',
		'user': ['tempfile.py',
			'tarfile.py',
			'zipfile.py',
			'webbrowser.py']
	},
	'signal': {
		'owner': 'C:\\Python35\\lib\\signal.py',
		'user': ['pdb.py', 'subprocess.py']
	},
	'socket': {
		'owner': 'C:\\Python35\\lib\\socket.py',
		'user': ['platform.py', 'webbrowser.py']
	},
	'sre_compile': {
		'owner': 'C:\\Python35\\lib\\sre_compile.py',
		'user': ['re.py']
	},
	'sre_constants': {
		'owner': 'C:\\Python35\\lib\\sre_constants.py',
		'user': ['re.py', 'sre_compile.py', 'sre_parse.py']
	},
	'sre_parse': {
		'owner': 'C:\\Python35\\lib\\sre_parse.py',
		'user': ['re.py', 'sre_compile.py']
	},
	'stat': {
		'owner': 'C:\\Python35\\lib\\stat.py',
		'user': ['os.py',
			'posixpath.py',
			'genericpath.py',
			'shutil.py',
			'tarfile.py',
			'zipfile.py',
			'ntpath.py']
	},
	'string': {
		'owner': 'C:\\Python35\\lib\\string.py',
		'user': ['cmd.py', '__init__.py', 'ntpath.py']
	},
	'struct': {
		'owner': 'C:\\Python35\\lib\\struct.py',
		'user': ['gettext.py',
			'tarfile.py',
			'gzip.py',
			'zipfile.py',
			'platform.py',
			'__init__.py',
			'plistlib.py']
	},
	'subprocess': {
		'owner': 'C:\\Python35\\lib\\subprocess.py',
		'user': ['os.py', 'pydoc.py', 'platform.py', 'webbrowser.py']
	},
	'sys': {
		'owner': undefined,
		'user': ['entry.py',
			'os.py',
			'_collections_abc.py',
			'warnings.py',
			'linecache.py',
			'weakref.py',
			'types.py',
			'__init__.py',
			'traceback.py',
			'doctest.py',
			'pdb.py',
			're.py',
			'code.py',
			'argparse.py',
			'gettext.py',
			'tokenize.py',
			'token.py',
			'codecs.py',
			'locale.py',
			'_bootlocale.py',
			'enum.py',
			'pprint.py',
			'bdb.py',
			'posixpath.py',
			'inspect.py',
			'imp.py',
			'__init__.py',
			'dis.py',
			'cmd.py',
			'pydoc.py',
			'shutil.py',
			'tarfile.py',
			'gzip.py',
			'threading.py',
			'contextlib.py',
			'dummy_threading.py',
			'zipfile.py',
			'py_compile.py',
			'__init__.py',
			'platform.py',
			'__init__.py',
			'subprocess.py',
			'selectors.py',
			'socket.py',
			'calendar.py',
			'optparse.py',
			'webbrowser.py',
			'getopt.py',
			'shlex.py',
			'pkgutil.py',
			'keyword.py',
			'ntpath.py']
	},
	'tarfile': {
		'owner': 'C:\\Python35\\lib\\tarfile.py',
		'user': ['shutil.py']
	},
	'tempfile': {
		'owner': 'C:\\Python35\\lib\\tempfile.py',
		'user': ['pydoc.py', 'webbrowser.py']
	},
	'textwrap': {
		'owner': 'C:\\Python35\\lib\\textwrap.py',
		'user': ['argparse.py', 'pydoc.py', 'zipfile.py', 'optparse.py']
	},
	'threading': {
		'owner': 'C:\\Python35\\lib\\threading.py',
		'user': ['pydoc.py',
			'bz2.py',
			'_threading_local.py',
			'dummy_threading.py',
			'zipfile.py',
			'__init__.py',
			'subprocess.py']
	},
	'time': {
		'owner': 'built-in',
		'user': ['_dummy_thread.py',
			'pprint.py',
			'pydoc.py',
			'tarfile.py',
			'gzip.py',
			'threading.py',
			'zipfile.py',
			'random.py',
			'__init__.py',
			'subprocess.py',
			'datetime.py',
			'_strptime.py']
	},
	'token': {
		'owner': 'C:\\Python35\\lib\\token.py',
		'user': ['gettext.py', 'tokenize.py', 'inspect.py']
	},
	'tokenize': {
		'owner': 'C:\\Python35\\lib\\tokenize.py',
		'user': ['linecache.py',
			'gettext.py',
			'inspect.py',
			'imp.py',
			'pydoc.py']
	},
	'traceback': {
		'owner': 'C:\\Python35\\lib\\traceback.py',
		'user': ['_dummy_thread.py',
			'doctest.py',
			'pdb.py',
			'code.py',
			'pydoc.py',
			'threading.py',
			'py_compile.py',
			'__init__.py']
	},
	'types': {
		'owner': 'C:\\Python35\\lib\\types.py',
		'user': ['functools.py',
			'copy.py',
			'enum.py',
			'pprint.py',
			'inspect.py',
			'imp.py',
			'__init__.py',
			'dis.py',
			'random.py',
			'pkgutil.py']
	},
	'unittest': {
		'owner': 'C:\\Python35\\lib\\unittest\\__init__.py',
		'user': ['doctest.py', '__init__.py']
	},
	'urllib.parse': {
		'owner': 'C:\\Python35\\lib\\urllib\\__init__.py',
		'user': ['pydoc.py']
	},
	'warnings': {
		'owner': 'C:\\Python35\\lib\\warnings.py',
		'user': ['os.py',
			'__init__.py',
			'sre_parse.py',
			'inspect.py',
			'imp.py',
			'__init__.py',
			'string.py',
			'pydoc.py',
			'tempfile.py',
			'tarfile.py',
			'gzip.py',
			'bz2.py',
			'zipfile.py',
			'random.py',
			'__init__.py',
			'platform.py',
			'subprocess.py',
			'plistlib.py',
			'pkgutil.py',
			'ntpath.py']
	},
	'weakref': {
		'owner': 'C:\\Python35\\lib\\weakref.py',
		'user': ['functools.py',
			'copy.py',
			'tempfile.py',
			'_threading_local.py',
			'__init__.py']
	},
	'webbrowser': {
		'owner': 'C:\\Python35\\lib\\webbrowser.py',
		'user': ['pydoc.py']
	},
	'winreg': {
		'owner': 'built-in',
		'user': ['platform.py']
	},
	'xml.parsers.expat': {
		'owner': 'C:\\Python35\\lib\\xml\\__init__.py',
		'user': ['plistlib.py']
	},
	'zipfile': {
		'owner': 'C:\\Python35\\lib\\zipfile.py',
		'user': ['shutil.py']
	},
	'zipimport': {
		'owner': 'built-in',
		'user': ['pkgutil.py']
	},
	'zlib': {
		'owner': 'built-in',
		'user': ['tarfile.py', 'gzip.py']
	}
};

files =
	['C:\\eclipse\\workspace\\pmdd\\test\\entry.py',
	'C:\\eclipse\\workspace\\pmdd\\cfg.py',
	'C:\\Python35\\lib\\os.py',
	'C:\\Python35\\lib\\io.py',
	'C:\\Python35\\lib\\abc.py',
	'C:\\Python35\\lib\\_weakrefset.py',
	'C:\\Python35\\lib\\_collections_abc.py',
	'C:\\Python35\\lib\\warnings.py',
	'C:\\Python35\\lib\\linecache.py',
	'C:\\Python35\\lib\\functools.py',
	'C:\\Python35\\lib\\weakref.py',
	'C:\\Python35\\lib\\copy.py',
	'C:\\Python35\\lib\\copyreg.py',
	'C:\\Python35\\lib\\types.py',
	'C:\\Python35\\lib\\collections\\__init__.py',
	'C:\\Python35\\lib\\reprlib.py',
	'C:\\Python35\\lib\\_dummy_thread.py',
	'C:\\Python35\\lib\\traceback.py',
	'C:\\Python35\\lib\\heapq.py',
	'C:\\Python35\\lib\\doctest.py',
	'C:\\Python35\\lib\\unittest\\__init__.py',
	'C:\\Python35\\lib\\pdb.py',
	'C:\\Python35\\lib\\re.py',
	'C:\\Python35\\lib\\sre_compile.py',
	'C:\\Python35\\lib\\sre_constants.py',
	'C:\\Python35\\lib\\sre_parse.py',
	'C:\\Python35\\lib\\code.py',
	'C:\\Python35\\lib\\codeop.py',
	'C:\\Python35\\lib\\__future__.py',
	'C:\\Python35\\lib\\argparse.py',
	'C:\\Python35\\lib\\textwrap.py',
	'C:\\Python35\\lib\\gettext.py',
	'C:\\Python35\\lib\\tokenize.py',
	'C:\\Python35\\lib\\token.py',
	'C:\\Python35\\lib\\codecs.py',
	'C:\\Python35\\lib\\encodings\\__init__.py',
	'C:\\Python35\\lib\\struct.py',
	'C:\\Python35\\lib\\locale.py',
	'C:\\Python35\\lib\\_bootlocale.py',
	'C:\\Python35\\lib\\signal.py',
	'C:\\Python35\\lib\\enum.py',
	'C:\\Python35\\lib\\pprint.py',
	'C:\\Python35\\lib\\bdb.py',
	'C:\\Python35\\lib\\fnmatch.py',
	'C:\\Python35\\lib\\posixpath.py',
	'C:\\Python35\\lib\\genericpath.py',
	'C:\\Python35\\lib\\stat.py',
	'C:\\Python35\\lib\\inspect.py',
	'C:\\Python35\\lib\\imp.py',
	'C:\\Python35\\lib\\importlib\\__init__.py',
	'C:\\Python35\\lib\\operator.py',
	'C:\\Python35\\lib\\dis.py',
	'C:\\Python35\\lib\\opcode.py',
	'C:\\Python35\\lib\\cmd.py',
	'C:\\Python35\\lib\\string.py',
	'C:\\Python35\\lib\\pydoc.py',
	'C:\\Python35\\lib\\pydoc_data\\__init__.py',
	'C:\\Python35\\lib\\http\\__init__.py',
	'C:\\Python35\\lib\\tempfile.py',
	'C:\\Python35\\lib\\shutil.py',
	'C:\\Python35\\lib\\tarfile.py',
	'C:\\Python35\\lib\\lzma.py',
	'C:\\Python35\\lib\\_compression.py',
	'C:\\Python35\\lib\\gzip.py',
	'C:\\Python35\\lib\\bz2.py',
	'C:\\Python35\\lib\\threading.py',
	'C:\\Python35\\lib\\_threading_local.py',
	'C:\\Python35\\lib\\contextlib.py',
	'C:\\Python35\\lib\\dummy_threading.py',
	'C:\\Python35\\lib\\zipfile.py',
	'C:\\Python35\\lib\\py_compile.py',
	'C:\\Python35\\lib\\random.py',
	'C:\\Python35\\lib\\hashlib.py',
	'C:\\Python35\\lib\\logging\\__init__.py',
	'C:\\Python35\\lib\\platform.py',
	'C:\\Python35\\lib\\ctypes\\__init__.py',
	'C:\\Python35\\lib\\subprocess.py',
	'C:\\Python35\\lib\\selectors.py',
	'C:\\Python35\\lib\\socket.py',
	'C:\\Python35\\lib\\plistlib.py',
	'C:\\Python35\\lib\\xml\\__init__.py',
	'C:\\Python35\\lib\\datetime.py',
	'C:\\Python35\\lib\\_strptime.py',
	'C:\\Python35\\lib\\calendar.py',
	'C:\\Python35\\lib\\optparse.py',
	'C:\\Python35\\lib\\webbrowser.py',
	'C:\\Python35\\lib\\glob.py',
	'C:\\Python35\\lib\\getopt.py',
	'C:\\Python35\\lib\\shlex.py',
	'C:\\Python35\\lib\\urllib\\__init__.py',
	'C:\\Python35\\lib\\email\\__init__.py',
	'C:\\Python35\\lib\\pkgutil.py',
	'C:\\Python35\\lib\\difflib.py',
	'C:\\Python35\\lib\\keyword.py',
	'C:\\Python35\\lib\\ntpath.py',
	'C:\\eclipse\\workspace\\pmdd\\test\\implicit\\libi.py',
	'C:\\eclipse\\workspace\\pmdd\\test\\explicit\\__init__.py'];
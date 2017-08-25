from os import environ
from pprint import pprint


TestPrint = environ.get("TEST-PRINT")
MainPrint = environ.get("MAIN-PRINT")


def dprint(*args):
    print(*args)


tprint = lambda *args: None
tpprint = lambda x: None
mprint = lambda *args: None
mpprint = lambda x: None

if TestPrint:
    tprint = dprint
    tpprint = pprint


if MainPrint:
    mprint = dprint
    mpprint = pprint

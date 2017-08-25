from os import environ


TestPrint = environ.get("TEST-PRINT")
MainPrint = environ.get("MAIN-PRNIT")


def dprint(*args):
    print(*args)


tprint = lambda *args: None
mprint = lambda *args: None

if TestPrint:
    tprint = dprint


if MainPrint:
    mprint = dprint

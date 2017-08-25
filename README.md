# pmdd #
python modules dependencies diagram.

# law #

please comply with things belong with this chapter, or mess will be met.

## import ##
- must be clear about top level package.
- must grasp absolute name of each module in runtime.

# todo #
## why python `__init__` magic skips ordinary script? ##

aka--

there is a pseudo.py with coding below:

```
def __init__(this, *args, **kwargs):
  print("initialize script", __file__)
```

and then invoke the script module like:

```
from pseudo import *
```

so will pseudo.__init__ run and show its message?

factually it does not.

but __init__.py under a folder module will run automatically when import the folder module.

thus, i think the consistency of magic attributes are different between folder, script and class.

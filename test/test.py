import os
import os.path
# import os.path.isabs  # 不能将模块以下的非子模块实体直接通过import导入
from os import path  # 可以从亲模块中通过from parent-module import kid-module导入子模块
from os.path import isabs  # 可以将亲模块以下的非子模块实体直接通过from parent-module import class-or-function-or-variable从模块中导入
# from entry.TestForFromClassImportItsSundryAttributes import *  # 不可以从类中导入类的属性（即使是静态的）
# import entry.TestForFromClassImportItsSundryAttributes  # 不可以直接导入类


# TODO: 基于上述规则，可得出如下结论
# import 祈使句谓词后边宾体必然是模块
# from 状语后边宾体必然是模块（而且每句只有一个）
# from module import 补语后边宾体或模块或类或实例（通过as重命名的模块实体并不改变其__spec__.origin）

# TODO: 且
# 模块对象中有__spec__魔法（其origin属性就是脚本或目录的绝对路径）
# 非入口模块都有__package__魔法表示亲模块名

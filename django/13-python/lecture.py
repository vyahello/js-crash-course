from sre_constants import IN
from turtle import pen
from typing import Type


try:
    print('try')
except TypeError:
    ...
else:
    # if no exception - we go here
    print('else')


try:
    print('try')
except TypeError:
    ...
else:
    # if no exception - we go here
    print('else')
finally:
    # always execute block of code
    print('finally')

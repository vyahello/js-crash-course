from django import template


register = template.Library()


@register.filter(name='cut')
def cut(value, arg):
    """
    Cuts out all values of arg from string.

    E.g user passes and html filter tag cuts given value:
        {{ text|cut:"man" }}
    """
    return value.replace(arg, '')


# register.filter('cut', cut)

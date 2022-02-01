from django.http import HttpResponse
from django.shortcuts import render


def index(request) -> HttpResponse:
    return HttpResponse('<em>Second App</em>')


def help(request) -> HttpResponse:
    dict_ = {'insert_me': 'Help Page'}
    return render(request, 'second_app/help.html', context=dict_)

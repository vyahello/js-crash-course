from django.http import HttpResponse
from django.shortcuts import render

from second_app.models import User


def index(request) -> HttpResponse:
    return render(request, 'second_app/index.html')


def users(request):
    user_list = User.objects.order_by('first_name')
    user_dict = {'users': user_list}
    return render(request, 'second_app/users.html', context=user_dict)

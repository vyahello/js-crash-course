from django.http import HttpResponse
from django.shortcuts import render

from second_app.forms import NewUser


def index(request) -> HttpResponse:
    return render(request, 'second_app/index.html')


def users(request):
    form = NewUser()
    if request.method == 'POST':
        form = NewUser(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print('Error form invalid')
    return render(request, 'second_app/users.html', context={'form': form})

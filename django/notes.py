# FUll stack (fron-end + back-end technologies)
# Front-end - what you see as a user on the website
# Back-end - technology used to decide what to show on the Front-End
# what pictures to retrieve from DB.

# Front End:
# - HTML - structure of the page (check via "view page")
# - CSS - styling of the website (colors, fonts)
# - JS - add interactivity to the website

# Back End:
# - Language (php, node.js, ruby/rails, java, python)
# - Framework (django)
# - Database (sqlite)

# Bootstrap - framework used for front end development
# saves a lot of time dealing with css manually. Ready css styles you can just import into html, predefined web elements in css, lots of default classes and forms
# boostrap 4 is currentply in development
# Docs 
# - https://getbootstrap.com/
# - https://getbootstrap.com/docs/3.3/getting-started/
# - https://getbootstrap.com/docs/5.1/examples/
# - https://getbootstrap.com/docs/5.1/components/accordion/
# - https://getbootstrap.com/docs/3.3/getting-started/
# - https://getbootstrap.com/docs/3.4/css/
# - https://getbootstrap.com/docs/3.4/css/#buttons
# - https://getbootstrap.com/docs/4.0/components/jumbotron/
# - https://getbootstrap.com/2.2.0/components.html#thumbnails

# Navbar - navogation bars

# Grid  
# col-md-6 - size of column is medium up tp 6 cells on the screen
# Docs - https://getbootstrap.com/docs/3.4/examples/grid/

####### JS #######
# JS is built directly into web browsers, language for web interations
# JS objects are hash tables - store info in key-value pair - it is a dictionary
# {key: 'value one', key: "value two"}

###### DOM #######
# DOM - allows us to interface our JS code to interact with HTML and CSS, browsers construct DOM

# jQuery
# jQuery - js library - large single .js file that has many pre-built methods and objects that simplify your workflow
# Interacting with DOM and making HTTP requests (AJAX)
# how to use - link CDN file, download .js file
# large file - https://code.jquery.com/jquery-3.1.1.js
#
## jQuery
# var divs = $('div');
# $(el).css('border-width', '20px');
#
## Vanilla
# var divs = document.querySelectorAll('div');
# el.style.borderWidth = '20px';

########### Backend Django ###########
# Django - free open source web framework.
# Django - user requests URL -> goes to urls.py file which calls 'views.py' file
# then goes call 'models.py' which store information about your database
# that will query database for information -
# feed it back to views.py (creates view of your site that it actually
# looks like), then we use 'templates' to fill out views (html, css, js)
# and then we send back to user.
# Anaconda used to create venv
#
# Install via pip:
# - django-admin tool is available
# - django-admin startproject first_project
# files:
# - settings.py - project settings
# - urls.py - store all URL patterns (re) for your project,
# different pages of your web app
# - manage.py - command executor
# - wsgi.py - web server gateway interface, help to deploy app on server
#
# Run server:
# python manage.py runserver
#
# DB migration - allows to move databases from one design to another.
# add field, new column etc.
#
# Create django app
# cd first_project && python manage.py startapp first_app
# - admin.py - register your models
# - apps.py - place for an app configuration
# - models.py - app data models
# - tests.py - store test functions
# - views.py - handle requests and return responses
# - migrations - stores db info as it relates to models
#
# Add 'first_app' to INSTALLED_APPS list
# Next create a 'view' (index) - like routes in flask
# Map this view to urls.py file to 'urlpatterns' var
# Run python manage.py runserver
#
# URLS
# include django func will link urls
# create urls.py file in first_app package, create urlpatterns variable
# urls.py
# url(r'help/', views.help, name='help'),
# when user goes to /help it will call views.help route
#
# Templates
# pattern - first_project/templates/first_app
# add TEMPLATES var and edit DIR var in settings.py
# create index.html in templates/first_app dir
#
# add STATIC_DIR variable in settings.py
# create STATICFILES_DIRS list in settings.py
#
# Syntax templates
# {{ insert_me }} in html - we use render({'insert_me': 'Hello'}) in views.py
# render(request, 'index.html', context=dict_)
#
# Read data from views to html
#
# for acc in access_records %}
# <tr>
# <td> {{acc.name}} </td>
# <td> {{acc.date}} </td>
# </tr>
# {% endfor %}
# </ table>
#
# Static files for images,css,js files
# {% load staticfiles %}
# <img src={%static "images/pic.jpg" %}>
#
# load file
# <link rel="stylesheet" href="{% static "css/style.css" %}">
# <img src="{% static "images/pic1.jpg" %}">
#
# Django is knows as MTV - models, templates and views frame
#
# Django - models - accept info from a user input into a database
# We use models to add database into django project.
# Django comes with SQLite (but we can use different engine backends)
# Edit ENGINE var in settings.py,
# create models class in models.py, class inherits Model class
# Model School (table in db) and model Student (table in db)
# Student refers to School (foreign key)
#
# SQL
# primary key - unique id for each row in a table
# foreign key - note that column along with a primary key of another table
#
# Migrate db
# python manage.py migrate
# python manage.py makemigrations app1
# python manage.py migrate (one more time)
#
# Check migrations
# python manage.py shell
# >>> from first_app.models import Topic
# >>> print(Topic.objects.all)
# <bound method BaseManager.all of <django.db.models.manager.Manager object>
# >>> print(Topic.objects.all())
# <QuerySet []>
# >>> t = Topic(top_name='Social')
# >>> t
# <Topic: Social>
# >>> t.save()
# >>> print(Topic.objects.all())
# <QuerySet [<Topic: Social>]>

# Register models
# admin.site.register(Model1)
#
# Create superuser
# python manage.py createsuperuser
#
# Go to http://127.0.0.1:8000/admin to check admin page
#
# Django is known as Models-Templates-Views (MTV) paradigm
# 1. import models to views.py file,
# 2. use view to query the model for data we will need
# 3. pass results from the model to the template
#
#### Basic project workflow creation ####
# django-admin startproject first_project
# cd first_project && django-admin startapp first_app
# create templates, static folder - edit settings.py file with constants
# create db model in models.py (tables, column foreign keys)
# create view - use data from models
# edit urls.py
# register models in admin.py
# create migrations
# make html files that reads view data (using jinja) in templates folder
#
# Django FORMS (login forms, register forms)
# grab info from the user and do something with it on the backend.
# create forms.py file in basicapp folder
# inside view import form - from forms import Form. Similar to models
# create view for the form
# add view to the apps urls
# update settings.py, create templates/app/form.html
# include forms in html via {{form}} syntax
# < form method = "post" >
# {{form.as_p}}
# {% csrf_token%}
# < input type = "submit" class ="btn btn-primary" value="Submit" >
# </form>
# {% csrf_token %} - cross site request forgery token -
# secures http post action. Form passed from the user to html via POST req
#
### TEMPLATES tagging, inheriting
# Relative URLs
# <a href="{% url 'basic_app:other' %}"></a> looks for other name in urls.py
# then go to basic_app/other/ endpoint
#
# Inheritance
# {% extends "basic_app/base.html" %}
# {% block body_block %}
# <html></html>
# {% endblock %}
#
# Template filter
# <h2>{{text|upper}}</h2> -> render(r, 'basic_app/index.html', {'text': 'la'})
# call upper method on passed text
# create basic_app/templates_tags/extras.py to ass custom filter tags e.g
# <h2>{{text|cut:"man"}}</h2> - calls cut func on passed text
#
# Django passwords, login, registration
# add django.contrib.auth and django.contrib.contenttypes to INSTALLED_APPS
# never store passwords as plain text, use SHA256 hash, use bcrypt
# pass in settings.py PASSWORD_HASHERS
# create PASSWORD_HASHERS in settings.py
#
# Similar to jinja but different to django template engine.
#### User models  ####
# [Register] fill in forms and models in basic_app folder
#
# Login
# LOGIN_URL = '/basic_app/user_login' in settings.py
# @login_required decorator to 'user_logout' func
# create login form in login.html
#
### Deployment ###
# go to pythonanywhere
# bash -> mkvirtualenv --python=python3.7 dj
# clone repo
# python app/manage.py migrate
# python app/manage.py makemigrations app
# python app/manage.py createsuperuser
# dashboard - web - add new app
# go to manual configuration
# go to "Enter path to a virtualenv, if desired"
# virtualenv - /home/djangoBasics/.virtualenvs/dj
# source code - /home/djangoBasics/django-template/app
# open wsgi.py and edit
#
# add pythonanywhere host to allowed hosts
#
# import os
# import sys
# if path not in sys.path:
#   sys.path.append(path)
# os.chdir(path)
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
# import django
# django.setup()
# from django.core.wsgi import get_wsgi_application
# application = get_wsgi_application()
#
# fix static files
# add /static/admin url and '/home/djangoBasics/.virtualenvs/dj/lib/python3.7/site-packages/django/contrib/admin/static/admin' dir
# add /static and '/home/djangoBasics/django-template/app/static' url
# disable debug mode in settings.py
#
# CBV (class based views) define view using classes.
# create view with django.views.generic.View class
# and use 'views.CBView.as_view()' in urls.py
#
# Template CBV -> class IndexView(TemplateView) in views.py
# Detail/List View
# List View
#
# class SchoolListView(ListView) in views.py
# class SchoolDetailView(ListView) in views.py
# add urls in urls.py e.g views.SchoolListView.as_view()
#
# CRUD
# SchoolCreateView, SchoolUpdateView, SchoolDeleteView in view.py
#
# Debug
# Debug toolbar
# pip install django-debug-toolbar
# add debug_toolbar in INSTALLED_APPS
# in urls.py -> add if settings.DEBUG: ...
# add 'debug_toolbar.middleware.DebugToolbarMiddleware' in MIDDLEWARE in sett
# add INTERNAL_IPS = ['127.0.0.1'] in settings.py

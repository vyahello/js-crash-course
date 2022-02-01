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

###### Backend Django ######
# Django - free open source web framework.
# Django - user requests URL -> goes to url.py file which calls 'views.py' file
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
# - url.py - store all URL patterns (re) for your project,
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
# python manage.py startapp first_app
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
#


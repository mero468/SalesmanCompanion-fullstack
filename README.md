# SalesmanCompanion-fullstack
Fullstack application using React and Django rest Api with libraries such as Djoser, Bootstrap, Redux and axios

# Introduction

The goal of this project is to provide minimalistic django project template that everyone can use, which _just works_ out of the box and has the basic setup you can expand on. 

# Activation of the backend
To make the api run in the background open a new terminal and write the following:
#
     cd backend
     venv\scripts\activate
     cd SalesmanManager

 
 
Make sure that you have access to a PostgreSQl database you can change that in the settings.py 
 ![image](https://user-images.githubusercontent.com/57250365/197004561-635f5daa-8ce8-4837-b06d-69948eb6dc8b.png)
# After that you do the following:
    python manage.py makemigrations
    python manage.py migrate
 

# After DOING ALL OF THAT Enter the following in the terminal
    python manage.py runserver

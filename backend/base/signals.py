from django.contrib.auth.models import User
from django.db.models.signals import pre_save


def updateUser (sender, instance ,**kwargs): #kwargs is parameter
     user = instance
     if user.email != '':
          user.username = user.email

pre_save.connect( updateUser, sender=User)
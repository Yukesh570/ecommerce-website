from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *


class UserSerializer(serializers.ModelSerializer):
    name= serializers.SerializerMethodField(read_only=True)
    _id= serializers.SerializerMethodField(read_only=True)
    isAdmin= serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=User
        fields=['_id', 'username','email','name','isAdmin']

    def get_name(self,obj): #obj is the user object #(get_name)get_ is rule only name is the function
        name= obj.first_name
        if name=='' :
            name=obj.email

        return name  

    def get__id(self,obj):
        _id=obj.id
        return _id
    
    def get_isAdmin(self,obj):
        return obj.is_staff

class UserSerializerWithToken(UserSerializer):
    token= serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=User
        fields=['_id', 'username','email','name','isAdmin','token']

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Product
        fields='__all__'
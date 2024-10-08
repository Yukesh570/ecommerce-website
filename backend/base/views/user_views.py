
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
from ..serializers import *
from ..models import *
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
     def validate(self, attrs):    
            data = super().validate(attrs)
            serializer = UserSerializerWithToken(self.user).data

            for k,v in serializer.items(): #k and v are the key value pait
                data[k] = v
            return data
        

class MyTokenObtainPairView(TokenObtainPairView):
            serializer_class=MyTokenObtainPairSerializer   
            
            

    
    
@api_view(['POST'])
def registerUser(request):
    data=request.data #POST bata data request garxa
    print('data',data)

    try:
        user= User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password= make_password(data['password']),
        )
        serializer= UserSerializerWithToken(user,many=False)
        return Response(serializer.data)
    except:
        message ={'detail':'User with this email already exists'} #username is unique because username is returned in admin (header)#def(self)  return (self,username)#
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])  
def getUserProfile(request):
        user = request.user  #user is taken from the token using api_view
       
        serializers=UserSerializer(user, many=False)
        return Response(serializers.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
        user = request.user  #user is taken from the token using api_view
        print('data',user)
        serializers=UserSerializerWithToken(user, many=False)
        data= request.data
        user.first_name = data['name']
        user.username = data['email']
        user.email = data['email']

        if data['password'] != '':
              user.password = make_password(data['password'])

        user.save()
        return Response(serializers.data)
   



@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserData(request):
    users=User.objects.all()
    serializers=UserSerializer(users, many=True)
    return Response(serializers.data)
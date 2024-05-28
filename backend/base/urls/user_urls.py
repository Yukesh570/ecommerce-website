from django.urls import path
from base.views import user_views as views



urlpatterns =[ 

    path('profile/',views.getUserProfile,name='users-profile'),
    path('profile/update/',views.updateUserProfile,name='users-profile-update'),

    path('',views.getUserData,name='users-details'),
    path('register/',views.registerUser,name='registerUsers'),

    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

]

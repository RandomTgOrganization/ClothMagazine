from django.urls import path
from rest_framework_simplejwt.views import TokenVerifyView
from .views import (MyTokenObtainPairView,
                    CustomTokenRefreshView)






urlpatterns = [

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
]
from django.contrib import admin
from django.urls import path, re_path
from app.views import OfferListCreate, OperatorListCreate, CityListCreate, PeriodListCreate, TypeListCreate, ContactListCreate, OfferDetailListCreate, ParametersListCreate
from frontend.views import main
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/offer/', OfferListCreate.as_view() ),
    path('api/operator/', OperatorListCreate.as_view() ),
    path('api/city/', CityListCreate.as_view() ),
    path('api/period/', PeriodListCreate.as_view() ),
    path('api/type/', TypeListCreate.as_view() ),
    path('api/parameters/', ParametersListCreate.as_view() ),
    path('api/contact/<int:pk>/', ContactListCreate.as_view() ),
    path('api/offerdetail/<int:pk>/', OfferDetailListCreate.as_view() ),
    path('', main),
    path('about', main),
    path('contact', main),
    path('termsofuse', main),
    path('policyprivacy', main),
]

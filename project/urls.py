from django.contrib import admin
from django.urls import path, re_path
from app.views import OfferListCreate, OperatorListCreate, CityListCreate, PeriodListCreate, TypeListCreate, Contact, OfferDetail, ParametersListCreate, SimpleOffer

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/offers/', OfferListCreate.as_view() ),
    path('api/operator/', OperatorListCreate.as_view() ),
    path('api/city/', CityListCreate.as_view() ),
    path('api/period/', PeriodListCreate.as_view() ),
    path('api/type/', TypeListCreate.as_view() ),
    path('api/parameters/', ParametersListCreate.as_view() ),
    path('api/contact/<int:pk>/', Contact.as_view() ),
    path('api/offerdetail/<int:pk>/', OfferDetail.as_view() ),
    path('api/offer/<int:pk>/', SimpleOffer.as_view() ),
    # for production only
    # path('', main),
    # path('about', main),
    # path('contact', main),
    # path('termsofuse', main),
    # path('policyprivacy', main),
    # path('offers/compare', main),
    # path('offers/selectedoffer', main),
]

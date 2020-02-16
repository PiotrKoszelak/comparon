from django.contrib import admin
from django.urls import path, re_path
from app.views import OfferListCreate, OperatorListCreate, CityListCreate, PeriodListCreate, TypeListCreate, Contact, OfferDetail, ParametersListCreate, SimpleOffer, SendMessage, Login

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/offers/<int:id>/', OfferListCreate.as_view() ),
    path('api/operator/', OperatorListCreate.as_view() ),
    path('api/city/', CityListCreate.as_view() ),
    path('api/period/', PeriodListCreate.as_view() ),
    path('api/type/', TypeListCreate.as_view() ),
    path('api/parameters/', ParametersListCreate.as_view() ),
    path('api/contact/<int:pk>/', Contact.as_view() ),
    path('api/offerdetail/<int:pk>/', OfferDetail.as_view() ),
    path('api/offer/<int:pk>/', SimpleOffer.as_view() ),
    path('api/offer/sendmessage', SendMessage.as_view() ),
    path('api/login', Login.as_view() ),
    # for production only
    # path('', main),
    # path('about', main),
    # path('contact', main),
    # path('termsofuse', main),
    # path('policyprivacy', main),
    # path('offers/compare', main),
    # path('offers/selectedoffer', main),
]

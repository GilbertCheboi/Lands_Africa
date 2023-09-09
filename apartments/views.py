import random
from django.conf import settings
from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render, redirect
#from django.utils.http import url_has_allowed_host_and_scheme


ALLOWED_HOSTS = settings.ALLOWED_HOSTS

# Create your views here.
def apartments_view(request, *args, **kwargs):
    return render(request, "pages/apartments.html")

def apartment_detail_view(request, item_id, *args, **kwargs):
    return render(request, "tweets/apartment_detail.html", context={"item_id": item_id})

def about(request, *args, **kwargs):
    return render(request, "tweets/about.html")

def privacy(request, *args, **kwargs):
    return render(request, "tweets/privacy.html")

def contact(request,  *args, **kwargs):
    return render(request, "tweets/contact.html")


#from django.shortcuts import render

# Create your views here.


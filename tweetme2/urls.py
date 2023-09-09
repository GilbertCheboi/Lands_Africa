"""tweetme2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, re_path, include # url()
from django.views.generic import TemplateView

# from accounts.views import RegisterAPI
# from knox import views as knox_views
# from accounts.views import LoginAPI
# from django.urls import path

from accounts.views import (
    login_view,
    logout_view,
    register_view,
)
from apartments.views import (
    apartments_view,
    apartment_detail_view,
    contact,
    about,
    privacy,
)

from Land.views import (
    home_view,
    land_detail_view,
    contact,
    about,
    privacy,
)


from Search.views import (
    search,

)

urlpatterns = [
    #path('api/', include('accounts.urls')),

    path('', home_view),
    path('', include('Search.urls')), 
    path('login/', login_view),
    path('logout/', logout_view),
    path('register/', register_view),
    path('admin/', admin.site.urls),
    path('react/', TemplateView.as_view(template_name='react.html')),
    re_path(r'profiles?/', include('profiles.urls')),
    path('About/', about),
    path('Privacy/', privacy),
    path('Contact/', contact),
    path('Land/<int:item_id>/', land_detail_view),
    path('apartments/<int:item_id>/', land_detail_view),
    path('api/accounts/', include('accounts.api.urls')),
    path('api/apartments/', include('apartments.api.urls')),
    path('api/Land/', include('Land.api.urls')),
    re_path(r'api/profiles?/', include('profiles.api.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, 
                document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, 
                document_root=settings.MEDIA_ROOT)

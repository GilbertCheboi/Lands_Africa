from django.contrib import admin

# Register your models here.
from .models import apartment,  apartmentLike


class apartmentLikeAdmin(admin.TabularInline):
    model = apartmentLike



class apartmentAdmin(admin.ModelAdmin):
    inlines = [apartmentLikeAdmin]
    list_display = ['__str__', 'user']
    search_fields = ['content', 'user__username', 'user__email']
    class Meta:
        model = apartment

  
admin.site.register(apartment, apartmentAdmin)




from django.contrib import admin

# Register your models here.
from .models import Land,  LandLike


class LandLikeAdmin(admin.TabularInline):
    model = LandLike



class LandAdmin(admin.ModelAdmin):
    inlines = [LandLikeAdmin]
    list_display = ['__str__', 'user']
    search_fields = ['content', 'user__username', 'user__email']
    class Meta:
        model = Land

  
admin.site.register(Land, LandAdmin)



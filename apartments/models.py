import random
from django.conf import settings
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.db import models
from django.db.models import Q

User = settings.AUTH_USER_MODEL

class apartmentLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    apartment = models.ForeignKey("apartment", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)




class apartmentQuerySet(models.QuerySet):
    def by_username(self, username):
        return self.filter(user__username__iexact=username)

    def feed(self, user):
        profiles_exist = user.following.exists()
        followed_users_id = []
        if profiles_exist:
            followed_users_id = user.following.values_list("user__id", flat=True) # [x.user.id for x in profiles]
        return self.filter(
            Q(user__id__in=followed_users_id) |
            Q(user=user)
        ).distinct().order_by("-timestamp")

class apartmentManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return apartmentQuerySet(self.model, using=self._db)

    def feed(self, user):
        return self.get_queryset().feed(user)



    # content = models.TextField(blank=True, null=True)

class apartment(models.Model):
    # Maps to SQL data
    # id = models.AutoField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="apartment") 
    country = models.TextField(blank=True, null=True)
    county = models.TextField(blank=True, null=True)
    type = models.TextField(blank=True, null=True)
    size = models.TextField(blank=True, null=True)
    beds = models.TextField(blank=True, null=True)
    baths = models.TextField(blank=True, null=True)
    mortgage_plan = models.TextField(blank=True, null=True)
    cash_price = models.TextField(blank=True, null=True)
    instalment_price = models.TextField(blank=True, null=True)
    realtor = models.TextField(blank=True, null=True)
    amenities1 = models.TextField(blank=True, null=True)
    amenities2 = models.TextField(blank=True, null=True)
    amenities3 = models.TextField(blank=True, null=True)
    amenities4 = models.TextField(blank=True, null=True)
    amenities5 = models.TextField(blank=True, null=True)
    amenities6 = models.TextField(blank=True, null=True)
    amenities7 = models.TextField(blank=True, null=True)
    amenities8 = models.TextField(blank=True, null=True)
    amenities9 = models.TextField(blank=True, null=True)
    amenities10 = models.TextField(blank=True, null=True)
    amenities11 = models.TextField(blank=True, null=True)
    amenities12 = models.TextField(blank=True, null=True)
    amenities13 = models.TextField(blank=True, null=True)
    amenities14 = models.TextField(blank=True, null=True)
    amenities15 = models.TextField(blank=True, null=True)
    specific_location = models.TextField(blank=True, null=True)
    center_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    center_longitude = models.DecimalField(max_digits=9, decimal_places=6)
    content = models.TextField(blank=True, null=True)
    video = models.FileField(upload_to='videos/', blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    image1 = models.ImageField(upload_to='images/', blank=True, null=True)
    image2 = models.ImageField(upload_to='images/', blank=True, null=True)
    image3 = models.ImageField(upload_to='images/', blank=True, null=True)
    image4 = models.ImageField(upload_to='images/', blank=True, null=True)
    image5 = models.ImageField(upload_to='images/', blank=True, null=True)
    image6 = models.ImageField(upload_to='images/', blank=True, null=True)
    image7 = models.ImageField(upload_to='images/', blank=True, null=True)
    image8 = models.ImageField(upload_to='images/', blank=True, null=True)
    image9 = models.ImageField(upload_to='images/', blank=True, null=True)
    image10 = models.ImageField(upload_to='images/', blank=True, null=True)
    image11 = models.ImageField(upload_to='images/', blank=True, null=True)
    image12 = models.ImageField(upload_to='images/', blank=True, null=True)
    image13 = models.ImageField(upload_to='images/', blank=True, null=True)
    image14 = models.ImageField(upload_to='images/', blank=True, null=True)
    image15 = models.ImageField(upload_to='images/', blank=True, null=True)
    image16 = models.ImageField(upload_to='images/', blank=True, null=True)
    image17 = models.ImageField(upload_to='images/', blank=True, null=True)
    image18 = models.ImageField(upload_to='images/', blank=True, null=True)
    image19 = models.ImageField(upload_to='images/', blank=True, null=True)
    image20 = models.ImageField(upload_to='images/', blank=True, null=True)
    likes = models.ManyToManyField(User, related_name='apartment_user', blank=True, through=apartmentLike)
    timestamp = models.DateTimeField(auto_now_add=True)


    objects = apartmentManager()
    # def __str__(self):
    #     return self.content

    class Meta:
        ordering = ['-id']

    @property
    def is_retweet(self):
        return self.parent != None

    def serialize(self):
        '''
        Feel free to delete!
        '''
        return {
            "id": self.id,
            "content": self.content,
            "likes": random.randint(0, 200)
        }







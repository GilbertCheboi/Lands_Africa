import random
from django.conf import settings
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.db import models
from django.db.models import Q

User = settings.AUTH_USER_MODEL

class LandLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    land = models.ForeignKey("Land", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)




class LandQuerySet(models.QuerySet):
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

class LandManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return LandQuerySet(self.model, using=self._db)

    def feed(self, user):
        return self.get_queryset().feed(user)



    # content = models.TextField(blank=True, null=True)

class Land(models.Model):
    # Maps to SQL data
    # id = models.AutoField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="land") 
    country = models.TextField(blank=True, null=True)
    county = models.TextField(blank=True, null=True)
    sub_county = models.TextField(blank=True, null=True)
    size = models.TextField(blank=True, null=True)
    price = models.TextField(blank=True, null=True)
    realtor = models.TextField(blank=True, null=True)    
    specific_location = models.TextField(blank=True, null=True)
    center_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    center_longitude = models.DecimalField(max_digits=9, decimal_places=6)
    pointA_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    pointA_longitude = models.DecimalField(max_digits=9, decimal_places=6)
    pointB_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    pointB_longitude = models.DecimalField(max_digits=9, decimal_places=6)
    pointC_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    pointC_longitude = models.DecimalField(max_digits=9, decimal_places=6)
    pointD_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    pointD_longitude = models.DecimalField(max_digits=9, decimal_places=6)
    pointA1_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    pointA1_longitude = models.DecimalField(max_digits=9, decimal_places=6)
    content = models.TextField(blank=True, null=True)
    video = models.FileField(upload_to='videos/', blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    image1 = models.ImageField(upload_to='images/', blank=True, null=True)
    image2 = models.ImageField(upload_to='images/', blank=True, null=True)
    image3 = models.ImageField(upload_to='images/', blank=True, null=True)
    likes = models.ManyToManyField(User, related_name='land_user', blank=True, through=LandLike)
    timestamp = models.DateTimeField(auto_now_add=True)
   

    objects = LandManager()
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






    

 
    
    
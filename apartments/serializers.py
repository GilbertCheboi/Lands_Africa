from email.mime import image
from django.conf import settings
from rest_framework import serializers
from profiles.serializers import PublicProfileSerializer
from .models import apartment
from django.contrib.humanize.templatetags.humanize import naturaltime


MAX_TWEET_LENGTH = settings.MAX_TWEET_LENGTH
TWEET_ACTION_OPTIONS = settings.TWEET_ACTION_OPTIONS

class ApartmentActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()
    content = serializers.CharField(allow_blank=True, required=False)
    #image = serializers.ImageField(blank=True,required=False)

    def validate_action(self, value):
        value = value.lower().strip() # "Like " -> "like"
        if not value in TWEET_ACTION_OPTIONS:
            raise serializers.ValidationError("This is not a valid action for tweets")
        return value


class ApartmentCreateSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True) # serializers.SerializerMethodField(read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    #image = serializers.SerializerMethodField()
    class Meta:
        model = apartment
        fields = ['user', 
                  'id', 
                  'content', 
                  'likes',
                  'image', 
                  'image1', 
                  'image2',
                  'image3', 
                  'longitude', 
                  'latitude', 
                  'country', 
                  'county', 
                  'subcounty', 
                  'ward', 
                  'timestamp']

 
    
    

  


class ApartmentSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = apartment
        fields = ['user', 
                  'name',
                  'id', 
                  'content', 
                  'likes',
                  'image', 
                  'image1', 
                  'image2',
                  'image3', 
                  'image4',
                  'image5',
                  'image6',
                  'image7',
                  'image8',
                  'image9',
                  'image10',
                  'image11',
                  'image12',
                  'image13',
                  'image14',
                  'image14',
                  'image15',
                  'image16',
                  'image17',
                  'image18',
                  'image19',
                  'image20',
                  'center_longitude', 
                  'center_latitude', 
                  'country', 
                  'county', 
                  'type', 
                  'beds', 
                  'baths',
                  'cash_price',
                  'mortgage_plan',
                  'instalment_price',
                  'size',
                  'type',
                  'amenities1',
                  'amenities2',
                  'amenities3',
                  'amenities4',
                  'amenities5',
                  'amenities6',
                  'amenities7',
                  'amenities8',
                  'amenities9',
                  'amenities10',
                  'amenities11',
                  'amenities12',
                  'amenities13',
                  'amenities14',
                  'amenities15',
                  'specific_location',
                  'realtor',
                  'timestamp']


    def get_likes(self, obj):
        return obj.likes.count()

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['timestamp'] = naturaltime(instance.timestamp)
        return representation


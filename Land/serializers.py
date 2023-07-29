from email.mime import image
from django.conf import settings
from rest_framework import serializers
from profiles.serializers import PublicProfileSerializer
from .models import Land
from django.contrib.humanize.templatetags.humanize import naturaltime


MAX_TWEET_LENGTH = settings.MAX_TWEET_LENGTH
TWEET_ACTION_OPTIONS = settings.TWEET_ACTION_OPTIONS

class LandActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()
    content = serializers.CharField(allow_blank=True, required=False)
    #image = serializers.ImageField(blank=True,required=False)

    def validate_action(self, value):
        value = value.lower().strip() # "Like " -> "like"
        if not value in TWEET_ACTION_OPTIONS:
            raise serializers.ValidationError("This is not a valid action for tweets")
        return value


class LandCreateSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True) # serializers.SerializerMethodField(read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    #image = serializers.SerializerMethodField()
    class Meta:
        model = Land
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

 
    
    

  


class LandSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Land
        fields = ['user', 
                  'id', 
                  'content', 
                  'likes',
                  'image', 
                  'image1', 
                  'image2',
                  'image3', 
                  'center_longitude', 
                  'center_latitude', 
                  'pointA_latitude',
                  'pointA_longitude',
                  'pointB_latitude', 
                  'pointB_longitude',
                  'pointC_latitude',
                  'pointC_longitude',
                  'pointD_latitude',
                  'pointD_longitude',
                  'pointA1_latitude',
                  'pointA1_longitude',
                  'country', 
                  'county', 
                  'sub_county', 
                  'ward', 
                  'specific_location',
                  'price',
                  'realtor',
                  'timestamp']


    def get_likes(self, obj):
        return obj.likes.count()

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['timestamp'] = naturaltime(instance.timestamp)
        return representation


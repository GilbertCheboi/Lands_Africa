from django.db.models import Q
from rest_framework.decorators import api_view
from rest_framework.response import Response

from Land.models import Land

from profiles.models import Profile

from Land.serializers import LandSerializer
from profiles.serializers import ProfileSerializer

@api_view(['GET'])
def search(request):
    query = request.GET.get('q')
    lands = Land.objects.filter(Q(county__icontains=query) | Q(realtor__icontains=query))

    profiles = Profile.objects.filter(Q(location__icontains=query) | Q(bio__icontains=query))
    # Add any other models you want to search across here...
    results =[
        {'model': 'Land', 'data': LandSerializer(lands, many=True).data},
        {'model': 'Profile', 'data': ProfileSerializer(profiles, many=True).data},
        # Add any other model serializers here...
    ]
    return Response(results)

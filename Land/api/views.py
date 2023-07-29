import random
from django.conf import settings
from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render, redirect
#from django.utils.http import is_safe_url
from rest_framework import status

from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
#from ..forms import TweetForm
from ..models import Land
from ..serializers import (
    LandSerializer, 
    LandActionSerializer,
    LandCreateSerializer,
)

ALLOWED_HOSTS = settings.ALLOWED_HOSTS

@api_view(['POST']) # http method the client == POST
# @authentication_classes([SessionAuthentication, MyCustomAuth])
@permission_classes([IsAuthenticated]) # REST API course
def land_create_view(request, *args, **kwargs):
    serializer = LandCreateSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status=201)
    return Response({}, status=400)

@api_view(['GET'])
def land_detail_view(request, land_id, *args, **kwargs):
    qs = Land.objects.filter(id=land_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    serializer = LandSerializer(obj)
    return Response(serializer.data, status=200)

@api_view(['DELETE', 'POST'])
@permission_classes([IsAuthenticated])
def land_delete_view(request, land_id, *args, **kwargs):
    qs = Land.objects.filter(id=land_id)
    if not qs.exists():
        return Response({}, status=404)
    qs = qs.filter(user=request.user)
    if not qs.exists():
        return Response({"message": "You cannot delete this land"}, status=401)
    obj = qs.first()
    obj.delete()
    return Response({"message": "Land removed"}, status=200)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def land_action_view(request, *args, **kwargs):
    '''
    id is required.
    Action options are: like, unlike, retweet
    '''
    serializer = LandActionSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        data = serializer.validated_data
        land_id = data.get("id")
        action = data.get("action")
        content = data.get("content")
        qs = Land.objects.filter(id=land_id)
        if not qs.exists():
            return Response({}, status=404)
        obj = qs.first()
        if action == "like":
            obj.likes.add(request.user)
            serializer = LandSerializer(obj)
            return Response(serializer.data, status=200)
        elif action == "unlike":
            obj.likes.remove(request.user)
            serializer = LandSerializer(obj)
            return Response(serializer.data, status=200)
        elif action == "retweet":
            new_land = Land.objects.create(
                    user=request.user, 
                    parent=obj,
                    content=content,
                    )
            serializer = LandSerializer(new_land)
            return Response(serializer.data, status=201)
    return Response({}, status=200)


def get_paginated_queryset_response(qs, request):
    paginator = PageNumberPagination()
    paginator.page_size = 100
    paginated_qs = paginator.paginate_queryset(qs, request)
    serializer = LandSerializer(paginated_qs, many=True, context={"request": request})
    return paginator.get_paginated_response(serializer.data) # Response( serializer.data, status=200)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def land_feed_view(request, *args, **kwargs):
    user = request.user
    qs = Land.objects.feed(user)
    return get_paginated_queryset_response(qs, request)

@api_view(['GET'])
def land_list_view(request, *args, **kwargs):
    qs = Land.objects.all()
    username = request.GET.get('username') # ?username=Justin
    if username != None:
        qs = qs.by_username(username)
    return get_paginated_queryset_response(qs, request)


@api_view(['POST'])
def comment_land_view(request, *args, **kwags):
    serializer = CommentCreateSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status=201)
    return Response({}, status=400)

   

@api_view(['GET'])
def see_all_land_comments(request, id, *args, **kwags):
    '''
    See all comments made on a tweet
    '''
    commentedland = Comment.objects.filter(land=id)
    serializelandcomments = CommentLandSerializer(commentedland, many=True)

    return Response(serializelandcomments.data)




def tweet_create_view_pure_django(request, *args, **kwargs):
    '''
    REST API Create View -> DRF
    '''
    user = request.user
    if not request.user.is_authenticated:
        user = None
        if request.is_ajax():
            return JsonResponse({}, status=401)
        return redirect(settings.LOGIN_URL)
    form = TweetForm(request.POST or None)
    next_url = request.POST.get("next") or None
    if form.is_valid():
        obj = form.save(commit=False)
        # do other form related logic
        obj.user = user
        obj.save()
        if request.is_ajax():
            return JsonResponse(obj.serialize(), status=201) # 201 == created items
        if next_url != None and is_safe_url(next_url, ALLOWED_HOSTS):
            return redirect(next_url)
        form = TweetForm()
    if form.errors:
        if request.is_ajax():
            return JsonResponse(form.errors, status=400)
    return render(request, 'components/form.html', context={"form": form})


def tweet_list_view_pure_django(request, *args, **kwargs):
    """
    REST API VIEW
    Consume by JavaScript or Swift/Java/iOS/Andriod
    return json data
    """
    qs = Land.objects.all()
    tweets_list = [x.serialize() for x in qs]
    data = {
        "isUser": False,
        "response": tweets_list
    }
    return JsonResponse(data)


def tweet_detail_view_pure_django(request, tweet_id, *args, **kwargs):
    """
    REST API VIEW
    Consume by JavaScript or Swift/Java/iOS/Andriod
    return json data
    """
    data = {
        "id": tweet_id,
    }
    status = 200
    try:
        obj = Tweet.objects.get(id=tweet_id)
        data['content'] = obj.content
    except:
        data['message'] = "Not found"
        status = 404
    return JsonResponse(data, status=status) # json.dumps content_type='application/json'
from django.urls import path

from .views import (
    apartment_action_view,
    apartment_delete_view,
    apartment_detail_view,
    apartment_feed_view,
    apartment_list_view,
    apartment_create_view,
    comment_apartment_view,
    see_all_apartment_comments,

)

urlpatterns = [
    path('', apartment_list_view),
    path('feed/', apartment_feed_view),
    path('action/', apartment_action_view),
    path('create/', apartment_create_view),
    path('<int:land_id>/', apartment_detail_view),
    path('<int:tweet_id>/delete/', apartment_delete_view),
    path('commentweet/', comment_apartment_view),
    path('tweetcomments/<int:id>/', see_all_apartment_comments),
]

from django.urls import path

from .views import (
    land_action_view,
    land_delete_view,
    land_detail_view,
    land_feed_view,
    land_list_view,
    land_create_view,
    comment_land_view,
    see_all_land_comments,

)

urlpatterns = [
    path('', land_list_view),
    path('feed/', land_feed_view),
    path('action/', land_action_view),
    path('create/', land_create_view),
    path('<int:land_id>/', land_detail_view),
    path('<int:tweet_id>/delete/', land_delete_view),
    path('commentweet/', comment_land_view),
    path('tweetcomments/<int:id>/', see_all_land_comments),
]

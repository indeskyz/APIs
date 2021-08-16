from django.conf.urls import url
from todos import views

urlpatterns = [
    url(r'^api/todos$', views.todos),
    url(r'^api/todos/(?P<pk>[0-9]+)$', views.todos_details),
    url(r'^api/todos/published$', views.published_todos)
]

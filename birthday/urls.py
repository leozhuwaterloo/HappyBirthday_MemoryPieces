from django.conf.urls import url
from . import views

app_name = 'birthday'

urlpatterns = [
    url(r'^$', views.main_index, name="index"),
    url(r'^unity/$', views.unity, name="unity"),
    url(r'^java/$', views.java, name="java"),
    url(r'^python/$', views.python, name="python"),
    url(r'^html/$', views.html, name="html"),
    url(r'^restart/$', views.restart, name="restart"),
    url(r'^image/(?P<year>\d+)/$', views.image, name="image")
]
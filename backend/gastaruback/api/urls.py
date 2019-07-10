from django.conf.urls import include, url
from rest_framework import routers
from gastaruback.api import views
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'operation', views.LancamentoViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^auth/', ObtainAuthToken.as_view()),
    url(r'^', include(router.urls)),
]
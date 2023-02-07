from django_filters import rest_framework as filters
from rest_framework import generics

from app.models import Series
from app.serializers import SeriesSerializer


class SeriesList(generics.ListAPIView):
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = {
        'name': ["in"],
    }

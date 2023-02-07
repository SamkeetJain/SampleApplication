from rest_framework import serializers

from app.models import Series


class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = ('name', 'data')

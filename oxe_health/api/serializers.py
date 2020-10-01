from rest_framework import serializers
from .models import EventMetric


class MetricsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventMetric
        fields = "__all__"

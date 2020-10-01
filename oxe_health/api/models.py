import uuid
from django.db import models


class EventMetric(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    room = models.CharField(max_length=40)
    metric = models.CharField(max_length=50)
    dt = models.DateField(auto_now=False)
    count = models.IntegerField()
    def __str__(self):
        return self.room

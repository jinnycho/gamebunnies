from django.db import models
from django.db.models.functions import Now

class EyeGameScores(models.Model):
    user_id = models.CharField(max_length=100)
    last_updated = models.DateTimeField(db_default=Now())
    score = models.BigIntegerField(default=0)

    class Meta:
        indexes = [
            models.Index(fields=['user_id', 'last_updated'])
        ]

from django.contrib import admin
from .models import EyeGameScores

class EyeGameScoresAdmin(admin.ModelAdmin):
    list_display = (
        'user_id',
        'last_updated',
        'score',
    )
    
admin.site.register(EyeGameScores, EyeGameScoresAdmin)
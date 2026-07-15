from django.contrib import admin
from .models import (
    Profile,
    Skill,
    Project,
    Education,
    Experience,
    Certificate
)

admin.site.register(Profile)
admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Certificate)
from django.urls import path
from .views import (
    ProfileList,
    SkillList,
    ProjectList,
    EducationList,
    ExperienceList,
    CertificateList,
)

urlpatterns = [
    path('profile/', ProfileList.as_view(), name='profile'),
    path('skills/', SkillList.as_view(), name='skills'),
    path('projects/', ProjectList.as_view(), name='projects'),
    path('education/', EducationList.as_view(), name='education'),
    path('experience/', ExperienceList.as_view(), name='experience'),
    path('certificates/', CertificateList.as_view(), name='certificates'),
]
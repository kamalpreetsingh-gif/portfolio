from django.shortcuts import render
from rest_framework import generics

from .models import (
    Profile,
    Skill,
    Project,
    Education,
    Experience,
    Certificate
)

from .serializers import (
    ProfileSerializer,
    SkillSerializer,
    ProjectSerializer,
    EducationSerializer,
    ExperienceSerializer,
    CertificateSerializer
)


# ==========================
# Home Page View
# ==========================
def home(request):
    return render(request, "portfolio/index.html")


# ==========================
# Profile API
# ==========================
class ProfileList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


# ==========================
# Skills API
# ==========================
class SkillList(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


# ==========================
# Projects API
# ==========================
class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


# ==========================
# Education API
# ==========================
class EducationList(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


# ==========================
# Experience API
# ==========================
class ExperienceList(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


# ==========================
# Certificate API
# ==========================
class CertificateList(generics.ListAPIView):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer
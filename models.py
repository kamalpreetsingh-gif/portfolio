from django.db import models


# Profile Model
class Profile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    about = models.TextField()  
    semester = models.CharField(max_length=20)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    location = models.CharField(max_length=100)
    github = models.URLField()
    linkedin = models.URLField()
    resume = models.FileField(upload_to='resume/')
    photo = models.ImageField(upload_to='profile/')

    def __str__(self):
        return self.name


# Skills Model
class Skill(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


# Projects Model
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    github_link = models.URLField()
    live_link = models.URLField(blank=True)

    def __str__(self):
        return self.title


# Education Model
class Education(models.Model):
    college = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    semester = models.CharField(max_length=20)
    cgpa = models.CharField(max_length=10)

    def __str__(self):
        return self.college


# Experience Model
class Experience(models.Model):
    company = models.CharField(max_length=200)
    role = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.company


# Certificate Model
class Certificate(models.Model):
    certificate_name = models.CharField(max_length=200)
    issued_by = models.CharField(max_length=200)
    certificate_image = models.ImageField(upload_to='certificates/')

    def __str__(self):
        return self.certificate_name
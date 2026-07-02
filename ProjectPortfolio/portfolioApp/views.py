from django.shortcuts import render
from .serializers import ContactSerializer, ProjectSerializer, SkillSerializer
from rest_framework.views import APIView
from .models import Project, Skill, Contact
from rest_framework.response import Response

# Create your views here.

class ProjectView(APIView):

    def get(self, request):

        projects = Project.objects.all()

        serializer = ProjectSerializer(projects, many = True)

        return Response(serializer.data)

class SkillView(APIView):

    def get(self, request):

        skills = Skill.objects.all()

        serializer = SkillSerializer(skills, many = True)
        return Response(serializer.data)
    

class ContactView(APIView):

    def post(self, request):
        serializer = ContactSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
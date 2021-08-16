from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from .models import Todo
from .serializers import TodoSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def todos(req):
    if req.method == 'GET':
        todos = Todo.objects.all()
        title = req.GET.get('title', None)
        if title is not None:
            todos = todos.filter(title__icontains=title)
        todos_serializer = TodoSerializer(todos, many=True)
        return JsonResponse(todos_serializer.data, safe=False)

    elif req.method == 'POST':
        todos_data = JSONParser().parse(req)
        todos_serializer = TodoSerializer(data=todos_data)
        if todos_serializer.is_valid():
            todos_serializer.save()
            return JsonResponse(todos_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(todos_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif req.method == 'DELETE':
        count = Todo.objects.all().delete()
        return JsonResponse({
            'message': '{} Todos were successfully deleted'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def todos_details(req, pk):
    try:
        todos = Todo.objects.get(pk=pk)
    except Todo.DoesNotExist:
        return JsonResponse({'message': 'The todo does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if req.method == 'GET':
        todos_serializer = TodoSerializer(todos)
        return JsonResponse(todos_serializer.data)

    elif req.method == 'PUT':
        todos_data = JSONParser().parse(req)
        todos_serializer = TodoSerializer(todos, data=todos_data)
        if todos_serializer.is_valid():
            todos_serializer.save()
            return JsonResponse(todos_serializer.data)
        return JsonResponse(todos_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif req.method == 'DELETE':
        todos.delete()
        return JsonResponse({'message': 'Todo was successfully deleted'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def published_todos(req):
    todos = Todo.objects.filter(published=True)
    if req.method == 'GET':
        todos_serializer = TodoSerializer(todos, many=True)
        return JsonResponse(todos_serializer.data, safe=False)

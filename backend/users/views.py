from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
def register_user(request):
    data = request.data

    email=data.get('email')
    password = data.get('password')
    name = data.get('name', '')

    if not email or not password:
        return Response({'error': 'Email and password are required'}, status =status.HTTP_400_BAD_REQUEST)
    
    try:
        user = User.objects.create_user(
            username=email,
            email=email,
            password=password,
            first_name=name,
        )
        return Response ({'message': 'The user has been created successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def login_user(request):
    data = request.data
    email = data.get('email')
    password = data.get('password')
    user = authenticate(username=email, password=password)

    if user is not None:
        return Response({'message': 'Login correcto'}, status=status.HTTP_200_OK)
    else:
        return Response ({'error': 'Credenciales incorrectas'}, status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def customer_page(request):
    user = request.user
    return Response({
        'message': f'Hola {request.user.username}, esta es tu página personalizada!'
        })

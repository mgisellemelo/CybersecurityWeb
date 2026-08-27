from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User


class AuthTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            password='SecurePass123!'
        )

    def test_login_success(self):
        response = self.client.post('/api/login/', {
            'username': 'testuser',
            'password': 'SecurePass123!'
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

    def test_login_wrong_password(self):
        response = self.client.post('/api/login/', {
            'username': 'testuser',
            'password': 'wrongpassword'
        })
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_login_nonexistent_user(self):
        response = self.client.post('/api/login/', {
            'username': 'doesnotexist',
            'password': 'whatever'
        })
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_protected_route_without_token(self):
        response = self.client.get('/api/customer/')
        self.assertIn(response.status_code, [
            status.HTTP_401_UNAUTHORIZED,
            status.HTTP_403_FORBIDDEN
        ])

    def test_protected_route_with_valid_token(self):
        login = self.client.post('/api/login/', {
            'username': 'testuser',
            'password': 'SecurePass123!'
        })
        token = login.data['access']
        response = self.client.get(
            '/api/customer/',
            HTTP_AUTHORIZATION=f'Bearer {token}'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_token_refresh(self):
        login = self.client.post('/api/login/', {
            'username': 'testuser',
            'password': 'SecurePass123!'
        })
        refresh_token = login.data['refresh']
        response = self.client.post('/api/token/refresh/', {
            'refresh': refresh_token
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
# 🛡️ CybersecurityWeb

This website is meant to be for a cybersecurity company. It includes user authentication and a personalized page for clients.
Sitio web fullstack para una empresa de ciberseguridad. Incluye autenticación de usuarios y una sección personalizada para clientes.

---

## 🚀 Technologies

### Frontend:
- React.js
- React Router
- Vite
- HTML, CSS, JavaScript

### Backend:
- Python
- Django
- Django REST Framework
- JWT (autenticación)

---

## 💻 Functionality

- Home Page/ Página de inicio institucional
- User registration/ Registro e inicio de sesión de usuarios
- Customer page/Página personalizada para cada cliente
- Authentication JWT/ Autenticación basada en token JWT
- Styled with blue, lightblue, grey and black/ Estilizado con tonos de azul, celeste, gris y negro

---

## 🧪 How to run the project/ Cómo correr el proyecto localmente

### 📁 Clone the repository/ Clonar el repositorio

```bash
git clone https://github.com/mgisellemelo/CybersecurityWeb.git
cd CybersecurityWeb

⚙️ Backend (Django)
cd backend
python -m venv env
source env/bin/activate  # en Windows: env\Scripts\activate
pip install -r requirements.txt
python manage.py runserver

🌐 Frontend (React)

cd frontend
npm install
npm run dev

🧾 Autenticación
Se utiliza JWT:

Users get an acces token and refresh to login/ Los usuarios reciben un token de acceso y refresh al iniciar sesión.

Private routes require a token / Las rutas privadas requieren el token.

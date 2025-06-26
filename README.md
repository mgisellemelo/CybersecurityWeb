# 🛡️ CybersecurityWeb

Sitio web fullstack para una empresa de ciberseguridad. Incluye autenticación de usuarios y una sección personalizada para clientes.

---

## 🚀 Tecnologías utilizadas

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

## 💻 Funcionalidades

- Página de inicio institucional
- Registro e inicio de sesión de usuarios
- Página personalizada para cada cliente
- Autenticación basada en token JWT
- Estilizado con tonos de azul, celeste, gris y negro

---

## 🧪 Cómo correr el proyecto localmente

### 📁 Clonar el repositorio

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

Los usuarios reciben un token de acceso y refresh al iniciar sesión.

Las rutas privadas requieren el token.

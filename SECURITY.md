# Security Policy

## Authentication
This project uses JWT (JSON Web Tokens) via `djangorestframework-simplejwt` for authentication.
- Access and refresh tokens rotate on use, with blacklisting after rotation.
- Passwords are hashed using Django's default PBKDF2 hasher.

## Brute-force protection
Login attempts are rate-limited using `django-axes`, locking out after repeated failures combining IP address and username to prevent bypass via user-agent or cookie rotation.

## Secrets management
- `SECRET_KEY` and other sensitive configuration are never committed to source control.
- Local development uses a `.env` file (gitignored).
- CI and deployment use environment-managed secrets (GitHub Actions Secrets / hosting provider environment variables).

## Dependency scanning
Backend and frontend dependencies are automatically scanned for known vulnerabilities on every push via `pip-audit` and `npm audit` in the CI pipeline.

## Reporting a vulnerability
This is a personal portfolio project. If you find a security issue, please open an issue on GitHub or reach out directly.

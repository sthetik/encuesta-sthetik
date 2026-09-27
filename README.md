# Sthetik · Encuesta de satisfacción

- `/` → formulario para clientes
- `/admin` → dashboard de calificación

## 1. Supabase
1. Crea un proyecto en supabase.com.
2. SQL Editor → pega y ejecuta `supabase/schema.sql`.
3. Project Settings → API → copia **Project URL** y **anon public key** en `config.js`.

## 2. GitHub
```bash
git init && git add . && git commit -m "Encuesta Sthetik"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/sthetik-encuesta.git
git push -u origin main
```

## 3. Vercel
Add New → Project → importa el repo → Framework: **Other** → Deploy. No requiere build.

## Notas
- El dashboard está **sin protección**: cualquiera con el enlace `/admin` puede ver las respuestas. Para protegerlo después, activa Supabase Auth y cambia la política de lectura a `authenticated`.
- La anon key es pública por diseño; la seguridad la dan las políticas RLS.
- Las preguntas y los puntajes (1–5) se editan en `config.js`. Si cambias las opciones, actualiza también los `check` en `schema.sql`.

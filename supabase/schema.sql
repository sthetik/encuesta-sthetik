-- Sthetik · Encuesta de satisfacción
-- Ejecutar en Supabase → SQL Editor

create table if not exists public.respuestas (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  atencion     text not null check (atencion     in ('Excelente','Buena','Regular','Mala')),
  resultados   text not null check (resultados   in ('Muy satisfecho(a)','Satisfecho(a)','Poco satisfecho(a)','Nada satisfecho(a)')),
  ambiente     text not null check (ambiente     in ('Superó mis expectativas','Cumplió con mis expectativas','No cumplió con mis expectativas')),
  volveria     text not null check (volveria     in ('Sí, sin dudarlo','Tal vez','No')),
  recomendaria text not null check (recomendaria in ('Sí','No')),
  comentario   text check (char_length(comentario) <= 2000)
);

alter table public.respuestas enable row level security;

-- Cualquiera puede enviar una respuesta (formulario público)
drop policy if exists "insert publico" on public.respuestas;
create policy "insert publico" on public.respuestas
  for insert to anon with check (true);

-- Lectura abierta para el dashboard (SIN protección, según lo acordado).
-- Cuando agregues login, reemplaza "anon" por "authenticated".
drop policy if exists "lectura dashboard" on public.respuestas;
create policy "lectura dashboard" on public.respuestas
  for select to anon using (true);

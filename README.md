# Anima Project

Base inicial do browser game inspirado em Pokémon/Digimon usando **Next.js + Supabase + UI estilo shadcn**.

## Entregue nesta versão

- Landing page (`/`)
- Login (`/auth/login`)
- Registro (`/auth/register`)
- Homepage protegida (`/home`) com verificação de sessão
- Logout na homepage

## Setup

1. Instale dependências:
   ```bash
   npm install
   ```
2. Copie variáveis:
   ```bash
   cp .env.example .env.local
   ```
3. Preencha credenciais do Supabase.
4. Rode o projeto:
   ```bash
   npm run dev
   ```

## Teste rápido

1. Abra a landing page.
2. Vá para registro e crie uma conta.
3. Faça login.
4. Verifique acesso à `/home`.
5. Clique em **Sair** e confirme retorno à landing.

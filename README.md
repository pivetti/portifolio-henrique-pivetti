# Portfólio Pessoal | Henrique Belgrovicz Pivetti

Portfólio profissional desenvolvido para apresentar projetos, habilidades e formas de contato de maneira responsiva e objetiva. O foco do projeto é combinar boa experiência visual com uma implementação sólida.

## Tecnologias Utilizadas

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Resend (envio de e-mails)
- Vercel (deploy)

## Funcionalidades

- Layout responsivo com abordagem mobile-first
- Tema escuro moderno (zinc/black)
- Navbar fixa
- Seção Hero
- Seção de Projetos com cards animados
- Microinterações em botões (`hover` e `active`)

- Formulário de contato com:
  - Validação de campos
  - Proteção contra XSS
  - Bloqueio de links
  - Estado de loading no botão
  - Integração com `API /api/contact` usando Resend

- Implementações futuras:
  - rate limit no formulário de contato
  - Melhoria na seção de Projetos

## Estrutura de Pastas (Resumo)

```bash
.
|-- app/
|   |-- api/
|   |   `-- contact/
|   |       `-- route.ts
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- ContactForm.tsx
|   |-- Navbar.tsx
|   `-- ProjectCard.tsx
|-- public/
|-- styles/
|-- lib/
|-- .env.local
`-- README.md
```

## Como Rodar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/pivetti/portifolio-henrique-pivetti.git
```

2. Acesse a pasta do projeto:

```bash
cd meu-portifolio
```

3. Instale as dependências:

```bash
npm install
```

4. Configure as variáveis de ambiente (veja seção abaixo).

5. Execute em ambiente de desenvolvimento:

```bash
npm run dev
```

6. Abra no navegador:

```bash
http://localhost:3000
```

## Configuração de Ambiente (`RESEND_API_KEY`)

Crie um arquivo `.env.local` na raiz do projeto e adicione:

```env
RESEND_API_KEY=sua_chave_resend_aqui
```

> A chave é necessária para o funcionamento do envio de e-mails no endpoint `POST /api/contact`.

## Deploy

O deploy recomendado é na Vercel:

1. Faça push do projeto para o GitHub.
2. Importe o repositório na [Vercel](https://vercel.com/).
3. Configure a variável de ambiente `RESEND_API_KEY` no painel da Vercel.
4. Realize o deploy.

## Contato

- GitHub: [github.com/pivetti](https://github.com/pivetti)
- LinkedIn: [linkedin.com/in/henriquepivetti](https://linkedin.com/in/henriquepivetti)
- Email: henriquepivettidev@gmail.com
---

Desenvolvido por **Henrique Belgrovicz Pivetti**.

# Todo List

> Projeto de lista de tarefas feito com React, TypeScript e Vite.

> Permite adicionar, marcar como concluída, remover e listar tarefas, com campos de título e descrição.

## Funcionalidades

- Adicionar tarefas com título e descrição
- Marcar/desmarcar tarefas como concluídas
- Remover tarefas
- Contador de tarefas totais e concluídas

## Pré-requisitos

- pnpm (recomendado, mas pode usar npm/yarn)
- Backend rodando na porta 3333 (API REST compatível)

## Instalação

```bash
pnpm install
```

## Rodando o projeto

```bash
pnpm run dev
```

O projeto estará disponível em `http://localhost:5173` (por padrão).

## Rodando os testes

```bash
pnpm test
```

ou

```bash
npm test
```

ou

```bash
yarn test
```

## Estrutura do projeto

```
├── public/
├── src/
│   ├── components/
│   │   ├── TodoItem.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       └── input.tsx
│   ├── hooks/
│   │   └── useTodo.tsx
│   ├── lib/
│   │   └── todoService.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
└── README.md
```

## Backend

Certifique-se de que o backend está rodando em `localhost:3333` e que os endpoints seguem os schemas esperados:

- Criar tarefa: `{ title: string, description: string }`
- Atualizar tarefa: `{ id: string, title?: string, description?: string }`
- Remover tarefa: `{ id: string }`

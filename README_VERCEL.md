# Instruções para Hospedagem na Vercel

Este projeto foi configurado para ser hospedado facilmente na Vercel como um site estático (SPA).

## Como fazer o deploy:

1.  **Importe o projeto**: No painel da Vercel, clique em "Add New" -> "Project".
2.  **Upload**: Você pode subir os arquivos para um repositório no GitHub/GitLab/Bitbucket ou usar a CLI da Vercel.
3.  **Configurações de Build**:
    *   **Framework Preset**: Vite
    *   **Build Command**: `npm run build` ou `pnpm run build`
    *   **Output Directory**: `dist`
4.  **Configurações Adicionais**: O arquivo `vercel.json` já está incluído para garantir que as rotas do React funcionem corretamente (Single Page Application).

## Alterações realizadas:
- Adicionado `vercel.json` para suporte a SPA.
- Ajustado `vite.config.ts` para exportar o build na pasta `dist`.
- Removidos plugins específicos do ambiente de desenvolvimento original que poderiam causar erros no build da Vercel.
- Simplificado o script de build no `package.json`.

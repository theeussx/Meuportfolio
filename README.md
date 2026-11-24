# Theeussx Portfolio 2.0

Portfólio de Mateus Henrique, desenvolvedor web e automações em Pernambuco. A página reúne estudos de caso, serviços, competências, atividade pública, certificados e um formulário de orçamento em português e inglês.

## Executar localmente

Use Node.js 22 e a versão do pnpm indicada em `package.json`. Se o pnpm não estiver no PATH, substitua `pnpm` por `corepack pnpm`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

O Vite imprime a URL local. Para validar a versão de produção, execute:

```sh
pnpm check
pnpm test
pnpm build
pnpm preview
```

A build gera os arquivos estáticos em `dist/`. O HTML inicial em português é renderizado durante a build. A aplicação React hidrata a página no navegador e recupera as preferências de idioma e tema.

## Publicar na Vercel

Importe o repositório com a raiz no diretório do projeto. Selecione o preset Vite e o Node.js 22.x. A configuração versionada em `vercel.json` define a saída `dist` e os cabeçalhos de segurança. O comando de build é `pnpm build`; o lockfile fixa as dependências. A publicação pode partir de um deployment de prévia para revisar o resultado antes de promovê-lo.

Revise a URL canônica, os metadados sociais, os dados estruturados e o sitemap se alterar o domínio público. A build inclui uma página estática `404.html`.

## Orçamentos e privacidade

O formulário valida os campos no navegador e prepara um e-mail em português ou inglês com o briefing. O visitante pode abrir o aplicativo de e-mail ou copiar o texto. O portfólio não coleta, armazena ou envia o conteúdo para um servidor. O link de contato direto também funciona com JavaScript desativado.

Para ativar futuramente o envio pelo próprio site, configure um remetente verificado em um provedor de e-mail e mantenha a chave de API nas variáveis privadas da Vercel. Adicione uma função Vercel de mesma origem que reaplique as regras de `client/src/lib/quote.ts`, limite o tamanho do corpo e a taxa de solicitações, fixe o destinatário no servidor e evite registrar o conteúdo dos briefings. Atualize o aviso de privacidade e confirme o envio na interface somente após a aceitação pelo provedor. Nenhuma credencial é necessária para a versão atual.

## Organização

- `client/src/components/` reúne as seções, os controles Arc e os componentes shadcn.
- `client/src/content/` centraliza identidade, navegação, experiências e textos bilíngues.
- `client/src/index.css` define os tokens, temas e layouts responsivos.
- `client/src/lib/quote.ts` concentra validação, traduções e geração do briefing.
- `client/public/media/` contém retrato, capturas reais dos projetos e imagem social.
- `scripts/prerender.mjs` gera o HTML público e a página de erro.
- `tests/quote.test.mjs` cobre campos opcionais, limites, validação e codificação da mensagem.

O registry da Arc está em `components.json`. `ThemeSwitch`, `CopyButton` e o `Button` de suporte foram adaptados aos tokens do projeto e usam transições CSS com suporte à preferência de movimento reduzido. A licença da Arc e a da fonte Geist acompanham os respectivos arquivos.

Consulte [LICENSE](LICENSE) para a licença do portfólio.

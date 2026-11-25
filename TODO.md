# Portfolio V2 — entregas e pendências

## Reconhecimento e fundação — concluído

- A aplicação deve permanecer em React + Vite + TypeScript e compatível com a Vercel, sem migração automática para Next.js.
- A página deve ser única, com navegação por âncoras, HTML semântico, foco visível, skip link e layout responsivo.
- O projeto deve centralizar identidade, navegação, serviços, competências, projetos e conteúdo traduzido em estruturas reutilizáveis.
- A integração Arc deve usar o registry `@uiarc`, tokens locais e `data-theme` no elemento `html`, sem impor uma identidade visual pronta.

## Identidade, hero e navegação — concluído

- O header deve incluir marca textual, navegação, alternância de idioma, alternância de tema, CTA de contato e menu mobile acessível.
- O hero deve apresentar Mateus Henrique como desenvolvedor web e de automações, com fotografia real local em destaque, proposta de valor e CTAs para projetos e contato.
- O tema escuro deve ser padrão, o tema claro deve ser refinado e a preferência deve persistir em `localStorage` sem flash evitável.
- Português brasileiro e inglês devem existir para conteúdo, mensagens, controles e labels de acessibilidade, com `document.documentElement.lang` atualizado.

## Projetos e evidências — concluído

- A seção deve destacar Pterodroid, ZittoDB e Feira de Matemática com textos bilíngues, tecnologias, contexto, contribuição, estado, links públicos e imagens reais locais.
- O projeto principal deve ter composição visual diferente dos projetos secundários, sem transformar todos os itens em cards idênticos.
- A galeria deve permitir imagem em tamanho real, controles anterior/próximo, contador, teclado, `dialog` e restauração de foco.

## Serviços, competências e open source — concluído

- Serviços devem cobrir desenvolvimento web, sistemas/aplicações, automações e modernização digital, com valor explicado e CTA contextual.
- A ação de um serviço deve pré-selecionar o tipo de projeto no formulário de orçamento.
- Competências devem ser agrupadas por aplicação prática, sem barras de porcentagem arbitrárias.
- O bloco GitHub deve permanecer honesto: repositórios e link para atividade pública não podem ser apresentados como métricas em tempo real.

## Sobre, certificados e orçamento — concluído

- A seção sobre deve manter narrativa humana e verificável, sem inventar clientes, cargos, resultados ou experiência.
- Certificados devem usar documentos locais acessíveis, dados bilíngues e associação por identificador, não por posição paralela.
- O formulário deve validar nome, e-mail, serviço e descrição; aceitar campos opcionais; focar o primeiro erro; gerar `mailto:` e oferecer cópia do briefing.
- O formulário não deve simular envio bem-sucedido. A privacidade deve informar que os dados só seguem por e-mail se a pessoa enviar a mensagem.

## SEO, segurança e distribuição — concluído

- A build deve gerar HTML inicial prerenderizado e `404.html`, preservando title, description, canonical, Open Graph, Twitter Card, JSON-LD, favicon, sitemap e robots.
- A Vercel deve receber headers de segurança proporcionais, sem expor segredos no bundle.
- O projeto deve declarar Node 22, manter lockfile pnpm e usar imagens, fonte e documentos locais.
- O servidor de desenvolvimento deve expor `manus-routes.json` com a rota pública `/`.

## Validação técnica — concluído nesta branch

- `pnpm check` deve passar sem erros TypeScript.
- `pnpm test` deve passar para validação, limites, ambos os idiomas, campos opcionais e codificação segura do briefing.
- `pnpm audit --prod` deve não reportar vulnerabilidades conhecidas.
- `pnpm build` deve passar com prerender de home e 404.
- `git diff --check` deve passar e a branch deve permanecer sem artefatos de build versionados.

## Pendências honestas — abertas

- Executar auditoria visual em navegador real nas larguras 320, 360, 390, 768, 1024, 1440 e 1920 px, incluindo teclado, zoom 200%, tema claro/escuro e `prefers-reduced-motion`, quando uma ferramenta de browser estiver disponível.
- Executar axe/Lighthouse e registrar apenas métricas realmente coletadas; não afirmar pontuações sem laboratório.
- Validar periodicamente links externos, demos e releases dos projetos.
- Só implementar atividade GitHub dinâmica se houver necessidade comprovada e backend/cache seguro; não expor tokens no navegador.
- Só implementar envio server-side do orçamento após definir provedor, credenciais privadas, validação duplicada, rate limiting, política de retenção e revisão da CSP.

# Portfolio V2 — entregas e pendências

## Entregas concluídas

- React + Vite + TypeScript preservados, com página única, navegação por âncoras, HTML semântico, foco visível, skip link e layout responsivo.
- Identidade, navegação, serviços, competências, projetos e conteúdo traduzido permanecem centralizados em estruturas reutilizáveis.
- Header com marca, navegação, idioma, tema, CTA de contato, progresso de leitura e menu mobile acessível.
- Hero com fotografia local real, dimensões explícitas, `srcSet`, preload HTML válido e sem splash screen; o conteúdo prerenderizado nasce visível antes da hidratação.
- Português brasileiro e inglês existentes para conteúdo, controles e labels; o idioma do documento é atualizado pela aplicação.
- Pterodroid, ZittoDB e Feira de Matemática mantidos com textos bilíngues, tecnologias, contexto, contribuição, estado, links e imagens locais conforme os dados disponíveis.
- Galerias com imagem em tamanho real, anterior/próxima, contador, teclado, `dialog`, Escape e restauração de foco.
- Serviços com CTA contextual que pré-seleciona o tipo de projeto no orçamento; formulário local valida os campos, foca o primeiro erro, gera `mailto:` e oferece cópia do briefing.
- Conteúdo sobre, certificados e GitHub mantidos verificáveis; não foram inventados clientes, métricas, cargos ou resultados.
- Prerender de home e 404 com metadata, canonical/robots, Open Graph, Twitter Card, JSON-LD, favicon, sitemap e robots.
- Headers de segurança, CSP com hash do JSON-LD inline, cache de assets e `allowedHosts` restrito ao ambiente de desenvolvimento permitido.
- Motion Design com tokens centralizados, `Reveal` baseado em IntersectionObserver, fallback sem a API, `prefers-reduced-motion`, View Transition API com fallback e animações limitadas a `opacity`/`transform`.
- Reveal aplicado efetivamente aos cabeçalhos, projetos, serviços, processo, filtros, cartões de tecnologia, GitHub, Sobre, certificados e contato; o SSR permanece visível e os elementos semânticos dos grids foram preservados.
- Menu mobile com foco inicial, ciclo de foco por Tab/Shift+Tab, Escape, restauração de foco e fechamento ao navegar.
- Componentes Arc locais reutilizados sem adicionar um segundo runtime de animação ou instalar dependências indiscriminadamente.

## Validação técnica reproduzida

- `pnpm check`: passou sem erros TypeScript.
- `pnpm test`: passou com 4 testes e 0 falhas.
- `pnpm audit --prod`: nenhuma vulnerabilidade conhecida reportada.
- `pnpm build`: passou com Vite client, SSR, `dist/index.html` e `dist/404.html`.
- Smoke test do HTML: root prerenderizado, preload de imagem presente, JSON-LD presente e Reveal SSR visível.
- `git diff --check`: passou.
- Screenshots headless gerados em 320, 360, 390, 768, 1024, 1440 e 1920 px em `screenshots/portfolio-v2.1-final/`.
- A branch continua `feat/Redesign`; nenhuma alteração foi commitada, enviada, mesclada ou publicada.

## Limitações honestas e próximas validações

- Lighthouse, axe-core, leitor de tela e métricas LCP/CLS/INP não foram executados nesta rodada; não há pontuações declaradas.
- A matriz de screenshots foi executada; ainda falta uma sessão manual completa de teclado, zoom de 200%, tema claro/escuro e `prefers-reduced-motion` com registro detalhado de cada interação.
- Links externos, demos e releases devem ser verificados periodicamente, pois podem mudar fora do repositório.
- Atividade GitHub dinâmica permanece fora do escopo sem backend/cache seguro e sem expor tokens no navegador.
- Envio server-side do orçamento permanece fora do escopo até existir provedor, credenciais privadas, validação duplicada, rate limiting, retenção e CSP definidos.

# Relatório — Theeussx Portfolio 2.1

## Resumo

A branch `feat/Redesign` recebeu um refinamento incremental, preservando a direção editorial tecnológica sóbria, a fotografia real e os dados existentes. O trabalho foi implementado no repositório local sem reconstrução indiscriminada do layout. Não foram adicionados Framer Motion, integração GitHub dinâmica, endpoint server-side de orçamento ou serviços pagos.

## Implementações

A camada de movimento agora usa `Reveal.tsx` com `IntersectionObserver`, fallback quando a API não existe e suporte a `prefers-reduced-motion`. Os tokens de duração e a curva de easing estão centralizados em `client/src/index.css`. O SSR permanece visível: a classe `motion-ready` só é aplicada após a hidratação e o stagger do hero também só é armado no cliente. Assim, o HTML prerenderizado não depende da hidratação para exibir o conteúdo.

O hero preserva o carregamento imediato da fotografia, com `srcSet`, dimensões explícitas, `fetchPriority` e preload HTML com `imagesrcset`, `imagesizes` e `fetchpriority`. O header ganhou estado refinado durante o scroll e barra de progresso baseada em `transform`. O menu mobile recebe foco inicial, ciclo de foco por Tab/Shift+Tab, Escape, restauração de foco e fechamento ao navegar. A troca de tema usa View Transition API quando disponível, mas mantém fallback imediato e captura falhas da API sem impedir a alteração de tema.

Nesta rodada, o `Reveal` foi aplicado de fato além do hero: cabeçalhos e projetos, linhas de serviço e processo, filtros e cartões de tecnologia, bloco GitHub, narrativa e certificados da seção Sobre e as duas colunas do contato agora entram progressivamente ao alcançar a viewport. O componente aceita elementos semânticos (`article`, `section` e `li`) para não introduzir wrappers que quebrem os grids. O prerender final contém 36 instâncias de Reveal e zero classes `motion-ready`, mantendo o SSR visível.

Também foram aplicados ajustes de semântica no hero com `figure`/`figcaption`, alt descritivo, região de status curta para filtros de tecnologias, navegação incluindo Tecnologias, CSP com hash do JSON-LD e cache de assets públicos. O `vite.config.ts` deixou de aceitar hosts arbitrários e permite apenas hosts locais e `.manus.computer` no preview.

## Segurança e escopo deliberado

Não foram introduzidos tokens, chamadas externas ou novos domínios no bundle. A CSP, os headers de segurança e a política de cache foram preservados/refinados. A atividade GitHub permanece curada e honesta, sem métricas estáticas apresentadas como dados em tempo real. O orçamento continua local via `mailto:` porque não há provedor, credenciais privadas, rate limiting ou política de retenção autorizados para um endpoint server-side.

## Evidências reproduzidas

| Verificação | Resultado |
|---|---|
| `pnpm check` | Passou, TypeScript sem erros |
| `pnpm test` | Passou, 4 testes e 0 falhas |
| `pnpm audit --prod` | Nenhuma vulnerabilidade conhecida reportada |
| `pnpm build` | Passou, client, SSR e prerender |
| Smoke test SSR | Passou: root prerenderizado, preload, JSON-LD e Reveal visível |
| `git diff --check` | Passou |
| Screenshots headless | Gerados em 320, 360, 390, 768, 1024, 1440 e 1920 px |
| Estado Git | Branch `feat/Redesign`, sem commit, push, merge ou publicação |

A build final produziu CSS de aproximadamente 52,91 kB (11,79 kB gzip) e JavaScript inicial de aproximadamente 345,84 kB (114,50 kB gzip). Esses valores são tamanhos de artefato, não pontuações Lighthouse.

## Limitações

Lighthouse, axe-core, leitor de tela e métricas LCP/CLS/INP não foram executados; portanto, nenhuma pontuação foi inventada. As larguras solicitadas foram cobertas por screenshots headless, mas ainda não foi registrada uma matriz manual completa de teclado, zoom de 200%, tema claro/escuro e `prefers-reduced-motion`. Links externos, demos e releases também exigem verificação periódica porque podem mudar fora do repositório.

## Arquivos principais alterados

Entre os arquivos principais estão `client/index.html`, `client/src/components/Hero.tsx`, `client/src/components/SiteHeader.tsx`, `client/src/components/Technologies.tsx`, `client/src/components/motion/Reveal.tsx`, `client/src/hooks/useReducedMotion.ts`, `client/src/contexts/ThemeContext.tsx`, `client/src/index.css`, `client/src/content/portfolio.ts`, `vite.config.ts`, `vercel.json`, `TODO.md` e este relatório. Nenhuma alteração foi publicada ou enviada ao remoto.

## Evidência visual

As capturas finais estão em [`screenshots/portfolio-v2.1-final/`](/home/ubuntu/screenshots/portfolio-v2.1-final/). Uma captura representativa de desktop está em [`pt-1440.png`](/home/ubuntu/screenshots/portfolio-v2.1-final/pt-1440.png) e uma de mobile em [`pt-390.png`](/home/ubuntu/screenshots/portfolio-v2.1-final/pt-390.png).

# Portfolio V2 — plano de implementação

## Objetivo

Transformar o portfólio de Mateus Henrique / Theeussx em uma página única profissional para clientes, recrutadores e colaboradores, preservando projetos, certificados, contatos, internacionalização e compatibilidade com Vercel.

## Estado reconhecido

A branch `feat/Redesign` já contém a reconstrução principal em React + Vite + TypeScript: header, hero editorial, projetos com mídia local, serviços, competências, GitHub curado, sobre, certificados, orçamento por `mailto`/cópia, temas persistentes, PT-BR/EN, SEO básico, prerender e headers de segurança. O trabalho restante deve refinar e validar, não recomeçar a aplicação.

## Direção de design

**Movimentos avaliados:** editorial tecnológico sóbrio (0,06); produto SaaS neon (0,04); portfólio brutalista (0,03). A escolha é **editorial tecnológico sóbrio**.

**Princípios:** clareza antes de ornamentação; evidência real antes de promessa; assimetria controlada para criar ritmo; superfícies e bordas discretas para orientar a leitura.

**Filosofia de cor:** o fundo escuro quase preto dá foco ao conteúdo e à fotografia. O azul `#6295EB` é reservado para ação, foco e orientação, em vez de ser usado como glow decorativo. O tema claro usa branco suave e neutros frios para manter contraste sem parecer uma inversão automática.

**Layout:** composição assimétrica no hero e no projeto principal; listas lineares para serviços e competências; colunas editoriais para sobre e contato; cards repetidos ficam restritos a situações em que a estrutura realmente ajuda a comparação.

**Elementos de assinatura:** wordmark `Theeussx.`; eyebrow monoespaçado para contexto técnico; linhas finas e marcadores de estado; fotografia vertical e capturas reais como evidência.

**Interação:** ações devem revelar intenção e estado. CTAs levam a âncoras compreensíveis, serviços pré-selecionam o briefing, galerias preservam foco e controles não dependem apenas de hover.

**Animação:** somente transform/opacity e transições curtas; sem scroll hijacking, cursor customizado, glow ou animações infinitas. `prefers-reduced-motion` remove movimento e mantém conteúdo visível.

**Tipografia:** Geist local como família única; escala fluida e títulos compactos para criar hierarquia editorial; monoespaçada somente em rótulos técnicos.

**Essência da marca:** desenvolvimento web e automações para transformar necessidades concretas em interfaces e ferramentas utilizáveis. Personalidade: cuidadosa, curiosa, direta.

**Tom de voz:** concreto, humano e sem métricas inventadas. Exemplos: “Do código à interface.” e “Conte sobre seu projeto.”

**Wordmark:** nome textual `Theeussx.` com ponto final como assinatura de produto; o ponto participa do ritmo da marca e não é substituído por ícone decorativo.

**Cor proprietária:** azul `#6295EB`, aplicado com parcimônia a ações, foco e contexto.

## Arquitetura

- `client/src/content/`: identidade, navegação e conteúdo traduzido tipado.
- `client/src/components/`: seções da página e componentes adaptados da Arc.
- `client/src/contexts/`: persistência de idioma e tema.
- `client/src/hooks/`: estado derivado de navegação.
- `client/src/lib/`: validação e geração do briefing.
- `client/public/`: fontes, imagens locais, SEO estático, tema inicial e manifesto de rotas.
- `scripts/prerender.mjs`: geração de HTML inicial e 404.
- `tests/`: testes da lógica de orçamento.

## Arc Library

A documentação oficial confirma que a Arc funciona em React 19 + Vite, usa CSS Modules/tokens sem runtime obrigatório, instala itens via registry shadcn e depende de `data-theme` no `html`. O projeto já usa o registry oficial, a foundation local e adaptações de `Button`, `ThemeSwitch` e `CopyButton`. Essa escolha preserva os tokens e evita adicionar Motion ou componentes que não contribuam diretamente para a página.

Fontes consultadas:

- https://uiarc.dev/docs/installation
- https://uiarc.dev/docs/ai
- https://github.com/kuratlielia/arc-library

## Decisões de escopo

A atividade do GitHub permanece como curadoria de repositórios e link para a atividade pública, sem métricas estáticas ou API no caminho crítico. O orçamento permanece como fallback honesto por `mailto:` e cópia enquanto não houver provedor/endpoint autorizado; a interface não simula envio. Framer Motion e Wouter não serão adicionados sem necessidade técnica, pois a página atual funciona com CSS, HTML nativo e Vite.

## Entrega

Manter a branch `feat/Redesign`; não publicar em produção sem autorização. Validar typecheck, testes, auditoria de dependências, build/prerender, manifest de rotas, metadados, temas, idioma, formulário, galerias e estados de movimento reduzido conforme as ferramentas disponíveis.

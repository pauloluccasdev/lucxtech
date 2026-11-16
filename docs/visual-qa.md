# Lucx 2.0 — QA visual

Data da validação final: 16 de novembro de 2026.

## Ambiente

- Build de produção do Next.js 15.5.29, servido localmente.
- Chromium headless via Playwright 1.65.1.
- Viewports: 1920 × 1080, 1440 × 900, 768 × 1024, 390 × 844 e 375 × 667.
- Comparação orientada pelas capturas e medições registradas em `reference-audit.md`.

## Ciclo 1 — estrutura

Validado:

- Ordem: header, hero, apresentação, serviços, projetos, processo, FAQ, CTA e footer.
- Conteúdo real: Diazen identificado como representação com capturas em preparação; Liora Closet com imagem real e status de refinamento para testes.
- Ausência de depoimentos, métricas e credenciais fictícias.
- Serviços deixam de ser quatro blocos idênticos e recebem representações específicas.
- Processo contém as cinco etapas aprovadas pela Lucx.

Correções realizadas:

- Remoção das seções antigas que duplicavam a narrativa.
- Inclusão de apresentação, FAQ e projeto Diazen.
- Reorganização do portfólio antes do processo para seguir o ritmo da referência.

## Ciclo 2 — visual e responsividade

Validado nos cinco viewports:

- Largura do documento igual à largura da viewport; nenhum scroll horizontal acidental.
- Header em cápsula, hierarquia tipográfica, respiro e cartões em proporções consistentes.
- Desktop amplo preserva limite de 1200 px; tablet usa composições de duas colunas onde há espaço; mobile reorganiza tudo em fluxo vertical.
- CTA, projetos, cards, FAQ e footer mantêm legibilidade em 375 px.
- Links e controles essenciais em touch têm área de interação adequada; botões têm pelo menos 48 px.
- Contraste alto nos painéis escuros e verde reservado a detalhes de estado e marca.

Correções realizadas:

- Ajuste de alvos de toque no wordmark e no footer mobile.
- Link “Pular para o conteúdo” escondido fora da viewport até receber foco.
- Ajuste da grade do processo para 5, 3+2 e 1 coluna.
- Tratamentos próprios para o trilho horizontal do FAQ.

## Ciclo 3 — movimento e interação

Validado:

- Sequência de entrada do hero com stagger de 80 ms.
- Revelação por interseção sem listeners de scroll e sem esconder conteúdo na renderização sem JavaScript.
- Menu mobile: foco inicial no botão de fechar, contenção de foco, fechamento por `Escape`, retorno ao acionador e restauração do scroll.
- FAQ: `aria-expanded`, `aria-controls`, expansão/recolhimento e navegação horizontal.
- `prefers-reduced-motion: reduce`: zero elementos ocultos, zero animações ativas e rolagem suave desativada.
- Zero erros de console ou exceções de página durante a matriz de Playwright.

## Build, segurança e peso de cliente

- `npm run build`: aprovado.
- Rota `/`: estática, 8,11 kB da página e 111 kB de JavaScript na primeira carga conforme relatório do Next.
- `npm audit`: 0 vulnerabilidades após atualização para Next.js 15.5.29 e atualização controlada de dependências transitivas.
- Não foi adicionada biblioteca de animação; o sistema usa CSS e `IntersectionObserver`.

## Diferenças conscientes em relação à referência

- A seção de depoimentos não foi criada porque a Lucx não forneceu depoimentos reais.
- A apresentação usa uma composição abstrata da marca; não foi criada fotografia artificial de fundador.
- Não há páginas de case nem números de resultado sem material aprovado.
- A experiência mantém a hierarquia, o ritmo, o tipo de interação e a qualidade de execução da referência, mas preserva conteúdo e identidade próprios da Lucx.

## Capturas finais

- `qa-captures/desktop-wide.png` — 1920 × 1080
- `qa-captures/desktop.png` — 1440 × 900
- `qa-captures/tablet.png` — 768 × 1024
- `qa-captures/mobile.png` — 390 × 844
- `qa-captures/mobile-compact.png` — 375 × 667

As capturas foram feitas após uma rolagem progressiva da página, para avaliar também os estados finais das animações de entrada.

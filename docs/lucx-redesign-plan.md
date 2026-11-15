# Plano de refatoração — Lucx Tech 2.0

Este plano parte da auditoria em [`reference-audit.md`](./reference-audit.md). Nenhuma decisão abaixo autoriza a criação de conteúdo, credenciais, clientes, métricas ou imagens humanas fictícias.

## Objetivo

Transformar a homepage em uma experiência editorial compacta e refinada, usando o jyehq como benchmark de execução e preservando a identidade `lucx.`:

- preto `#090909`;
- branco `#ffffff`;
- off-white `#f4f4f2`;
- cinza `#a3a3a3`;
- verde-esmeralda `#10b981`.

## Decisões de arquitetura

- manter Next.js App Router, React e TypeScript;
- manter uma única homepage, sem criar rotas vazias;
- dividir o CSS global por camadas/tokens, sem migrar para CSS-in-JS;
- usar `next/font` no lugar de `@import` remoto para reduzir bloqueio de renderização;
- começar movimento com CSS + IntersectionObserver;
- não instalar GSAP: a referência não demonstrou scroll scrub ou parallax que justifique o custo;
- avaliar Motion somente se o carrossel/FAQ e menu exigirem coordenação que CSS não resolva com clareza;
- manter os assets reais da Liora e os canais atuais;
- substituir o logotipo horizontal no header pela marca tipográfica `lucx.` em texto, conforme briefing, mantendo o monograma como favicon.

## Arquitetura narrativa proposta

### 1. Header

- marca `lucx.` à esquerda;
- navegação desktop: Início, Serviços, Projetos, Sobre, Contato;
- CTA “Vamos conversar” quando houver largura;
- cápsula sticky com fundo off-white translúcido e blur;
- menu mobile acessível em painel sobreposto;
- foco visível, Escape para fechar, bloqueio de scroll e retorno de foco ao gatilho.

### 2. Hero

- eyebrow: “DESENVOLVIMENTO DE SOFTWARE SOB MEDIDA”;
- headline: “Ideias que viram soluções.”;
- texto aprovado no briefing;
- CTAs: “Conheça os projetos” e “Vamos conversar”;
- composição clara, central ou levemente assimétrica, sem neon/gradiente;
- entrada escalonada equivalente à referência, respeitando reduced motion.

### 3. Apresentação da Lucx

- card preto de alto contraste;
- texto “Software feito por quem entende de construção.”;
- fotografia real somente quando fornecida;
- estado inicial sem fotografia: composição tipográfica e detalhe visual abstrato baseado em interface real, explicitamente não humano;
- nenhum cargo, tempo de experiência ou certificação inventado.

### 4. Serviços

Quatro cards visuais reutilizáveis, com proporções e mini-composições distintas:

1. **Sistemas sob medida:** recorte autorizado da interface Liora;
2. **Aplicativos:** slot de asset para Diazen; até o fornecimento, wireframe neutro identificado como representação;
3. **Integrações:** diagrama construído em HTML/CSS, sem ícone genérico;
4. **Automações:** sequência visual de estados/tarefas em HTML/CSS.

Cada card terá foco de teclado, hover de mídia e fallback de toque. A interação não ocultará conteúdo essencial.

### 5. Projetos selecionados

- componente `ProjectCard` com mídia, nome, descrição curta, status e link opcional;
- **Diazen:** “Em testes”; só entra com capturas reais fornecidas;
- **Liora Closet:** “Em refinamento para testes”; usar o showcase aprovado;
- sem páginas de detalhe falsas; se não houver rota real, o card não imitará um link;
- grid de duas colunas no desktop e uma no mobile.

### 6. Depoimentos

- omitida na primeira versão por ausência de conteúdo aprovado;
- o espaço narrativo será absorvido por projetos e processo, sem placeholder;
- componente futuro só será criado quando houver depoimento, nome e autorização verificáveis.

### 7. Processo

- card preto de grande escala;
- cinco etapas reais: Entender, Planejar, Construir, Entregar, Evoluir;
- desktop: primeiro teste com trilho de cinco colunas e largura responsiva; alternativa 3+2 caso a legibilidade caia abaixo de 18 rem por etapa;
- tablet/mobile: lista vertical com linha de progresso;
- reveal em stagger, sem acordeão arbitrário.

### 8. FAQ

- cinco perguntas aprovadas no briefing;
- cards horizontais com uma pergunta por item e indicação parcial do próximo;
- botão de expansão com `aria-expanded`, `aria-controls` e resposta no próprio card;
- setas de navegação e suporte a teclado/toque;
- mobile com scroll snap; desktop com controles explícitos;
- respostas objetivas, sem preço ou prazo inventado.

### 9. CTA

- headline “Vamos construir algo?”;
- texto aprovado;
- CTA “Fale com a Lucx” para o WhatsApp atual (`https://w.app/fiawrt`);
- superfície clara isolada do fundo, seguindo a hierarquia da referência.

### 10. Footer

- `lucx.`;
- navegação por âncoras;
- e-mail real `contato.pauloraimundo@gmail.com`;
- WhatsApp real;
- copyright;
- redes sociais somente quando URLs reais forem fornecidas.

## Sistema visual proposto

### Layout

- container principal: `min(1200px, calc(100vw - 32px))`;
- margem desktop de 120 px em 1440 px e 16 px no mobile;
- grid de 12 colunas no desktop, 8 no tablet e 4 no mobile;
- seções entre 96 e 160 px no desktop; 72 a 104 px no mobile;
- superfícies grandes com raios de 24–36 px;
- cards menores com raios de 16–24 px.

### Tipografia

- testar `Inter` + `Inter Tight` ou `Manrope` como alternativas open-source;
- escolha final será feita por comparação visual, não por popularidade;
- hero desktop entre 72 e 96 px; mobile entre 48 e 60 px;
- títulos de seção entre 48 e 64 px; mobile entre 34 e 44 px;
- corpo entre 16 e 18 px;
- eyebrows entre 10 e 12 px, tracking de 0.12–0.16 em.

### Cor

- página predominantemente off-white;
- preto concentrado em apresentação, processo e botões;
- verde apenas em status, foco, pequenos indicadores e estados ativos;
- contraste mínimo WCAG AA para texto normal;
- evitar blocos inteiros em verde e qualquer glow decorativo.

## Plano técnico por sprint

### Sprint 1 — Fundação visual

1. Criar tokens de cor, tipografia, espaçamento, raios, sombras, z-index e movimento.
2. Migrar fontes para `next/font`.
3. Criar `SiteHeader`, `MobileMenu`, `Container`, `SectionHeading`, `Button` e `Footer`.
4. Implementar skip link, foco visível e rolagem suave com fallback reduced motion.
5. Corrigir overflow horizontal atual.
6. Validar header e footer nos cinco viewports.

**Commit sugerido:** `feat: cria fundacao visual da lucx 2.0`

### Sprint 2 — Homepage

1. Hero e apresentação.
2. Cards visuais de serviços.
3. Grid reutilizável de projetos.
4. Processo em cinco etapas.
5. FAQ acessível.
6. CTA final.
7. Metadados, Open Graph e schema básico da organização, somente com dados verdadeiros.

O sprint pode ser dividido em commits por grupo para facilitar revisão.

### Sprint 3 — Motion

1. Criar primitive `Reveal` com IntersectionObserver.
2. Sequência de entrada do hero.
3. Stagger de cards de serviços/projetos/processo.
4. Hover de mídia e setas.
5. Transições do menu e FAQ.
6. Criar `docs/motion-spec.md` com valores finais medidos.
7. Validar `prefers-reduced-motion` e desmontagem de observers.

### Sprint 4 — Responsividade

1. Ajustar quebras editoriais por breakpoint.
2. Refinar ordem e proporção de cards.
3. Validar menu, FAQ e áreas de toque.
4. Testar ausência de overflow em 375 e 390 px.
5. Reduzir custo visual e movimento no mobile.

### Sprint 5 — QA visual

Três ciclos obrigatórios:

1. **Estrutura:** ordem, conteúdo, semântica e navegação.
2. **Visual:** tipografia, espaçamento, alinhamento, proporções e contraste.
3. **Movimento:** load, reveal, hover, menu, FAQ e reduced motion.

Ao final, criar `docs/visual-qa.md` com screenshots nos cinco viewports, divergências aceitas, erros de console, overflow e resultados de build.

## Estratégia de motion inicial

Valores de partida, sujeitos ao ciclo visual:

| Elemento | Inicial | Final | Duração | Delay | Easing |
| --- | --- | --- | --- | --- | --- |
| Hero eyebrow | opacity 0; y 12 | opacity 1; y 0 | 700 ms | 0 | `cubic-bezier(.16,1,.3,1)` |
| Hero headline | opacity 0; y 24 | opacity 1; y 0 | 850 ms | 80 ms | mesmo |
| Hero texto | opacity 0; y 16 | opacity 1; y 0 | 750 ms | 160 ms | mesmo |
| Hero ações | opacity 0; y 12 | opacity 1; y 0 | 700 ms | 240 ms | mesmo |
| Seção | opacity 0; y 32 | opacity 1; y 0 | 800 ms | 0 | mesmo |
| Cards em grupo | opacity 0; y 24 | opacity 1; y 0 | 700–900 ms | 70–90 ms entre itens | mesmo |
| Imagem no hover | scale 1 | scale 1.025 | 350 ms | 0 | `ease-out` |
| Botão no hover | y 0 | y -1 px | 200 ms | 0 | `ease-out` |

Com `prefers-reduced-motion: reduce`, todos os elementos começam no estado final; não haverá deslocamento, stagger, smooth scroll ou animação de expansão.

## Dependências e riscos

### Materiais necessários

- fotografia real do fundador, se a seção precisar seguir a referência com imagem humana;
- screenshots reais do Diazen;
- confirmação do status textual da Liora (“em refinamento para testes” substitui o status atual “em desenvolvimento”);
- URLs reais de redes sociais, caso devam aparecer;
- autorização de uso público dos assets de ambos os projetos.

### Riscos

- **Fidelidade sem assets:** serviços e projeto Diazen perderão força visual sem imagens reais.
- **Excesso de semelhança:** copiar a composição literalmente comprometeria identidade e propriedade; serão reproduzidos ritmo, proporção e comportamento, não assets ou layouts pixel a pixel.
- **Comprimento:** cinco etapas e FAQ podem alongar a página; o plano usa cards compactos e carrossel para manter o ritmo próximo à referência.
- **Fontes:** Inter Display pode não estar livre no mesmo arquivo usado pela referência; será adotada alternativa open-source após comparação.
- **Motion:** adicionar GSAP prematuramente aumentaria bundle e complexidade sem evidência de necessidade.

## Critérios de aceite por implementação

- build e typecheck sem erro;
- zero erros relevantes de console;
- zero overflow horizontal nos cinco viewports;
- navegação funcional por mouse, teclado e toque;
- menu com gestão de foco;
- FAQ com ARIA correto;
- conteúdo visível sem JavaScript de animação e com reduced motion;
- imagens com dimensões e `sizes` corretos;
- nenhuma afirmação, cliente, resultado ou credencial fictícia;
- comparação visual documentada após cada ciclo.

## Aprovação necessária antes da Sprint 1

1. Confirmar que a direção 2.0 substitui o posicionamento anterior centrado em simplificação de processos.
2. Aprovar a omissão temporária de depoimentos.
3. Escolher o tratamento da apresentação enquanto não houver foto real:
   - card tipográfico sem pessoa; ou
   - aguardar a fotografia antes de concluir a seção.
4. Fornecer assets do Diazen ou aprovar um slot temporário claramente identificado.

Após essas decisões, a Sprint 1 pode começar sem reconstrução de stack e com commits pequenos por etapa.

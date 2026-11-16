# Lucx 2.0 — QA da rodada de refinamento 2

Data: 16 de novembro de 2026.

## Resultado

A rodada foi validada no build de produção com Chromium/Playwright. A referência e a Lucx foram comparadas nas mesmas dimensões antes da implementação. As diferenças e critérios definidos previamente estão em `refinement-round-2-audit.md`.

## Validação por etapa

### Hero

- Altura reduzida de 820 para 700 px no desktop e de 720 para 650 px no mobile.
- Plano tipográfico responde ao ponteiro com deslocamento máximo aproximado de 5 px; touch não aciona o comportamento.
- Zero overflow em 1440 × 900 e 390 × 844.
- CTA de projetos permanece em `#projetos`; todos os CTAs de contato preservam `https://w.app/fiawrt`.

### Painel institucional

- Órbitas ficam em `running` somente com o painel na viewport e mudam para `paused` fora dela.
- Movimento de ponteiro medido abaixo de 3 px no teste.
- Com movimento reduzido, `animation-name: none` nos dois anéis e transformação neutra no campo visual.
- Com JavaScript desativado, logo, texto e anéis continuam visíveis.

### Serviços

- Hover medido no primeiro card: `translateY(-6px)`, mídia em escala `1.025`, título em `translateX(5px)` e sombra `0 22px 46px rgba(9,9,9,.1)`.
- O estado é protegido por `(hover:hover) and (pointer:fine)`; em touch, transformação e sombra permanecem neutras.
- Os quatro cards usam a mesma duração e easing, com movimentos internos específicos.

### Projetos

- Liora Closet mantém o asset real aprovado, sem substituição ou mockup novo.
- Diazen mantém o aviso “Representação visual · Capturas em preparação”.
- Status reais aparecem diretamente na mídia.
- Grade desktop 5/7; mobile em coluna única.
- Altura final da página caiu de 6630 para 6469 px em 1440 × 900 e de 8258 para 8181 px em 390 × 844.

## Matriz final

| Viewport | Largura do documento | Altura final | Overflow horizontal | Erros de console | Botões abaixo de 44 px |
| --- | ---: | ---: | --- | ---: | ---: |
| 1920 × 1080 | 1920 | 6474 | não | 0 | 0 |
| 1440 × 900 | 1440 | 6469 | não | 0 | 0 |
| 768 × 1024 | 768 | 6823 | não | 0 | 0 |
| 390 × 844 | 390 | 8181 | não | 0 | 0 |
| 375 × 667 | 375 | 8145 | não | 0 | 0 |

## Interação e acessibilidade

- Menu mobile abre com foco em “Fechar menu”, bloqueia o scroll, fecha com `Escape`, devolve o foco a “Abrir menu” e restaura o scroll.
- FAQ alterna `aria-expanded` e exibe a resposta correta.
- Âncoras usam margem para o header fixo: no desktop, a seção de serviços termina em `y=112` com o header em `y=88`.
- `prefers-reduced-motion`: 0 animações ativas, 0 revelações ocultas, rolagem suave desativada.
- Sem JavaScript: 0 revelações ocultas; serviços e projetos continuam presentes.
- Nenhuma interação essencial depende de hover.

## Capturas

As capturas finais estão em `docs/refinement-final-captures/` para:

- 1920 × 1080
- 1440 × 900
- 768 × 1024
- 390 × 844
- 375 × 667

As capturas por etapa e da referência estão em `docs/refinement-captures/`.

# Lucx 2.0 — especificação de movimento

## Princípios

O movimento reforça hierarquia e resposta à interação. Ele não compete com o conteúdo. A base é `transform` e `opacity`, com a curva `cubic-bezier(.16, 1, .3, 1)` observada na referência. Não foram adicionadas bibliotecas de animação: CSS e `IntersectionObserver` cobrem o comportamento necessário com menor custo de JavaScript.

## Inventário

| Elemento | Gatilho | Estado inicial | Estado final | Duração / delay | Reverso |
| --- | --- | --- | --- | --- | --- |
| Hero: eyebrow, título, texto e ações | carregamento | opacidade 0, `translateY(24px)` | opacidade 1, posição original | 850 ms; stagger de 80 ms | não |
| Seções e cards | entrada no viewport (14%, margem inferior de 7%) | opacidade 0, `translateY(30px)` | opacidade 1, posição original | 800 ms; delay configurável de 0–180 ms | não; permanece visível |
| Botões | hover/foco | posição original | `translateY(-1px)` e seta a 45° | 200–250 ms | sim |
| Links do header | hover | sublinhado recolhido à direita | sublinhado expandido da esquerda | 300 ms | sim |
| Cards de serviço/projeto | hover | escala 1 | escala 1,025 | 450–600 ms | sim |
| Menu mobile | clique | painel fora da tela, opacidade 0 | painel visível, opacidade 1 | 550 ms | sim |
| Fundo do menu mobile | clique | opacidade 0 | opacidade 1 | 350 ms | sim |
| FAQ | clique | resposta oculta | cartão reduz área da pergunta e exibe resposta | 400 ms | sim |
| Trilho de FAQ | setas / gesto | posição atual | próximo grupo de cartões | rolagem suave nativa | sim |
| Órbitas da apresentação | contínuo | 0° | 360° | 13 s e 18 s, linear | contínuo |

## Acessibilidade e dispositivos

- `prefers-reduced-motion: reduce` remove animações, transições e rolagem suave; conteúdo e controles permanecem visíveis.
- O conteúdo renderizado no servidor é visível sem JavaScript. A classe de espera da revelação só é ativada no cliente quando o observador está disponível.
- Nenhuma informação depende exclusivamente de hover.
- O menu móvel prende o foco, fecha com `Escape`, devolve o foco ao acionador e bloqueia o scroll do documento enquanto aberto.
- As respostas do FAQ expõem `aria-expanded` e `aria-controls`.
- Em touch, os cartões preservam o estado estático e os botões mantêm áreas de toque de pelo menos 48 px.

## Performance

- Não há listener global de scroll.
- Cada revelação desconecta o observador assim que entra no viewport.
- Imagens e elementos visuais usam escala sem alterar layout.
- As animações contínuas são limitadas a dois círculos simples e são removidas quando há preferência por movimento reduzido.

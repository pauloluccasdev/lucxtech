# Lucx 2.0 — auditoria de refinamento, rodada 2

Data da inspeção: 16 de novembro de 2026.

Referência principal inspecionada em navegador: `https://jyehq.com/`  
Implementação comparada: `https://lucxtech.vercel.app/` e build local de produção.

## Escopo e método

A referência e a Lucx foram abertas no Chromium via Playwright em 1440 × 900 e 390 × 844. Foram observados carregamento, rolagem progressiva, estados de hover/foco, header, cards, FAQ e comportamento com movimento reduzido. As capturas desta rodada estão em `docs/refinement-captures/`.

A referência mudou desde a primeira auditoria do projeto. Esta rodada considera o estado observado em 16/11/2026, sem presumir comportamentos de versões anteriores.

## Matriz de diferenças

### 1. Hero

- **Comportamento da referência:** composição compacta e centralizada; marca/título, frase de valor e ações formam um único conjunto. A área visual seguinte já aparece no primeiro scroll, reduzindo a sensação de tela vazia. Entrada em 850 ms com deslocamento e opacidade discretos.
- **Comportamento atual da Lucx:** título tem ótimo peso, mas ocupa duas linhas muito altas dentro de um hero de 820 px. Há bastante vazio entre header, conteúdo e bloco seguinte; o indicador “Role para conhecer” fica isolado no canto.
- **Ajuste proposto:** reduzir a altura útil, acrescentar profundidade tipográfica e um campo visual ambiental muito sutil atrás do conteúdo; integrar o indicador de scroll à composição e dar uma pequena resposta de ponteiro apenas em dispositivos precisos.
- **Impacto esperado:** maior impacto inicial, primeira dobra mais resolvida e transição mais rápida para o conteúdo institucional.
- **Critério de validação:** em 1440 × 900, hero e início do bloco institucional devem ser percebidos sem parecer comprimidos; em 390 × 844, título, texto e dois CTAs devem caber sem colisão e sem scroll horizontal; zero conteúdo dependente do efeito de ponteiro.

### 2. Bloco institucional escuro

- **Comportamento da referência:** o painel escuro tem uma massa visual clara, com imagem protagonista, texto curto e contraste forte. O movimento é contido e subordinado ao scroll/entrada; a composição não depende de uma animação contínua chamativa.
- **Comportamento atual da Lucx:** o painel tem boa estrutura, mas as duas órbitas giram para sempre em velocidades diferentes. O logo permanece estático e as órbitas parecem um elemento decorativo separado do restante do painel.
- **Ajuste proposto:** transformar a órbita em um sistema de entrada e interação: logo com leve escala na revelação, anéis com rotação lenta apenas quando o painel está visível, pontos com profundidade e deslocamento sutil por ponteiro. Pausar fora da viewport e em movimento reduzido.
- **Impacto esperado:** elemento mais intencional, melhor ligação entre marca e conceito de construção, menor consumo fora da tela.
- **Critério de validação:** animação pausa fora da viewport, não produz layout shift, usa somente `transform`/`opacity`, permanece estática com `prefers-reduced-motion` e mantém 60 fps em navegação comum.

### 3. Serviços

- **Comportamento da referência:** cards menores e densos; hover coordena borda/sombra, área visual, seta e conteúdo. Cada representação responde de forma coerente, embora mantenha sua identidade.
- **Comportamento atual da Lucx:** as representações são distintas e adequadas, mas o feedback principal é apenas `scale(1.025)` na ilustração. O corpo do card e o número quase não participam da interação; não há estado equivalente no foco por teclado.
- **Ajuste proposto:** unificar a interação do card com elevação mínima, borda mais escura, faixa visual levemente ampliada e microanimações específicas internas; aplicar o mesmo estado em `:focus-within` e respeitar dispositivos sem hover.
- **Impacto esperado:** cards mais vivos e consistentes sem transformar a seção em uma coleção de efeitos.
- **Critério de validação:** todos os quatro cards respondem com a mesma duração/easing; nenhum elemento ultrapassa o recorte; interação funciona com teclado quando houver link; em touch o layout permanece estável.

### 4. Projetos Diazen e Liora Closet

- **Comportamento da referência:** projetos usam imagens como elemento dominante, com proporção generosa e texto secundário curto. O conjunto é facilmente escaneável e o hover privilegia a imagem.
- **Comportamento atual da Lucx:** os projetos têm boa largura, mas a seção é visualmente semelhante aos serviços. A área de metadados divide atenção em duas colunas e não existe uma camada de status diretamente sobre a imagem. Diazen ainda usa uma representação identificada como tal; Liora usa a imagem real aprovada.
- **Ajuste proposto:** aumentar a área de mídia, introduzir status sobreposto e dar aos projetos uma composição editorial alternada; manter a imagem real da Liora e a identificação explícita da representação do Diazen. Não criar mockups adicionais.
- **Impacto esperado:** o portfólio passa a ser o ponto visual central da página e deixa mais claro que são produtos reais em estágios reais.
- **Critério de validação:** Liora continua usando exclusivamente o asset aprovado; Diazen continua marcado como representação/capturas em preparação; status legível, imagens sem distorção, mobile em coluna única e sem corte de informação essencial.

### 5. Ritmo entre seções

- **Comportamento da referência:** alternância entre áreas compactas e painéis de alto contraste; espaçamentos mudam conforme o conteúdo, evitando uma sequência uniforme de blocos com o mesmo intervalo.
- **Comportamento atual da Lucx:** várias seções usam 132 px no desktop e 88 px no mobile. O sistema é consistente, mas deixa serviços e projetos com cadência semelhante e aumenta a página para 6630/8258 px.
- **Ajuste proposto:** criar transições específicas: serviços terminam com menos vazio, projetos ganham entrada de fundo e maior presença, processo preserva pausa ampla. Ajustar revelações para grupos relacionados, sem parallax pesado.
- **Impacto esperado:** navegação mais curta, melhor alternância de tensão/descanso e conexão mais clara entre capacidade, prova e processo.
- **Critério de validação:** redução mensurável da altura total sem perda de legibilidade; headings não colidem com o header em âncoras; revelações não deixam conteúdo invisível em capturas, sem JavaScript ou com movimento reduzido.

### 6. Mobile e interações

- **Comportamento da referência:** mobile reorganiza composições, não apenas empilha; cards de serviço viram grade 2 × 3, projetos 2 × 2 e painel institucional muda sua ordem interna. O header móvel e o FAQ preservam áreas de toque amplas.
- **Comportamento atual da Lucx:** serviços e projetos viram uma coluna abaixo de 720 px, gerando uma página longa. Menu, FAQ e acessibilidade básica já estão corretos.
- **Ajuste proposto:** preservar uma coluna para serviços por legibilidade das interfaces, mas reduzir alturas e espaços; melhorar proporções dos projetos e a ordem visual institucional; testar 768 × 1024, 390 × 844 e 375 × 667, teclado, toque, `Escape`, foco e movimento reduzido.
- **Impacto esperado:** página mobile mais fluida sem sacrificar detalhes das interfaces reais.
- **Critério de validação:** zero overflow horizontal, alvos essenciais ≥ 44 px, menu prende/devolve foco, FAQ expande corretamente, zero erros de console e conteúdo completo em 375 px.

## Ordem de implementação

1. Hero e transição para o institucional.
2. Movimento do painel institucional.
3. Sistema interativo dos serviços.
4. Protagonismo dos projetos e ritmo entre seções.
5. Revisão mobile, movimento reduzido e QA final em cinco viewports.

Cada etapa terá captura antes/depois e teste de navegador antes do próximo commit.

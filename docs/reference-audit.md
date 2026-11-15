# Auditoria da referência — Lucx Tech 2.0

Data da inspeção: 15 de novembro de 2026  
Referência: [jyehq.com](https://jyehq.com/)  
Site comparado: [lucxtech.vercel.app](https://lucxtech.vercel.app/)

## Método e evidências

A referência e o site atual foram inspecionados em Chromium real, via Playwright, nos viewports 1440×900, 1920×1080, 768×1024, 390×844 e 375×667. A inspeção incluiu:

- capturas completas e capturas após rolagem progressiva;
- medidas computadas de layout e tipografia;
- observação do header em quatro pontos da página;
- abertura do menu mobile;
- hover em elementos interativos;
- abertura de item do FAQ;
- inventário das animações da Web Animations API;
- repetição com `prefers-reduced-motion: reduce`;
- verificação de overflow horizontal e erros de console.

Capturas relevantes estão em [`docs/reference-captures`](./reference-captures/). A referência usa revelações por viewport; por isso, uma captura full-page feita sem rolagem contém áreas vazias. As capturas por seção foram feitas depois de levar cada área ao viewport.

### Limitações

- O site de referência é publicado com Framer e possui DOM/classes gerados. A auditoria mede o resultado renderizado; ela não tenta reconstruir ou copiar seu código proprietário.
- O easing de entrada foi obtido da Web Animations API. Algumas animações internas do Framer aparecem como timelines lineares compostas; nesses casos, o comportamento visual observado tem prioridade sobre a representação interna.
- Não houve inspeção de rotas internas da referência porque o escopo solicitado é a homepage.
- Não há fotografia real do fundador da Lucx nem assets do Diazen no repositório atual. Esses pontos ficam condicionados ao fornecimento de material real.

## Estrutura e stack atuais da Lucx

### Tecnologia

- Next.js 15.5, App Router;
- React 19;
- TypeScript 5;
- CSS global em um único arquivo de 886 linhas;
- nenhuma biblioteca de animação, testes ou componentes;
- Google Fonts carregadas por `@import` (`Space Grotesk`, `Inter`, `JetBrains Mono`);
- uma única rota pública: `/`;
- favicon servido por `app/icon.png`;
- deploy conectado à Vercel e ao GitHub.

### Componentes atuais

| Componente | Função atual |
| --- | --- |
| `HeroGlow` | navegação, hero escuro, CTAs e halo que acompanha o mouse |
| `Problem` | identificação de rotinas manuais por notas visuais |
| `Reflection` | pergunta editorial em bloco verde |
| `Process` | método em quatro etapas |
| `Services` | quatro ofertas em grid 2×2 |
| `Projects` | case real da Liora Closet |
| `About` | origem e posicionamento da Lucx |
| `FinalCTA` | convite e contatos |
| `Footer` | marca e navegação |

### Assets existentes

- logotipo Lucx Tech horizontal;
- favicon `LX`;
- composição e wireframe da Liora Closet;
- nenhum asset do Diazen;
- nenhuma fotografia real do fundador;
- nenhum depoimento aprovado;
- nenhum ícone social ou URL social real configurado.

### Funcionalidades atuais

- navegação por âncoras no desktop;
- contato via WhatsApp e e-mail;
- halo do hero seguindo o ponteiro;
- layout responsivo baseado em media queries;
- sem menu mobile funcional: os links centrais somem abaixo de 900 px e resta somente o CTA;
- sem FAQ, carrossel, revelação por scroll ou sequência de entrada;
- overflow horizontal de aproximadamente 22 px em 390×844, causado principalmente pelo título da seção verde ultrapassando o viewport.

## Retrato visual da referência

### Fundação

| Propriedade | Desktop observado | Mobile observado |
| --- | --- | --- |
| Fundo | cinza/off-white muito claro, próximo de `#f4f4f5` | igual |
| Conteúdo | máximo de 1200 px em 1440 px; margens de 120 px | 16 px na maioria das áreas |
| Tipografia | Inter / Inter Display / Open Sauce Sans | as mesmas famílias |
| Títulos | 48–64 px, peso 500; processo em 64 px/700 | 31–38 px, peso 500–700 |
| Corpo | aproximadamente 16–20 px, cinza médio | aproximadamente 16 px |
| Raios | 24–36 px em superfícies grandes | 20–28 px |
| Sombras | suaves e amplas, usadas em cards escuros e header | reduzidas, mas presentes |
| Ritmo | grandes intervalos entre blocos; densidade concentrada dentro dos cards | seções mais longas e lineares |

A referência é predominantemente clara. O preto aparece em botões e em dois blocos de grande impacto: apresentação/processo e FAQ. Não há gradientes decorativos evidentes na composição principal; os efeitos vêm de contraste, fotografias, sombras e movimento.

## Auditoria por seção

### 1. Header

- **Layout:** cápsula de 1200×72 px no desktop, posicionada 16 px abaixo do topo; no mobile, 358×70 px com 16 px de margem.
- **Composição:** logotipo à esquerda, localização/horário ao centro e hambúrguer à direita. A navegação completa fica dentro do menu, inclusive no desktop.
- **Scroll:** o invólucro permanece a 16 px do topo durante toda a rolagem. O nó interno é `position: relative`, mas um ancestral gerado pelo Framer executa o sticky/fixed visual.
- **Superfície:** branco translúcido (`rgba(255,255,255,.65)` observado), blur e raio de 24 px.
- **Menu mobile:** painel claro ocupa quase toda a largura; abre sobre a página, lista links principais e sublinks, possui divisórias e botão de fechar. O fundo da página continua visível abaixo.
- **Interação:** botão/links têm deslocamento vertical de cerca de 1 px no hover e mudanças discretas de contraste.
- **Acessibilidade observada:** o menu é clicável, mas alguns controles gerados não expõem `aria-expanded`; isso não deve ser reproduzido na Lucx.
- **Redução de movimento:** as timelines de entrada são removidas quase integralmente.

### 2. Hero

- **Layout:** centralizado, com grande espaço negativo; começa abaixo do header e termina antes do card de apresentação.
- **Hierarquia:** status em cápsula; marca/wordmark muito grande; headline de 55,2 px no desktop e 32 px no mobile; parágrafo curto; dois CTAs.
- **Largura:** conteúdo visualmente limitado a cerca de 760 px.
- **Botões:** primário preto em cápsula com círculo branco para seta; secundário branco.
- **Entrada:** sequência escalonada. O inventário mostra blocos com 850 ms e delays progressivos de aproximadamente 40–80 ms, além de uma animação principal de 1000 ms. Visualmente, opacidade e deslocamento vertical suave.
- **Easing dominante:** `cubic-bezier(0.16, 1, 0.3, 1)` nas revelações de viewport.
- **Mobile:** título, texto e ações permanecem centralizados; ações continuam lado a lado em 390 px.
- **Movimento reduzido:** entradas removidas; conteúdo aparece no estado final.

### 3. Apresentação

- **Layout:** card preto de 1200 px, raio próximo de 36 px, fotografia ocupando a metade direita e texto ancorado no canto inferior esquerdo.
- **Desktop:** aproximadamente 430 px de altura.
- **Mobile:** card vertical de aproximadamente 515 px; fotografia domina a parte superior e o texto fica no rodapé do card.
- **Contraste:** fotografia em preto e branco fundida ao fundo preto.
- **Entrada:** card e conteúdo aparecem com reveal suave ao entrar no viewport.
- **Aplicação Lucx:** exige fotografia real. Sem ela, deve-se usar uma composição tipográfica/editorial temporária, nunca uma pessoa gerada.

### 4. Serviços

- **Cabeçalho:** eyebrow pequeno em caixa alta; headline editorial de duas linhas, segunda em cinza; CTA alinhado à direita no desktop e abaixo no mobile.
- **Cards:** seis cards independentes, largura semelhante no desktop, cada um com uma representação visual própria no topo e texto abaixo.
- **Proporção:** cerca de 190×255 px no desktop; cards formam uma fileira horizontal. No mobile, o conteúdo se reorganiza em uma grade/fluxo vertical mais largo.
- **Estados:** imagem/mini-interface recebe movimento ou alteração sutil no hover; seta circular muda de contraste e posição.
- **Scroll:** cards entram em stagger de cerca de 80 ms. Foram observadas animações de 900 ms com easing `cubic-bezier(0.16,1,0.3,1)`.
- **Diferença Lucx:** os quatro serviços devem ter visuais específicos e proporções variadas, não quatro caixas idênticas com ícones lineares.

### 5. Portfólio

- **Layout:** título e link no topo; quatro cards em linha no desktop.
- **Imagem:** relação próxima de 4:3, raio de aproximadamente 16 px, mockups grandes dentro de fundos com cor própria.
- **Metadados:** título e categoria abaixo da imagem, alinhados à esquerda.
- **Hover:** zoom/elevação contidos na mídia, sem deslocar o layout.
- **Mobile:** projetos se tornam uma lista/grade de uma coluna; imagem mantém protagonismo.
- **Aplicação Lucx:** dois projetos reais — Diazen e Liora — com status explícitos e sem métricas inventadas. Diazen depende de capturas fornecidas.

### 6. Depoimentos

- **Layout:** título, depoimento grande, autor/empresa e navegação em tabs horizontais.
- **Tipografia:** citação em escala quase de headline; o texto é a peça visual principal.
- **Interação:** seleção de cliente altera citação e dados; há linha ativa no tab.
- **Conteúdo:** a seção é sustentada por clientes e citações reais.
- **Decisão Lucx:** não implementar esta seção até haver material aprovado. Não substituir por logos, métricas ou frases anônimas fictícias. O ritmo será preservado com portfólio e processo, sem um placeholder vazio.

### 7. Processo

- **Layout:** grande card preto (1200 px), raio de aproximadamente 36 px e sombra ampla.
- **Conteúdo observado:** quatro colunas — Talk, Plan, Build e Launch — e não cinco.
- **Hierarquia:** eyebrow, headline de 64 px/700 e etapas em colunas separadas por linhas.
- **Entrada:** título e colunas aparecem ao entrar no viewport; duração observada próxima de 700 ms, com easing suave.
- **Mobile:** as etapas se tornam fluxo vertical; o card cresce em altura e mantém contraste.
- **Aplicação Lucx:** usar as cinco etapas reais do briefing. No desktop, cinco colunas são estreitas demais em 1200 px; plano propõe trilho horizontal acessível ou grade 3+2, a validar visualmente. No mobile, lista vertical.

### 8. FAQ

- **Layout:** carrossel horizontal. Primeiro card usa fotografia e CTA; os demais são cards pretos com pergunta e botão circular `+`.
- **Desktop:** cards com cerca de 380 px de altura; parte do próximo card fica visível, sinalizando continuidade.
- **Mobile:** cards ocupam grande parte da largura, com peek do próximo; setas abaixo.
- **Abertura:** o card altera conteúdo e geometria; a resposta aparece dentro do mesmo card. O controle observado não expõe `aria-expanded`, limitação que a Lucx deve corrigir.
- **Movimento:** transição de aproximadamente 350–500 ms; sem salto de página.
- **Aplicação Lucx:** FAQ em cards horizontais com controles por teclado e toque, usando `aria-expanded` e região identificada.

### 9. CTA final

- **Layout:** superfície branca levemente destacada, raio de 28 px, título e apoio à esquerda, botão à direita.
- **Mobile:** empilha texto e botão; preserva padding generoso.
- **Tom:** curto e direto, sem efeitos decorativos.
- **Aplicação Lucx:** usar “Vamos construir algo?” e o canal WhatsApp existente.

### 10. Footer

- **Layout:** faixa branca, marca à esquerda, navegação central, redes à direita; segunda linha com serviços e informação institucional.
- **Mobile:** marca centralizada, links quebram em linhas e redes ficam abaixo.
- **Aplicação Lucx:** não exibir redes sem URL real. Incluir somente navegação, e-mail, WhatsApp e copyright verificáveis.

## Sistema de movimento observado

| Grupo | Evidência observada |
| --- | --- |
| Page load | sequência de 850–1000 ms, delays progressivos, opacidade e deslocamento suave |
| Scroll reveal | 500–900 ms, easing dominante `cubic-bezier(0.16,1,0.3,1)`, stagger de ~80 ms |
| Hover | translação de ~1 px, mudança de contraste, zoom restrito a imagens, setas em círculos |
| Header | sticky a 16 px do topo, sem mudança brusca de altura |
| Menu | painel sobreposto com entrada suave e fechamento explícito |
| FAQ | expansão dentro do card e navegação horizontal |
| Reduced motion | apenas uma animação contínua residual foi detectada; as entradas e staggers foram removidos |

Não foi observado parallax significativo nem uma dependência visual de scroll scrub. Isso indica que CSS transitions + IntersectionObserver são suficientes para a maior parte da Lucx 2.0; GSAP não se justifica na fundação.

## Comparação direta: referência × Lucx atual

| Tema | Referência | Lucx atual | Gap |
| --- | --- | --- | --- |
| Direção | clara, editorial, poucas superfícies escuras | predominantemente preta e verde | grande |
| Altura desktop | ~4505 px em 1440×900 | ~8250 px | Lucx é 83% mais longa |
| Altura mobile | ~6062 px em 390×844 | ~11146 px | Lucx é 84% mais longa |
| Header | sticky, cápsula, menu completo | estático, links somem no mobile | crítico |
| Hero | compacto, central, 2 CTAs | alto, escuro, bloco auxiliar inferior | médio/grande |
| Tipografia | Inter/Inter Display, títulos 52–64 px | Space Grotesk, títulos até 100 px | Lucx perde ritmo e compactação |
| Serviços | cards visuais distintos | grid uniforme com ícones | crítico |
| Projetos | vários cards reutilizáveis | um case editorial longo | precisa virar sistema de cards |
| Processo | card preto concentrado | seção clara extensa | grande |
| FAQ | carrossel interativo | inexistente | crítico |
| Motion | sistema coerente de load/reveal/hover | apenas halo do mouse e hover básico | crítico |
| Mobile | composição própria | desktop empilhado e overflow de 22 px | crítico |
| Acessibilidade | reduced motion forte; alguns gaps ARIA | sem menu/FAQ; halo desativado no mobile | ambos exigem cuidado |

## Conclusões de discovery

1. A qualidade da referência vem menos de efeitos complexos e mais de proporções, densidade controlada, imagens fortes, cards com função e movimento consistente.
2. A Lucx atual possui bom conteúdo real e uma base técnica simples, mas é longa, repetitiva e visualmente mais próxima de uma landing page tecnológica escura.
3. A refatoração pode preservar Next.js, React, os contatos e os assets da Liora. Não há justificativa para migrar stack.
4. O novo sistema deve partir de off-white e usar preto como contraste concentrado; o verde-esmeralda deve funcionar como detalhe, não como fundo de uma seção inteira.
5. O conteúdo solicitado no novo hero recoloca “software” antes de processo. Isso é uma mudança de posicionamento em relação à versão anterior e será seguido conforme o briefing 2.0.
6. A ausência de foto real, assets do Diazen, depoimentos e redes sociais limita essas áreas. A implementação não deve inventar substitutos.

## Evidências visuais

- [Hero da referência](./reference-captures/reference-desktop-hero.png)
- [Apresentação e início dos serviços](./reference-captures/reference-desktop-intro-services.png)
- [Serviços e portfólio](./reference-captures/reference-desktop-services-work.png)
- [Depoimentos](./reference-captures/reference-desktop-testimonials.png)
- [Processo](./reference-captures/reference-desktop-process.png)
- [FAQ](./reference-captures/reference-desktop-faq.png)
- [CTA e footer](./reference-captures/reference-desktop-cta-footer.png)
- [Menu mobile](./reference-captures/reference-mobile-menu.png)
- [Referência mobile completa após rolagem](./reference-captures/reference-mobile-full.png)
- [Lucx atual no desktop](./reference-captures/lucx-current-desktop.png)
- [Lucx atual no mobile](./reference-captures/lucx-current-mobile.png)

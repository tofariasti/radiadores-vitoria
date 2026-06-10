# Radiadores Vitória — Landing Page (demo)

Landing page de demonstração para venda de site à **Radiadores Vitória**, oficina de radiadores em Porto Alegre/RS.

**Demo online:** [tofariasti.github.io/radiadores-vitoria](https://tofariasti.github.io/radiadores-vitoria/)

## Material para WhatsApp

Prints prontos em [`docs/marketing/`](docs/marketing/) para enviar no WhatsApp ao prospectar a Radiadores Vitória (ou clientes similares). Abra a pasta no explorador de arquivos, anexe a imagem e use a sugestão de texto abaixo.

| Print | Uso | Sugestão de mensagem |
|-------|-----|----------------------|
| [Hero mobile](docs/marketing/01-hero-mobile.png) | Primeiro contato — impacto no celular | *Olá! Preparei uma demo de site para a Radiadores Vitória. Veja como ficaria no celular do cliente — orçamento direto pelo WhatsApp. Quer que eu te mostre ao vivo?* |
| [Hero desktop](docs/marketing/02-hero-desktop.png) | Mostrar versão completa no computador | *No desktop fica assim: headline forte, serviços claros e botão de orçamento sempre visível.* |
| [Serviços](docs/marketing/03-servicos.png) | Destacar o que a oficina oferece | *Cada serviço com ícone e descrição — o cliente entende na hora o que vocês fazem.* |
| [Galeria](docs/marketing/04-galeria.png) | Prova social / fotos reais | *Galeria com fotos do Instagram integradas — passa confiança e mostra o trabalho.* |
| [Localização](docs/marketing/05-localizacao.png) | SEO local e mapa | *Endereço, horário e mapa embutido — quem busca “radiador Porto Alegre” acha vocês.* |
| [Orçamento WhatsApp](docs/marketing/06-orcamento-whatsapp.png) | Foco em conversão | *CTA final leva direto pro WhatsApp com mensagem pronta — menos fricção, mais lead.* |
| [Demo com moldura](docs/marketing/07-demo-moldura.png) | Apresentação profissional da demo | *Montei a demo em modo apresentação — dá pra enviar o link ou mostrar em reunião. Quer um site assim pro seu negócio?* |

### Sequência sugerida (3 mensagens)

1. **01-hero-mobile.png** + texto do hero mobile  
2. **03-servicos.png** ou **04-galeria.png** + texto correspondente  
3. Link da demo: https://tofariasti.github.io/radiadores-vitoria/

### Pré-visualização

| Mobile | Desktop | Demo |
|:------:|:-------:|:----:|
| ![Hero mobile](docs/marketing/01-hero-mobile.png) | ![Hero desktop](docs/marketing/02-hero-desktop.png) | ![Demo com moldura](docs/marketing/07-demo-moldura.png) |

### Regenerar os prints

Após alterar o site, atualize as capturas a partir da versão publicada:

```bash
npm install
npm run capture:marketing
```

## Stack

- HTML estático
- Tailwind CSS 3.x
- JavaScript vanilla (config centralizado)

## Início rápido

```bash
npm install
npm run build
npx serve . -p 3333
```

Abrir [http://localhost:3333](http://localhost:3333)

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run build:css` | Compila Tailwind → `assets/css/output.css` |
| `npm run watch:css` | Watch mode para desenvolvimento |
| `npm run build` | Build de produção |
| `npm run capture:marketing` | Gera prints em `docs/marketing/` |

## Estrutura

```
├── index.html              # Página principal
├── assets/
│   ├── css/                # Tailwind + tema
│   ├── js/
│   │   ├── config.js       # Dados da empresa (editar aqui)
│   │   └── main.js         # Interações e renderização
│   └── images/             # Hero, galeria, logo
└── docs/
    ├── marketing/          # Prints para WhatsApp (PNG)
    ├── pesquisa.md         # Briefing e presença digital
    └── pitch.md            # Roteiro de venda (3 min)
```

## Personalizar

Edite [`assets/js/config.js`](assets/js/config.js) para alterar:

- WhatsApp, telefones, endereço
- Serviços, FAQ, galeria
- SEO local (coordenadas, CEP)

Substitua imagens em `assets/images/` por fotos reais do Instagram [@radiadores.vitoriaa](https://www.instagram.com/radiadores.vitoriaa/).

## Demo no celular

Com `npx serve` rodando, descubra o IP local:

```bash
hostname -I | awk '{print $1}'
```

No celular (mesma rede Wi-Fi): `http://SEU_IP:3333`

## Documentação

- [Pesquisa da empresa](docs/pesquisa.md)
- [Roteiro de pitch](docs/pitch.md)

# Radiadores Vitória — Landing Page (demo)

Landing page de demonstração para venda de site à **Radiadores Vitória**, oficina de radiadores em Porto Alegre/RS.

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

/**
 * Radiadores Vitória — Configuração central
 */
const RadiadoresConfig = {
  nomeEmpresa: 'Radiadores Vitória',
  modoDemo: true,
  previewUrl: '../',

  // Paleta extraída do perfil Instagram @radiadores.vitoriaa
  paleta: {
    vermelho: '#D03030',
    vermelhoEscuro: '#B82828',
    azulMarinho: '#1E2560',
    azulMedio: '#636791',
    azulEscuro: '#1A2248',
  },
  logoUrl: '/assets/images/instagram-profile.jpg',
  whatsappNumero: '5551999052877',
  whatsappMensagem: `Olá! Vi o site da Radiadores Vitória e gostaria de um orçamento.

Para agilizar, poderia informar:
1. Modelo e ano do veículo:
2. Qual o problema? (superaquecimento, vazamento, troca, limpeza...)
3. Quando precisa do serviço?

Obrigado!`,
  whatsappRastrearOrigem: true,
  telefoneFixo: '(51) 3061-1718',
  telefoneCelular: '(51) 99905-2877',
  instagram: '@radiadores.vitoriaa',
  instagramUrl: 'https://www.instagram.com/radiadores.vitoriaa/',
  endereco: 'Av. Baltazar de Oliveira Garcia, 1580',
  bairro: 'São Sebastião',
  cidadeRegiao: 'Porto Alegre e região',
  cidadeHero: 'Porto Alegre',
  cep: '91130-000',
  horario: 'Segunda a sexta, 08h às 18h',
  siteUrl: 'https://radiadoresvitoria.com.br',
  heroPoster: '/assets/images/instagram/03-C32dfR-rDB9.jpg',
  sobreImagem: '/assets/images/instagram/08-ClD7e5MDgVv.jpg',
  instagramPostsJson: '/assets/data/instagram-posts.json',
  ogImage: '/assets/images/og-social.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  seoLocal: {
    streetAddress: 'Av. Baltazar de Oliveira Garcia, 1580',
    addressLocality: 'Porto Alegre',
    addressRegion: 'RS',
    addressCountry: 'BR',
    postalCode: '91130-000',
    geo: { latitude: -30.0128, longitude: -51.1382 },
    geoRadiusMeters: 30000,
  },
  servicos: [
    {
      titulo: 'Conserto de radiadores',
      descricao: 'Reparo de vazamentos, avarias e soldas com qualidade e rapidez para você voltar a rodar com segurança.',
      icone: 'wrench',
    },
    {
      titulo: 'Limpeza e higienização',
      descricao: 'Limpeza completa do sistema de arrefecimento para melhorar a refrigeração e evitar superaquecimento.',
      icone: 'sparkles',
    },
    {
      titulo: 'Venda de radiadores',
      descricao: 'Radiadores novos e recondicionados para diversas marcas e modelos. Consulte disponibilidade e prazo.',
      icone: 'shopping',
    },
    {
      titulo: 'Sistema de arrefecimento',
      descricao: 'Intercoolers, ventoinhas e componentes do sistema. Diagnóstico e solução para o seu veículo.',
      icone: 'thermometer',
    },
  ],
  diferenciais: [
    'Especialistas em sistema de arrefecimento automotivo',
    'Oficina em São Sebastião — fácil acesso',
    'Orçamento rápido pelo WhatsApp',
    'Atendimento de segunda a sexta, 08h às 18h',
  ],
  galeria: [
    { imagem: '/assets/images/instagram/01-C6OVEb0LfWS.jpg', alt: 'Diagnóstico de vazamento no evaporador — ar-condicionado', instagramUrl: 'https://www.instagram.com/p/C6OVEb0LfWS/' },
    { imagem: '/assets/images/instagram/02-C5a9CuprU7u.jpg', alt: 'Troca do motor de ventilação interno — Palio Adventure', instagramUrl: 'https://www.instagram.com/p/C5a9CuprU7u/' },
    { imagem: '/assets/images/instagram/03-C32dfR-rDB9.jpg', alt: 'Troca de colmeia e reconstrução — radiador Ford F1000', instagramUrl: 'https://www.instagram.com/p/C32dfR-rDB9/' },
    { imagem: '/assets/images/instagram/04-DXHIQpqjmWn.jpg', alt: 'Serviços de arrefecimento — Radiadores Vitória', instagramUrl: 'https://www.instagram.com/p/DXHIQpqjmWn/' },
    { imagem: '/assets/images/instagram/05-DGQf0JFRQkp.jpg', alt: 'Manutenção de radiador — HB20', instagramUrl: 'https://www.instagram.com/p/DGQf0JFRQkp/' },
    { imagem: '/assets/images/instagram/06-DFLam62xj70.jpg', alt: 'Serviço em andamento na oficina', instagramUrl: 'https://www.instagram.com/p/DFLam62xj70/' },
    { imagem: '/assets/images/instagram/08-ClD7e5MDgVv.jpg', alt: 'Trabalhos do dia a dia na oficina', instagramUrl: 'https://www.instagram.com/p/ClD7e5MDgVv/' },
    { imagem: '/assets/images/instagram/09-CdLOCuxuI94.jpg', alt: 'Radiador novo — consultar valor e disponibilidade', instagramUrl: 'https://www.instagram.com/p/CdLOCuxuI94/' },
    { imagem: '/assets/images/instagram/10-CdLN27jO_lB.jpg', alt: 'Radiador novo — diversos modelos', instagramUrl: 'https://www.instagram.com/p/CdLN27jO_lB/' },
    { imagem: '/assets/images/instagram/11-CVA_MDoA9_e.jpg', alt: 'Sistema de arrefecimento automotivo', instagramUrl: 'https://www.instagram.com/p/CVA_MDoA9_e/' },
    { imagem: '/assets/images/instagram/12-CTwxGRdgZm5.jpg', alt: 'Radiador novo — Radiadores Vitória', instagramUrl: 'https://www.instagram.com/p/CTwxGRdgZm5/' },
  ],
  faq: [
    {
      pergunta: 'Quanto custa consertar ou trocar um radiador?',
      resposta:
        'O valor depende do modelo do veículo, do tipo de serviço (conserto, limpeza ou troca) e da peça necessária. Envie os detalhes pelo WhatsApp e receba um orçamento sem compromisso.',
    },
    {
      pergunta: 'Quais sinais indicam problema no radiador?',
      resposta:
        'Superaquecimento do motor, vazamento de líquido de arrefecimento, cheiro de queimado, luz de temperatura acesa ou aquecimento irregular são sinais comuns. Não ignore — entre em contato para avaliação.',
    },
    {
      pergunta: 'Vocês atendem todas as marcas de carros?',
      resposta:
        'Trabalhamos com radiadores e sistemas de arrefecimento para a maioria dos veículos de passeio e utilitários. Informe modelo e ano pelo WhatsApp para confirmarmos.',
    },
    {
      pergunta: 'Qual o prazo para o serviço?',
      resposta:
        'Limpezas e consertos simples costumam ser mais rápidos. Trocas que exigem peça específica dependem da disponibilidade. Informamos o prazo estimado no orçamento.',
    },
    {
      pergunta: 'Onde fica a oficina?',
      resposta:
        'Estamos na Av. Baltazar de Oliveira Garcia, 1580, bairro São Sebastião, Porto Alegre/RS. Atendemos clientes de Porto Alegre e região metropolitana.',
    },
    {
      pergunta: 'Preciso agendar ou posso ir direto?',
      resposta:
        'Você pode ir direto no horário de funcionamento (seg–sex, 08h–18h) ou chamar no WhatsApp antes para agilizar o atendimento.',
    },
  ],
};

if (typeof window !== 'undefined') {
  window.RadiadoresConfig = RadiadoresConfig;
}

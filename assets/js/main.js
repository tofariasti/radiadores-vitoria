(function () {
  'use strict';

  const config = window.RadiadoresConfig || {};
  const assetUrl = window.assetUrl || ((path) => path);

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getWhatsAppUrl(source) {
    const numero = config.whatsappNumero || '';
    let msg = config.whatsappMensagem || '';
    if (source && config.whatsappRastrearOrigem !== false) {
      msg += `\n\n(Origem: ${source})`;
    }
    return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  }

  function getServiceIcon(tipo) {
    const icons = {
      wrench:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
      sparkles:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>',
      shopping:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>',
      thermometer:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
    };
    const path = icons[tipo] || icons.wrench;
    return `<svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
  }

  function applyWhatsAppLinks() {
    document.querySelectorAll('[data-whatsapp]').forEach((el) => {
      const source = el.getAttribute('data-whatsapp-source') || 'site';
      el.href = getWhatsAppUrl(source);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  }

  function applyInstagramLinks() {
    document.querySelectorAll('[data-instagram]').forEach((el) => {
      if (el.hasAttribute('data-instagram-label')) {
        el.textContent = config.instagram || '';
      }
      if (el.tagName === 'A') el.href = config.instagramUrl || '#';
    });
  }

  function applyHeroPoster() {
    const poster = config.heroPoster;
    if (!poster) return;
    document.querySelectorAll('.hero__bg img').forEach((img) => {
      img.src = assetUrl(poster);
    });
    const sobreImg = document.querySelector('.sobre-visual img');
    if (sobreImg && config.sobreImagem) {
      sobreImg.src = assetUrl(config.sobreImagem);
    }
  }

  function applyLogoImages() {
    const logo = config.logoUrl;
    if (!logo) return;
    document.querySelectorAll('.site-nav__brand img, .site-footer img').forEach((img) => {
      img.src = assetUrl(logo);
    });
  }

  function applyContactData() {
    document.querySelectorAll('[data-telefone-fixo]').forEach((el) => {
      el.textContent = config.telefoneFixo || '';
    });
    document.querySelectorAll('[data-telefone-celular]').forEach((el) => {
      el.textContent = config.telefoneCelular || '';
    });
    document.querySelectorAll('[data-endereco]').forEach((el) => {
      el.textContent = `${config.endereco || ''} — ${config.bairro || ''}, ${config.cidadeHero || 'Porto Alegre'}/RS`;
    });
    document.querySelectorAll('[data-horario]').forEach((el) => {
      el.textContent = config.horario || '';
    });
    document.querySelectorAll('[data-cidade-hero]').forEach((el) => {
      el.textContent = config.cidadeHero || 'Porto Alegre';
    });
    document.querySelectorAll('[data-cidade]').forEach((el) => {
      el.textContent = config.cidadeRegiao || '';
    });
  }

  function renderServicos() {
    const grid = document.getElementById('servicos-grid');
    if (!grid) return;
    const servicos = config.servicos || [];
    grid.innerHTML = servicos
      .map(
        (s) => `
      <article class="service-card reveal">
        <span class="service-card__icon" aria-hidden="true">${getServiceIcon(s.icone)}</span>
        <h3 class="service-card__title">${escapeHtml(s.titulo)}</h3>
        <p class="service-card__text">${escapeHtml(s.descricao)}</p>
      </article>`
      )
      .join('');
  }

  function renderGaleria() {
    const grid = document.getElementById('galeria-grid');
    if (!grid) return;
    const fotos = config.galeria || [];
    grid.innerHTML = fotos
      .map((f) => {
        const ig = f.instagramUrl
          ? `<a href="${escapeHtml(f.instagramUrl)}" target="_blank" rel="noopener noreferrer" class="gallery-item__ig" aria-label="Ver no Instagram" onclick="event.stopPropagation()">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>`
          : '';
        const imgUrl = assetUrl(f.imagem);
        return `
      <a href="${escapeHtml(imgUrl)}" class="gallery-item reveal" data-lightbox>
        <img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(f.alt)}" loading="lazy" width="400" height="300" />
        ${ig}
      </a>`;
      })
      .join('');
  }

  async function loadGaleriaFromJson() {
    if ((config.galeria || []).length || !config.instagramPostsJson) return;
    try {
      const res = await fetch(assetUrl(config.instagramPostsJson));
      if (!res.ok) return;
      const data = await res.json();
      if (Array.isArray(data.posts) && data.posts.length) {
        config.galeria = data.posts;
      }
    } catch (_) {
      /* fetch falha em file:// */
    }
  }

  function renderDiferenciais() {
    const list = document.getElementById('diferenciais-list');
    if (!list) return;
    list.innerHTML = (config.diferenciais || [])
      .map((d) => `<li class="diferencial-item reveal">${escapeHtml(d)}</li>`)
      .join('');
  }

  function renderFaq() {
    const list = document.getElementById('faq-list');
    const items = config.faq || [];
    if (!list || !items.length) return;

    if (list.dataset.seoPrerendered === 'true') return;

    list.innerHTML = items
      .map(
        (item) => `
      <details class="faq-item reveal">
        <summary>${escapeHtml(item.pergunta)}</summary>
        <p class="faq-item__answer">${escapeHtml(item.resposta)}</p>
      </details>`
      )
      .join('');
  }

  function applyFaqSchema() {
    const schemaEl = document.getElementById('schema-faq');
    const items = config.faq || [];
    if (!schemaEl || !items.length) return;
    if (schemaEl.dataset.seoPrerendered === 'true') return;

    schemaEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.pergunta,
        acceptedAnswer: { '@type': 'Answer', text: item.resposta },
      })),
    });
  }

  function applyLocalBusinessSchema() {
    const schemaEl = document.getElementById('schema-local-business');
    const local = config.seoLocal || {};
    if (!schemaEl) return;

    try {
      const schema = JSON.parse(schemaEl.textContent);
      if (config.whatsappNumero) schema.telephone = `+${config.whatsappNumero}`;
      if (config.instagramUrl) schema.sameAs = [config.instagramUrl];
      if (config.ogImage) schema.image = assetUrl(config.ogImage);

      schema.address = {
        '@type': 'PostalAddress',
        streetAddress: local.streetAddress || config.endereco,
        addressLocality: local.addressLocality || 'Porto Alegre',
        addressRegion: local.addressRegion || 'RS',
        addressCountry: local.addressCountry || 'BR',
        postalCode: local.postalCode || config.cep,
      };

      if (local.geo) {
        schema.geo = {
          '@type': 'GeoCoordinates',
          latitude: local.geo.latitude,
          longitude: local.geo.longitude,
        };
        schema.areaServed = {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: local.geo.latitude,
            longitude: local.geo.longitude,
          },
          geoRadius: local.geoRadiusMeters || 30000,
        };
      }

      schema.openingHoursSpecification = [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
      ];

      schemaEl.textContent = JSON.stringify(schema);
    } catch (_) {
      /* ignore */
    }
  }

  function initMobileMenu() {
    const btn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    const setOpen = (open) => {
      menu.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    };

    btn.addEventListener('click', () => setOpen(menu.classList.contains('hidden')));
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('header--scrolled', window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const close = document.getElementById('lightbox-close');
    if (!lightbox || !img) return;

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-lightbox]');
      if (!trigger) return;
      e.preventDefault();
      img.src = trigger.getAttribute('href') || trigger.querySelector('img')?.src;
      img.alt = trigger.querySelector('img')?.alt || '';
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });

    const hide = () => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      img.src = '';
      document.body.style.overflow = '';
    };

    close?.addEventListener('click', hide);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) hide();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) hide();
    });
  }

  function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
  }

  function initDemoExitBar() {
    if (!config.modoDemo || window.self !== window.top) return;

    const bar = document.createElement('div');
    bar.className = 'demo-exit-bar';
    bar.setAttribute('role', 'banner');

    const label = document.createElement('span');
    label.className = 'demo-exit-bar__label';
    label.textContent = 'Concept demo — Radiadores Vitória';

    const link = document.createElement('a');
    link.className = 'demo-exit-bar__link';
    link.href = config.previewUrl || '../';
    link.textContent = '← Voltar ao preview';

    bar.append(label, link);
    document.body.prepend(bar);
    document.body.classList.add('demo-standalone');
  }

  async function init() {
    await loadGaleriaFromJson();
    applyWhatsAppLinks();
    applyInstagramLinks();
    applyContactData();
    applyHeroPoster();
    applyLogoImages();
    renderServicos();
    renderGaleria();
    renderDiferenciais();
    renderFaq();
    applyFaqSchema();
    applyLocalBusinessSchema();
    initDemoExitBar();
    initMobileMenu();
    initHeaderScroll();
    initLightbox();
    initScrollReveal();
  }

  document.addEventListener('DOMContentLoaded', init);
})();

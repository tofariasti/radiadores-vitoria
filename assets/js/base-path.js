(function () {
  'use strict';

  function detectBasePath() {
    var host = location.hostname;
    if (!host.endsWith('.github.io')) return '';

    var parts = location.pathname.split('/').filter(Boolean);
    if (!parts.length) return '';

    var first = parts[0];
    if (first === 'site' || first === 'assets') return '';
    if (/\.html?$/i.test(first)) return '';

    return '/' + first;
  }

  window.__ASSET_BASE__ = detectBasePath();

  window.assetUrl = function assetUrl(path) {
    if (!path || /^https?:\/\//i.test(path)) return path;

    var clean = String(path).replace(/^\//, '');
    var base = window.__ASSET_BASE__ || '';

    return base ? base + '/' + clean : '/' + clean;
  };
})();

(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var lang = saved || (((navigator.language || 'en').toLowerCase().indexOf('tr') === 0) ? 'tr' : 'en');
  function apply(l) {
    root.setAttribute('data-lang', l);
    root.setAttribute('lang', l);
    try { localStorage.setItem('lang', l); } catch (e) {}
    var btns = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-set-lang') === l ? 'true' : 'false');
    }
  }
  root.className += ' js';
  apply(lang);
  document.addEventListener('DOMContentLoaded', function () { apply(lang); });
  document.addEventListener('click', function (e) {
    var t = e.target;
    while (t && t !== document) {
      if (t.getAttribute && t.getAttribute('data-set-lang')) { lang = t.getAttribute('data-set-lang'); apply(lang); return; }
      t = t.parentNode;
    }
  });
})();

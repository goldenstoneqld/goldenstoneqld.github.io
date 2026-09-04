/* Golden Stone QLD — main.js
   Header state · mobile drawer (focus trap, Escape) · scroll reveal · footer year.
   Progressive enhancement only: every page reads without this file. */
(function () {
  'use strict';
  var d = document, html = d.documentElement;

  /* Header turns solid once the page has scrolled */
  var header = d.getElementById('site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 24); };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Mobile drawer — traps focus between the toggle and its own links */
  var toggle = d.getElementById('nav-toggle'), drawer = d.getElementById('nav-drawer');
  if (toggle && drawer) {
    var F = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', open = false;
    var setOpen = function (state) {
      open = state;
      drawer.classList.toggle('is-open', open);
      html.classList.toggle('drawer-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open) { var first = drawer.querySelector(F); if (first) first.focus(); }
      else { toggle.focus(); }
    };
    toggle.addEventListener('click', function () { setOpen(!open); });
    drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    d.addEventListener('keydown', function (e) {
      if (!open) return;
      if (e.key === 'Escape') { e.preventDefault(); setOpen(false); return; }
      if (e.key !== 'Tab') return;
      var items = [toggle].concat([].slice.call(drawer.querySelectorAll(F)));
      var i = items.indexOf(d.activeElement), last = items.length - 1;
      if (e.shiftKey && i <= 0) { e.preventDefault(); items[last].focus(); }
      else if (!e.shiftKey && i === last) { e.preventDefault(); items[0].focus(); }
    });
    matchMedia('(min-width: 1024px)').addEventListener('change', function (mq) { if (mq.matches && open) setOpen(false); });
  }

  /* Reveal on scroll — CSS only applies when html.js and motion is allowed */
  var els = d.querySelectorAll('.reveal, .ifl--reveal');
  if (els.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Footer year */
  var y = d.getElementById('footer-year');
  if (y) y.textContent = String(new Date().getFullYear());
})();

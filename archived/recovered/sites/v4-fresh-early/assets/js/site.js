(function () {
  var open = document.querySelector('[data-open-menu]');
  var close = document.querySelector('[data-close-menu]');
  var overlay = document.querySelector('[data-overlay]');
  function setOpen(on) {
    if (!overlay) return;
    overlay.setAttribute('aria-hidden', on ? 'false' : 'true');
    if (open) open.setAttribute('aria-expanded', on ? 'true' : 'false');
    document.body.style.overflow = on ? 'hidden' : '';
  }
  if (open) open.addEventListener('click', function () { setOpen(true); });
  if (close) close.addEventListener('click', function () { setOpen(false); });
  if (overlay) overlay.addEventListener('click', function (e) { if (e.target === overlay) setOpen(false); });

  var nodes = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach(function (n) { io.observe(n); });
  } else {
    nodes.forEach(function (n) { n.classList.add('in'); });
  }
})();

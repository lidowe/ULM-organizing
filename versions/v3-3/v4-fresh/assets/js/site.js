(function () {
  const overlay = document.querySelector('[data-overlay]');
  const openBtn = document.querySelector('[data-open-menu]');
  const closeBtn = document.querySelector('[data-close-menu]');

  function setOverlay(open) {
    if (!overlay) return;
    overlay.classList.toggle('open', open);
    overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (openBtn) openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  if (openBtn) {
    openBtn.addEventListener('click', () => setOverlay(true));
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => setOverlay(false));
  }

  overlay?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOverlay(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOverlay(false);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));

  const inquiryForm = document.querySelector('[data-inquiry-form]');
  if (!inquiryForm) return;

  inquiryForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const read = (id) => (inquiryForm.querySelector('#' + id)?.value || '').trim();
    const servicePath = read('desired-path') || 'Undecided';
    const subject = 'Upper Level Music inquiry - ' + servicePath;
    const body = [
      'Role: ' + read('role'),
      'Current Stage: ' + read('stage'),
      'Main Blocker: ' + read('blocker'),
      'Desired Path: ' + servicePath,
      'Timeline: ' + read('timeline'),
      'Budget Band: ' + read('budget'),
      'Reference Tracks: ' + read('references'),
      '',
      'Project Story:',
      read('story'),
      '',
      'Name: ' + read('name'),
      'Email: ' + read('email')
    ].join('\n');

    const note = inquiryForm.querySelector('.notice');
    if (note) note.classList.add('show');

    window.location.href =
      'mailto:edwardlidow@upperlevelmusic.com?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);
  });
})();

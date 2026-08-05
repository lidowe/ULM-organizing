(function(){
  const page=document.body.dataset.page;
  document.querySelectorAll('.nav a').forEach(a=>{
    if(a.dataset.page===page) a.setAttribute('aria-current','page');
  });

  const overlay=document.querySelector('[data-overlay]');
  const openers=document.querySelectorAll('[data-open-menu]');
  const closers=document.querySelectorAll('[data-close-menu]');
  function openMenu(){ if(overlay){ overlay.classList.add('open'); overlay.setAttribute('aria-hidden','false'); }}
  function closeMenu(){ if(overlay){ overlay.classList.remove('open'); overlay.setAttribute('aria-hidden','true'); }}
  openers.forEach(b=>b.addEventListener('click',openMenu));
  closers.forEach(b=>b.addEventListener('click',closeMenu));
  if(overlay){ overlay.addEventListener('click',e=>{ if(e.target===overlay) closeMenu(); }); }
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeMenu(); });

  const filterButtons=document.querySelectorAll('[data-filter]');
  const creditRows=document.querySelectorAll('[data-credit-type]');
  filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
    const value=btn.dataset.filter;
    filterButtons.forEach(b=>b.classList.toggle('active',b===btn));
    creditRows.forEach(row=>{
      row.style.display=(value==='all'||row.dataset.creditType===value)?'grid':'none';
    });
  }));

  const serviceLinks=document.querySelectorAll('[data-service-link]');
  serviceLinks.forEach(link=>link.addEventListener('click',()=>{
    try{ sessionStorage.setItem('ulm_service',link.dataset.serviceLink); }catch(e){}
  }));

  const serviceSelect=document.querySelector('#service');
  if(serviceSelect){
    try{
      const stored=sessionStorage.getItem('ulm_service');
      if(stored){ serviceSelect.value=stored; sessionStorage.removeItem('ulm_service'); }
    }catch(e){}
  }

  const form=document.querySelector('#bookingForm');
  if(form){
    form.addEventListener('submit',ev=>{
      ev.preventDefault();
      const data=new FormData(form);
      const get=k=>(data.get(k)||'').toString().trim();
      const service=get('service')||'General inquiry';
      const body=[
        `Name: ${get('name')}`,
        `Email: ${get('email')}`,
        `Service: ${service}`,
        `Target date: ${get('target')||'—'}`,
        `Budget / range: ${get('budget')||'—'}`,
        '',
        'Project:',
        get('project')
      ].join('\n');
      const email='edwardlidow@upperlevelmusic.com';
      const subject=`Booking request — ${service}`;
      const status=document.querySelector('#formStatus');
      if(status) status.classList.add('show');
      window.location.href=`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();

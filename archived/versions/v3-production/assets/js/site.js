(function(){
  'use strict';
  const header=document.querySelector('.site-header');
  const setHeader=()=>header&&header.classList.toggle('scrolled',window.scrollY>24);
  setHeader(); window.addEventListener('scroll',setHeader,{passive:true});

  const dialog=document.querySelector('[data-menu-dialog]');
  document.querySelectorAll('[data-open-menu]').forEach(btn=>btn.addEventListener('click',()=>{
    if(!dialog) return;
    if(typeof dialog.showModal==='function') dialog.showModal(); else dialog.setAttribute('open','');
  }));
  document.querySelectorAll('[data-close-menu]').forEach(btn=>btn.addEventListener('click',()=>{
    if(!dialog) return;
    if(typeof dialog.close==='function') dialog.close(); else dialog.removeAttribute('open');
  }));
  if(dialog){
    dialog.addEventListener('click',e=>{ if(e.target===dialog && typeof dialog.close==='function') dialog.close(); });
  }

  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealers=[...document.querySelectorAll('.reveal')];
  if(!reduced && 'IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
    }),{threshold:.08,rootMargin:'0px 0px -5%'});
    revealers.forEach(el=>io.observe(el));
  } else revealers.forEach(el=>el.classList.add('in'));

  const filterButtons=[...document.querySelectorAll('[data-filter]')];
  const workCards=[...document.querySelectorAll('[data-work-role]')];
  filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
    const filter=btn.dataset.filter;
    filterButtons.forEach(b=>b.classList.toggle('active',b===btn));
    workCards.forEach(card=>{
      const roles=(card.dataset.workRole||'').split(' ');
      card.hidden=filter!=='all' && !roles.includes(filter);
    });
  }));

  const form=document.querySelector('[data-project-form]');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const val=id=>{const el=document.getElementById(id);return el?el.value.trim():''};
      const service=val('need')||'Project inquiry';
      const body=[
        'Name: '+val('name'),
        'Email: '+val('email'),
        'Artist / project: '+(val('project')||'—'),
        'Where the project is now: '+(val('stage')||'—'),
        'What I need help with: '+service,
        'Timeline: '+(val('timeline')||'—'),
        'Budget / range: '+(val('budget')||'—'),
        'Links: '+(val('links')||'—'),
        '',
        'About the record:',
        val('details')
      ].join('\n');
      const status=document.querySelector('[data-form-status]');
      if(status) status.classList.add('show');
      window.location.href='mailto:edwardlidow@upperlevelmusic.com?subject='+encodeURIComponent('Upper Level Music — '+service)+'&body='+encodeURIComponent(body);
    });
  }

  const canvas=document.querySelector('[data-resonance]');
  if(canvas){
    const ctx=canvas.getContext('2d',{alpha:true});
    let w=0,h=0,dpr=1,mouseX=.68,mouseY=.35,raf=0;
    const resize=()=>{
      dpr=Math.min(window.devicePixelRatio||1,2);
      w=canvas.clientWidth;h=canvas.clientHeight;
      canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
    };
    const onMove=e=>{mouseX=e.clientX/Math.max(innerWidth,1);mouseY=e.clientY/Math.max(innerHeight,1)};
    window.addEventListener('resize',resize,{passive:true});
    window.addEventListener('pointermove',onMove,{passive:true});
    resize();
    const draw=t=>{
      ctx.clearRect(0,0,w,h);
      const cx=w*(.64+(mouseX-.5)*.06), cy=h*(.35+(mouseY-.5)*.05);
      const rings=Math.max(11,Math.min(22,Math.floor(w/70)));
      for(let r=0;r<rings;r++){
        const p=r/(rings-1); const base=Math.min(w,h)*(.08+p*.78);
        ctx.beginPath();
        const steps=170;
        for(let i=0;i<=steps;i++){
          const a=i/steps*Math.PI*2;
          const wave=Math.sin(a*3+t*.00022+r*.47)*7*(1-p)+Math.sin(a*7-t*.00013+r)*3.4;
          const ovalX=base*(1.12+.05*Math.sin(r*.5));
          const ovalY=base*(.55+.04*Math.cos(r*.7));
          const x=cx+Math.cos(a)*(ovalX+wave)+Math.sin(a*2+t*.0001)*4;
          const y=cy+Math.sin(a)*(ovalY+wave*.45);
          if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
        }
        const alpha=.055+(1-p)*.08;
        ctx.strokeStyle=`rgba(229,197,143,${alpha})`;
        ctx.lineWidth=.65;
        ctx.stroke();
      }
      const gx=cx,gy=cy;
      const grad=ctx.createRadialGradient(gx,gy,0,gx,gy,Math.min(w,h)*.16);
      grad.addColorStop(0,'rgba(229,197,143,.16)');grad.addColorStop(.35,'rgba(200,163,107,.08)');grad.addColorStop(1,'rgba(110,52,39,0)');
      ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
      if(!reduced) raf=requestAnimationFrame(draw);
    };
    draw(performance.now());
    if(reduced && raf) cancelAnimationFrame(raf);
  }
})();

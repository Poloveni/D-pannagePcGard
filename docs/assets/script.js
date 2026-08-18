/* Dépannage PC Gard — script partagé */
(function(){
  // ── Menu burger mobile ────────────────────────────────────────────────
  var burgerBtn=document.getElementById('burgerBtn'),mobileMenu=document.getElementById('mobileMenu');
  function setMenu(open){
    if(!burgerBtn||!mobileMenu)return;
    burgerBtn.classList.toggle('active',open);
    mobileMenu.classList.toggle('active',open);
    burgerBtn.setAttribute('aria-expanded',open?'true':'false');
    burgerBtn.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
    document.body.style.overflow=open?'hidden':'';
  }
  if(burgerBtn&&mobileMenu){
    burgerBtn.addEventListener('click',function(){setMenu(!mobileMenu.classList.contains('active'))});
    document.querySelectorAll('.mob-link').forEach(function(l){l.addEventListener('click',function(){setMenu(false)})});
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&mobileMenu.classList.contains('active')){setMenu(false);burgerBtn.focus();}
    });
  }

  // ── Barre de nav au scroll ────────────────────────────────────────────
  var navbar=document.getElementById('navbar');
  if(navbar){window.addEventListener('scroll',function(){navbar.classList.toggle('scrolled',window.pageYOffset>60)},{passive:true});}

  // ── Apparition au scroll ──────────────────────────────────────────────
  var revealObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('active');revealObs.unobserve(e.target)}})},{threshold:0.08,rootMargin:'0px 0px -60px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){revealObs.observe(el)});
  var staggerObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in-view');staggerObs.unobserve(e.target)}})},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.stagger-in').forEach(function(el){staggerObs.observe(el)});

  // Le défilement doux vers les ancres est désormais géré nativement par le CSS
  // (scroll-behavior:smooth + scroll-margin-top) : l'URL et le bouton « retour »
  // du navigateur continuent de fonctionner normalement.

  // ── Compteurs animés ──────────────────────────────────────────────────
  var reduceMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var animateCounter=function(el){
    if(reduceMotion)return;
    var text=el.textContent.trim();var match=text.match(/([\d.]+)/);if(!match)return;
    var target=parseFloat(match[1]);var suffix=text.replace(match[1],'');
    var isDecimal=text.indexOf('.')!==-1;var duration=1100;var start=performance.now();
    var step=function(now){
      var progress=Math.min((now-start)/duration,1);
      var eased=1-Math.pow(1-progress,3);
      var current=target*eased;
      el.textContent=(isDecimal?current.toFixed(1):Math.floor(current))+suffix;
      if(progress<1){requestAnimationFrame(step);}else{el.textContent=text;}
    };
    requestAnimationFrame(step);
  };
  var counterObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){animateCounter(e.target);counterObs.unobserve(e.target)}})},{threshold:0.5});
  document.querySelectorAll('.stat-val').forEach(function(el){counterObs.observe(el)});

  // ── Carte Google chargée seulement après clic (RGPD / CNIL) ───────────
  var mapBtn=document.getElementById('mapConsent');
  if(mapBtn){
    mapBtn.addEventListener('click',function(){
      var wrap=mapBtn.parentNode;
      var iframe=document.createElement('iframe');
      iframe.src='https://maps.google.com/maps?q=N%C3%AEmes,+Gard,+France&z=10&output=embed';
      iframe.title="Zone d'intervention — Nîmes et le Gard";
      iframe.loading='lazy';
      iframe.referrerPolicy='no-referrer-when-downgrade';
      wrap.innerHTML='';
      wrap.appendChild(iframe);
    });
  }

  // ── Formulaires (Web3Forms) ───────────────────────────────────────────
  document.querySelectorAll('form[data-w3f]').forEach(function(form){
    var formMsg=form.querySelector('.form-msg');
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var btn=form.querySelector('button[type="submit"]'),orig=btn.innerHTML;
      btn.disabled=true;btn.innerHTML='Envoi en cours...';
      if(formMsg){formMsg.className='form-msg';formMsg.style.display='none';}
      fetch('https://api.web3forms.com/submit',{method:'POST',body:new FormData(form)})
        .then(function(res){return res.json()})
        .then(function(data){
          if(data.success){
            if(formMsg){formMsg.className='form-msg success';formMsg.style.display='block';formMsg.textContent='✅ Message envoyé ! Je vous réponds sous 24h.';}
            form.reset();
            setTimeout(function(){if(formMsg)formMsg.style.display='none'},8000);
          }else{throw new Error(data.message||'Erreur');}
        })
        .catch(function(){
          if(formMsg){formMsg.className='form-msg error';formMsg.style.display='block';formMsg.textContent='❌ Erreur. Appelez-moi au 06 37 12 76 88';}
        })
        .finally(function(){btn.disabled=false;btn.innerHTML=orig});
    });
  });
})();

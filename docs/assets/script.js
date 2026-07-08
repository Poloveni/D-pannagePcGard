/* Dépannage PC Gard — script partagé */
(function(){
  // Menu burger mobile
  var burgerBtn=document.getElementById('burgerBtn'),mobileMenu=document.getElementById('mobileMenu');
  if(burgerBtn&&mobileMenu){
    burgerBtn.addEventListener('click',function(){burgerBtn.classList.toggle('active');mobileMenu.classList.toggle('active');document.body.style.overflow=mobileMenu.classList.contains('active')?'hidden':''});
    document.querySelectorAll('.mob-link').forEach(function(l){l.addEventListener('click',function(){burgerBtn.classList.remove('active');mobileMenu.classList.remove('active');document.body.style.overflow=''})});
  }
  // Nav au scroll
  var navbar=document.getElementById('navbar');
  if(navbar){window.addEventListener('scroll',function(){navbar.classList.toggle('scrolled',window.pageYOffset>60)},{passive:true});}
  // Apparition au scroll
  var revealObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('active');revealObs.unobserve(e.target)}})},{threshold:0.08,rootMargin:'0px 0px -60px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){revealObs.observe(el)});
  var staggerObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in-view');staggerObs.unobserve(e.target)}})},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.stagger-in').forEach(function(el){staggerObs.observe(el)});
  // Défilement doux vers les ancres
  document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=document.querySelector(this.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}})});
  // Compteurs animés
  var animateCounter=function(el){var text=el.textContent.trim();var match=text.match(/([\d.]+)/);if(!match)return;var target=parseFloat(match[1]);var suffix=text.replace(match[1],'');var isDecimal=text.indexOf('.')!==-1;var duration=1100;var start=performance.now();var step=function(now){var progress=Math.min((now-start)/duration,1);var eased=1-Math.pow(1-progress,3);var current=target*eased;el.textContent=(isDecimal?current.toFixed(1):Math.floor(current))+suffix;if(progress<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
  var counterObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){animateCounter(e.target);counterObs.unobserve(e.target)}})},{threshold:0.5});
  document.querySelectorAll('.stat-val').forEach(function(el){counterObs.observe(el)});
  // Formulaires (Web3Forms)
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
            if(formMsg){formMsg.className='form-msg success';formMsg.textContent='✅ Message envoyé ! Je vous réponds sous 24h.';}
            form.reset();
            setTimeout(function(){if(formMsg)formMsg.style.display='none'},6000);
          }else{throw new Error(data.message||'Erreur');}
        })
        .catch(function(){
          if(formMsg){formMsg.className='form-msg error';formMsg.textContent='❌ Erreur. Appelez-moi au 06 37 12 76 88';}
        })
        .finally(function(){btn.disabled=false;btn.innerHTML=orig});
    });
  });
})();

(function(){
  var root=document.documentElement;
  var drawer=document.getElementById('mob-drawer');
  var burger=document.getElementById('burger');
  function setDrawer(open){
    if(!drawer||!burger)return;
    drawer.classList.toggle('open',open);
    burger.setAttribute('aria-expanded',open?'true':'false');
    root.classList.toggle('lock',open);
    if(open){var c=drawer.querySelector('.close');if(c)c.focus();}else{burger.focus();}
  }
  if(burger){burger.addEventListener('click',function(){setDrawer(true);});}
  if(drawer){
    drawer.addEventListener('click',function(e){
      if(e.target.classList.contains('scrim')||e.target.classList.contains('close'))setDrawer(false);
    });
  }
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      if(drawer&&drawer.classList.contains('open'))setDrawer(false);
      document.querySelectorAll('.has-dropdown.open').forEach(function(m){m.classList.remove('open');m.querySelector('button.dd').setAttribute('aria-expanded','false');});
    }
  });
  window.addEventListener('resize',function(){
    if(window.innerWidth>768&&drawer&&drawer.classList.contains('open')){drawer.classList.remove('open');root.classList.remove('lock');burger.setAttribute('aria-expanded','false');}
  });
  document.querySelectorAll('.has-dropdown > button.dd').forEach(function(b){
    b.addEventListener('click',function(){
      var li=b.parentNode,o=!li.classList.contains('open');
      document.querySelectorAll('.has-dropdown.open').forEach(function(m){m.classList.remove('open');});
      li.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false');
    });
  });
  document.addEventListener('click',function(e){
    if(!e.target.closest('.has-dropdown'))document.querySelectorAll('.has-dropdown.open').forEach(function(m){m.classList.remove('open');});
  });
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      var item=q.parentNode,a=item.querySelector('.faq-a'),open=!item.classList.contains('open');
      item.classList.toggle('open',open);
      q.setAttribute('aria-expanded',open?'true':'false');
      a.style.maxHeight=open?a.scrollHeight+'px':'0px';
    });
  });
  window.addEventListener('resize',function(){
    document.querySelectorAll('.faq-item.open .faq-a').forEach(function(a){a.style.maxHeight=a.scrollHeight+'px';});
  });
})();

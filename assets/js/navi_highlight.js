(function () {
  'use strict';
  // constants
  const sections = [...document.querySelectorAll('section[id]')];
  const menuLinks = [...document.querySelectorAll('.nav-item a')];
  const navoffset = 56 // document.getElementById('mainNav').clientHeight;
  const navToggle = document.querySelector('.navbar-toggler');
  // Scrollspy handler
  const scrollHandle = () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    menuLinks.forEach((link) => link.classList.remove('active'));
    sections.forEach((section) => {
      const offset = section.offsetTop - navoffset;
      if (offset <= scrollPosition) {
        menuLinks.forEach((link) => link.classList.remove('active'));
        const target = document.querySelector(`a[id="nav-bar-${section.id}"]`);
//        console.log(target);
//        console.log(target.hash);
//        if (!target.hash) return;
        target.classList.add('active');
        if (target.parentElement.classList.contains('dropdown-menu')) {
          target.parentElement.parentElement.firstChild.classList.add('active');
        }
        if (document.querySelector('#navbarResponsive').classList.contains('show')) navToggle.click();
      }
    });
  };

  // event listeners
  document.addEventListener('scroll', scrollHandle, false);
  document.addEventListener('resize', scrollHandle, false);
  document.addEventListener('readystatechange', scrollHandle, false);
})();

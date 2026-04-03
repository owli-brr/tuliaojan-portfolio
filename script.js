/* =============================================
   script.js — CV Website Interactions
   
   What this does:
   - Fade in sections as you scroll down
   - Smooth reveal with IntersectionObserver
   - No dependencies, vanilla JS only
   ============================================= */

(function () {
  'use strict';

  // ── SCROLL FADE-IN ──────────────────────────
  // Watches elements with class .fade-in and adds
  // .visible when they enter the viewport

  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animate once only
          }
        });
      },
      {
        threshold: 0.08,       // Trigger when 8% of element is visible
        rootMargin: '0px 0px -40px 0px', // Slight offset from bottom
      }
    );

    fadeEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: just show everything for older browsers
    fadeEls.forEach((el) => el.classList.add('visible'));
  }


  // ── STAGGER SKILL CARDS ─────────────────────
  // Adds a slight delay cascade to skill group cards
  // so they animate in one after another

  const skillGroups = document.querySelectorAll('.skills__group');
  skillGroups.forEach((el, i) => {
    el.style.transitionDelay = `${i * 60}ms`;
  });

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
  });


  // ── ACTIVE NAV HIGHLIGHT (optional) ─────────
  // If you add a nav bar later, this highlights
  // the current section automatically
  // (currently unused but ready to go)

  // const sections = document.querySelectorAll('section[id]');
  // const navLinks = document.querySelectorAll('nav a[href^="#"]');
  // window.addEventListener('scroll', () => {
  //   let current = '';
  //   sections.forEach((sec) => {
  //     if (window.scrollY >= sec.offsetTop - 120) {
  //       current = sec.id;
  //     }
  //   });
  //   navLinks.forEach((a) => {
  //     a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  //   });
  // }, { passive: true });

})();

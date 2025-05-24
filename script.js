// Scroll-triggered animations
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animate-text, .animate-btn');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(el => {
      observer.observe(el);
    });
  });
// Animate features on scroll
document.addEventListener("DOMContentLoaded", () => {
    const animatedItems = document.querySelectorAll('.animate-fade');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.1 });
  
    animatedItems.forEach(item => observer.observe(item));
  });
    
// Smooth fade-in animation for sections on scroll
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });

  // Body fade-in on page load
  document.body.classList.add('fade-in');

  // Smooth fade-out on internal page links
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');

    // Only apply to internal HTML pages (not mailto, http, #)
    if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto')) {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.remove('fade-in');
        setTimeout(() => {
          window.location.href = href;
        }, 300); // Should match CSS transition time
      });
    }
  });

  // Skill bar percentage labels (if using animated bars)
  const skillBars = document.querySelectorAll('.skill-bar .fill');
  skillBars.forEach(bar => {
    const percentage = bar.style.width;
    const label = document.createElement('span');
    label.classList.add('percent-label');
    label.textContent = percentage;
    bar.appendChild(label);
  });
});

/* ===================================
   Sandsprings — Site Interactions
   =================================== */

// --- Mobile Menu Toggle ---
const menu = document.querySelector('.menu');
const nav = document.querySelector('.links');

menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', open);
  nav.classList.toggle('open', open);
});

nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  })
);

// --- Auto-fill Service Select from Data Attributes ---
document.querySelectorAll('[data-service]').forEach(a =>
  a.addEventListener('click', () => {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
      serviceSelect.value = a.dataset.service;
    }
  })
);

// --- Enquiry Form Handler ---
const enquiryForm = document.getElementById('enquiry');

if (enquiryForm) {
  enquiryForm.addEventListener('submit', e => {
    e.preventDefault();

    const d = new FormData(e.currentTarget);

    const body = `Name: ${d.get('name')}
Company: ${d.get('company')}
Business type: ${d.get('businessType')}
Work email: ${d.get('email')}
Service: ${d.get('service')}

Requirements:
${d.get('message')}`;

    location.href =
      'mailto:sanand@sandsprings.in?subject=' +
      encodeURIComponent('Service enquiry: ' + d.get('service')) +
      '&body=' +
      encodeURIComponent(body);

    const status = document.getElementById('status');
    status.hidden = false;
    status.textContent =
      'Your email app should open with a draft. Review and send it there. ' +
      'If it does not open, email sanand@sandsprings.in directly. ' +
      'Your enquiry has not been sent by this page.';
  });
}

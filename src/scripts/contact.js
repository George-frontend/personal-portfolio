const form = document.getElementById('contact-form');

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.backgroundColor = isError ? "#e74c3c" : "#2ecc71";
  toast.className = "show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Използваме глобалната променлива emailjs от CDN
  emailjs.sendForm('service_x3dj8nr', 'template_v1rputh', form)
    .then(() => {
      showToast('Message sent successfully!');
      form.reset();
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      showToast('Oops! Something went wrong. Please try again later.', true);
    });
});

// Contact section animations
const contacts = document.getElementById('contacts');
window.addEventListener('scroll', () => {
  const rect = contacts.getBoundingClientRect();
  if(rect.top < window.innerHeight - 100){
    contacts.classList.add('visible');
  }
});

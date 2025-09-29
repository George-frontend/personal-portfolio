// Initialize EmailJS with the public key
emailjs.init('Bu83L1KH-oXBVQZcr'); // Replace with your own public key

// Get the contact form element by its ID
const form = document.getElementById('contact-form');

// Function to show a toast message
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.backgroundColor = isError ? "#e74c3c" : "#2ecc71"; // червен ако е грешка
  toast.className = "show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000); // скрива се след 3 секунди
}

// Add an event listener for the form submit event
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission (page reload)

  // Send the form data using EmailJS
  emailjs.sendForm('service_x3dj8nr', 'template_v1rputh', this)
    .then(() => {
      showToast('Message sent successfully!'); // Success toast
      form.reset(); // Clear the form fields
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      showToast('Oops! Something went wrong. Please try again later.', true); // Error toast
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

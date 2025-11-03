// Intersection Observer to show product cards on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Stop observing once shown for performance
    }
  });
}, { threshold: 0.2 });

const products = document.querySelectorAll('.product-card');
products.forEach(product => observer.observe(product));

// WhatsApp popup chat window function
function openWhatsAppChat(event) {
  event.preventDefault();
  const phoneNumber = "94712622012";
  const message = encodeURIComponent("Hi, I want to chat with you!");
  const width = 400;
  const height = 600;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(
    url,
    'WhatsAppChat',
    `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no`
  );
}


// Example redirect using popup window instead of new tab
function redirectToWhatsApp(product) {
  const phoneNumber = "94712622012";
  openWhatsAppPopup(phoneNumber, product);
}

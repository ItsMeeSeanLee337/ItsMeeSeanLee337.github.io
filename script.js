// Code for a simple "scroll-to-top" button
const scrollButton = document.querySelector('.scroll-button');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Code for a simple form validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    emailInput.focus();
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Please enter a message');
    messageInput.focus();
    return;
  }

  // Code to submit the form data to a server
});

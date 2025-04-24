const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links .nav-item');

// open and close menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// close when a nav item is clicked
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
  });
});

// close when clicking outside the nav
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
  }
});


// animated text
const phrases = ["Web Developer", "UI/UX Designer", "Graphic Designer", "Photographer"];
const typingText = document.querySelector('.typing-text');

// keep track of which phrase we're on and which character
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

// function that types and deletes text
function type() {
  const currentPhrase = phrases[phraseIndex];
  // get part of the phrase to display
  const currentText = currentPhrase.substring(0, charIndex);

  // show the text inside the element
  typingText.textContent = currentText;

  // if it is typing and not yet at the end of the word, type the next character
  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex++;
  }

  // if it is deleting and there are still characters left, remove one character
  else if (isDeleting && charIndex > 0) {
    charIndex--;
  }

  // if it has finished typing the whole word, pause for 2 seconds before deleting
  else if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 2000);
    return;
  }

  // if it has finished deleting, move to the next phrase
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  // the speed for typing and deleting
  const speed = isDeleting ? 60 : 120;

  // call this function after a short delay
  setTimeout(type, speed);
}

// start the typing effect
type();


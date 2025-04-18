

// Typing effect logic
const typingElement = document.querySelector('.typing');
const textToType = "Front End Developer, Game Developer, 3D Designer, UI/UX Designer";

let index = 0;
function typeText() {
  if (index < textToType.length) {
    typingElement.textContent += textToType[index];
    index++;
    setTimeout(typeText, 100);
  }
}

window.onload = typeText;

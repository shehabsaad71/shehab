const darkToggle = document.querySelector('.toggle-dark');
const body = document.body;

darkToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    const icon = darkToggle.querySelector('span');
    icon.textContent = icon.textContent === 'wb_sunny' ? 'dark_mode' : 'wb_sunny';
});

// Typing effect logic
const typingElement = document.querySelector('.typing');
const textToType = "مطور واجهات امامية, مطور العاب, منمذج ثلاثي الابعاد, مصمم تجربة المستخدم";

let index = 0;
function typeText() {
  if (index < textToType.length) {
    typingElement.textContent += textToType[index];
    index++;
    setTimeout(typeText, 100);
  }
}

window.onload = typeText;


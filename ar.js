

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

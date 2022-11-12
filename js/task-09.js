// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const btnChangeColor = document.querySelector(".change-color");
const outputCurrentColor = document.querySelector(".color");
const bodyEl = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  outputCurrentColor.textContent = color;
});

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputRangeEl = document.querySelector("#font-size-control");
inputRangeEl.value = inputRangeEl.min;

const outputText = document.querySelector("#text");

inputRangeEl.addEventListener("input", (e) => {
  outputText.style.fontSize = `${e.target.value}px`;
});

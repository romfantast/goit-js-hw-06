function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const createBoxesBtn = document.querySelector("[data-create]");
const destroyBoxesBtn = document.querySelector("[data-destroy]");

createBoxesBtn.addEventListener("click", createBoxes);

function createBoxes() {
  boxesEl.innerHTML = "";
  let res = [];
  let startSide = 30;
  let increaseValue = 10;

  for (let i = 0; i < inputEl.value; i++) {
    let condition = i < 1 ? startSide : (startSide += increaseValue);
    res.push(`
		<div style="width: ${condition}px; height: ${condition}px;
		background-color:${getRandomHexColor()}"></div>
	  `);
  }
  boxesEl.insertAdjacentHTML("beforeend", res.join(""));
}

destroyBoxesBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

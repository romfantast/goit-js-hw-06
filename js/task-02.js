const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

function createListInnerMarkup(ingredients) {
  const markup = ingredients.map((item) => {
    const liElement = document.createElement("li");
    liElement.textContent = item;
    liElement.classList.add("item");
    return liElement;
  });
  listEl.append(...markup);
}

createListInnerMarkup(ingredients);

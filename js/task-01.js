const listEl = document.querySelector("#categories");

console.log(`Number of categories: ${listEl.children.length}`);

for (let li of listEl.children) {
  console.log(`Category ${li.querySelector("h2").textContent}`);
  console.log(`Elements ${li.querySelector("ul").children.length}`);
}

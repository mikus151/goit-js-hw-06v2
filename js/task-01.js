const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${items.length}`);

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

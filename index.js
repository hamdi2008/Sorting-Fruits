let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊"];
const appleShelf = document.getElementById("apple-shelf");
const orangeShelf = document.getElementById("orange-shelf");

function sortingFruits() {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "🍎") {
      appleShelf.textContent += "🍎";
    } else if (fruits[i] === "🍊") {
      orangeShelf.textContent += "🍊";
    }
  }
}
sortingFruits();

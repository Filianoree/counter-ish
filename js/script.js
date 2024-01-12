// Funzione per incrementare il counter
function increment() {
  let currentValue = parseInt(counterElement.innerText, 10) || 0;
  currentValue++;
  counterElement.innerText = currentValue;
}

// Funzione per decrementare il counter
function decrement() {
  let currentValue = parseInt(counterElement.innerText, 10) || 0;
  currentValue--;
  counterElement.innerText = currentValue;
}

// Creare e aggiungere il counter al DOM
const counterContainer = document.getElementById("counter-container");
const counterElement = document.createElement("div");
counterElement.id = "counter";
counterElement.innerText = "0";

const incrementButton = document.createElement("button");
const decrementButton = document.createElement("button");

incrementButton.innerText = "+";
decrementButton.innerText = "-";

incrementButton.onclick = increment;
decrementButton.onclick = decrement;

counterContainer.appendChild(counterElement);
counterContainer.appendChild(incrementButton);
counterContainer.appendChild(decrementButton);

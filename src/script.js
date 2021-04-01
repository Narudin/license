// Переменные
const form = document.querySelector(".form");
const selected = document.querySelector("#selected");
const totalPrice = { price: 13, quantity: 1, license: "#1" };
const price = document.querySelector("#totalPrice");

// Функции
function render() {
  selected.textContent = totalPrice.license;
  price.textContent = "$" + totalPrice.price * totalPrice.quantity;
}

function onInput(element) {
  if (element.closest(".custom-radio")) {
    totalPrice.license = element.closest(".custom-radio").value;
    totalPrice.price = element
      .closest(".form__item")
      .querySelector("#price").textContent;
    render();
  }
  if (element.closest(".quantity__select")) {
    totalPrice.quantity = element.value;
    render();
  }
}

function onSubmit(event) {
  event.preventDefault();
  console.log(totalPrice)
}

// Вызовы
render();

// Слушатели
form.addEventListener("input", (event) => onInput(event.target));
form.addEventListener("submit", (event) => onSubmit(event));

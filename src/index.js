import WishList from "./wishlist";

//Select the form
let form = document.querySelector("#submitForm");
//Select the input for the car make
let makeInput = document.querySelector("#makeInput");
//Select the input for car model
let modelInput = document.querySelector("#modelInput");
//Select input for car year
let yearInput = document.querySelector("#yearInput");
//Select the paragraph element for the car make
let makeDisplay = document.querySelector("#car-make");
//Select the paragraph element for the car model
let modelDisplay = document.querySelector("#car-model");
//Select the paragraph element for car year
let yearDisplay = document.querySelector("#car-year");
//Select the remove button
let removeBtn = document.querySelector("#removeBtn");
//Select the wishlist unordered list element
let wishlistUl = document.querySelector("#wishListContainer > ul");

let wishlist = new WishList();

form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

function updateDOMList() {
  wishlistUl.innerHTML = "";
  wishlist.list.forEach((car) => {
    const li = document.createElement("li");
    li.textContent = `${car.make} ${car.model}`;
    li.addEventListener("click", () => showCarDetails(car));
    wishlistUl.appendChild(li);
  });
}

function showCarDetails(car) {
  makeDisplay.textContent = car.make;
  modelDisplay.textContent = car.model;
  yearDisplay.textContent = car.year;
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
  
}

function addCar(event) {
  event.preventDefault();

  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;

  wishlist.add(make, model, year);

  updateDOMList();
}

function removeCar() {
  let carId = Number(removeBtn.getAttribute("data-carId"));
  wishlist.remove(carId);

  updateDOMList();

  makeDisplay.textContent = "";
  modelDisplay.textContent = "";
  yearDisplay.textContent = "";
  removeBtn.disabled = false;
}
/* import {library} from "webpack"; */
import WishList from "./wishlist";

let wishlist = new WishList();

console.log("Hello World");

//DOM Elements
//Select the form
let form = document.querySelector("#submitForm");
//Select the input for the car make 
let makeInput = document.querySelector("#makeInput");
//Select the input for car model
let modelInput = document.querySelector("#modelInput");
//Select input for car year
let yearInput = document.querySelector("#yearInput");
//Select the paragraph element for car make 
let makeDisplay = document.querySelector("#car-make");
//Select the paragraph element for the car model
let modelDisplay = document.querySelector("#car-model");
//Select the paragraph element for car year
let yearDisplay = document.querySelector("#car-year");
//Select the remove button 
let removeBtn = document.querySelector("#remove-Btn");
//Select the wishlist unordered list element
let listUl = document.querySelector("#wishlist-ul");

//Event listeners

form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

//Functions

function showCarDetails(car) {
    // update car display texts
    makeDisplay.textContent = car.make;
    modelDisplay.textContent = car.model;
    yearDisplay.textContent = car.year;

    //enable the remove button
    removeBtn.disabled = false;
    //set current car's id to the data-carId attribute of removeBtn
    removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {

// clear the ul contents
listUl.innerHTML = "";

//iterate through the list of cars
wishlist.list.forEach((car) => {
    //add a li to the ul for each car 
    let li = document.createElement("li");
    li.textContent = `${car.make} ${car.model}`;
    //add a click event listener to showCarDetails per list item
    li.addEventListener("click", () => showCarDetails(car));
    listUl.appendChild(li);
});
}
function addCar(event) {
    event.preventDefault();
    
    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;

    wishlist.add(make, model, year);
    updateDOMList();
}

//reset form values

makeInput.value = "";
modelInput.value = "";
yearInput.value = "";

function removeCar() {
    //get the displayed car's ID 

    let carId = Number(removeBtn.getattribute("data-carId"));
    // remove the selected car 
    wishlist.remove(carId);
    //update the Dom list 
    updateDOMList();

    // reset display values 
    makeDisplay.textContent = "";
    modelDisplay.textContent = "";
    yearDisplay.textContent = "";

    //disble remove button 
    removeBtn.disbaled = true;

}
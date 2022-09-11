import {Car} from "car.js";

export default class WishList {
    constructor(list, nextID) 
      list = [];
      nextID = 0;
  }

  //two methods
  add (make, model, year); {
    let car = new Car(this.nextID++, make, model, year);
    this.list.push(car);
    
    console.log(this.list);
  }
  remove(carId); {
    //find the car in the wishlistlist that matches the remove id

  
   let index = this.list.findIndex ((car) => car.id == carId);
   //remove it and update wishlist list
   this.list.splice(index, 1);

   //or with filter
   this.list=this.list.filter((car) => car.id != carId);
  
  console.log (list);
  }

//Week 2 HomeWork
/*
* You get to give yourself an awesome vehicle
* It is an object
* Be sure to give it the following:
*   - a name that is a string
*   - a distanceToEmpty that is a number of kilometers it can travel
*   - a speed that is a number and represents the number of km/hr your vehicle can travel
*   - a currentLocation
*   - a honkHorn method that returns a string of the sound that your vehicle makes when you honk the horn
*/

var delorean = {
  'name': 'flash',
  'distanceToEmpty': 50000000,
  'speed': 1000000,
  'currentLocation' : 'Santa Monica',
  'honkHorn': 'Haoooogga'
}
  console.log(delorean.name);
  console.log(delorean.speed);
  console.log(delorean.distanceToEmpty);
  console.log(delorean.currentLocation);
  console.log(delorean.honkHorn);


  function runningCar(speed){
      if(speed<=1000000){
        return "You're making moves";
      } else {
        return "Too Fast";
        }
  }

  car = runningCar(1000000000);
  console.log(car);

  function emptyTank(distanceToEmpty){
      if(distanceToEmpty<=50000000){
        return "Keep going";
      } else {
        return "Running on Empty";
        }
  }

  car = emptyTank(500000000);
  console.log(car);

  function inMyWay(honkHorn){
      if(honkHorn=='Haoooogga'){
        return "Move Out of The Way";
      } else {
        return "Keep on";
        }
  }

  car = inMyWay();
  console.log(car);

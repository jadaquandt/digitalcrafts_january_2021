///For loop on an array
var teslaCars = ["Model S", "Model X", "CyberTruck"]

for (var i=0; i<teslaCars.length; i++){
    console.log(i)
    console.log(teslaCars[i]);
}

//Challenge: Go through the array in reverse and print out each item
var cars = ["Dodge Charger", "McClaran F1", "Model S", "Mustang"];
cars.push("Cruiser");
for(var i = cars.length-1; i>=0; i--) {
  console.log(cars[i]);
}


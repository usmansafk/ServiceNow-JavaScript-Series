//
// L26S01 - Simple Objects
//
var box = {};
box.height = 20;
box.width = 10;
box.length = 10;
box.material = "cardboard";
box.open = true;
gs.info(box.material);

//
// L26S02 - Bracket notation…
//
var vehicle = {};
vehicle["year"] = 2018;
vehicle["make"] = "Toyota";
vehicle["model"] = "Sienna";
gs.info(vehicle["year"] + " " + vehicle["make"] + " " + vehicle["model"]);

//
// L26S03 - Shortcut - note the double quotes
//
var vehicle = {
  year: 2018,
  make: "Toyota",
  model: "Sienna",
};
gs.info(vehicle["year"] + " " + vehicle["make"] + " " + vehicle["model"]);

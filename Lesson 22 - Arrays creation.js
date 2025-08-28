//
// L22S01 - Arrays Intro - how to create...
// Complex data type - an array data type is used to store multiple inputs of same type

// Make a simple array
// Optional declaration, but not preferred:
// var list = Array(); .. rarely used
var list = [];
list[0] = 1;
list[1] = 3;
list[2] = 5;
gs.info("length of list is: " + list.length);

//
// L22S02 - Shorter way
//
var list2 = [1, 3, 5];
gs.info("length of list is: " + list2.length);

//
// L22S03 - Loops and arrays
//
var list3 = [1, 3, 5];
for (var i = 0; i < list3.length; i++) {
  gs.info("i=" + i + " value=" + list3[i]);
}

// Slightly better
var list4 = [1, 3, 5];
var len = list4.length;
for (var i = 0; i < len; i++) {
  gs.info("i=" + i + " value=" + list4[i]);
}

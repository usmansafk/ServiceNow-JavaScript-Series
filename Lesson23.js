//
// L23S01 forEach with external function
//
var list = [1, 3, 5];

list.forEach(myFunction);

function myFunction(item) {
  gs.info("myFunction item=" + item);
}

//
// L23S02 embedded forEach
//
var list2 = [1, 3, 5];

list2.forEach(function (item) {
  gs.info("embedded function item=" + item);
});

//
// L23S03 - What else can you get..
//
var list3 = ["apple", "banana", "orange"];

list3.forEach(function (item, index, arr) {
  gs.info("embedded function item=" + item + " index=" + index + " arr=" + arr);
});

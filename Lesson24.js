//
//  L24S01 - Common array methods/functions
//
var list = ["Chuck", "Kreg", "Stacey"];
gs.info("list=" + list);
gs.info("list=" + list.toString()); // makes certain it is string

//
// L24S02 - join(string)
//
var list2 = ["Chuck", "Kreg", "Stacey"];
gs.info("join: list=" + list2.join(", "));

// push(value1, value2, ..., valueX) - add to end
list2.push("Dave");
list2.push("Andrew");
gs.info("push: list=" + list2.join(", "));

// pop() - remove from end
list2.pop();
gs.info("pop: list=" + list2.join(", "));

//
// L24S03 - shift() - remove from first element
//
var list3 = ["Chuck", "Kreg", "Stacey"];
gs.info("Before shift(), list[0]=" + list3[0]);
list3.shift();
gs.info("shift: list=" + list3.join(", "));
gs.info("After shift(), list[0]=" + list3[0]);

//
// L24S04 - unshift - add to first element
//
var list4 = ["Chuck", "Kreg", "Stacey"];
var newLength = list4.unshift("Jason", "Andrew");
gs.info("new length=" + newLength + " unshift() list=" + list4.join(", "));

//
// L24S05 - splice(position, n-remove, value1, value2, ..., valueX) - add/remove elements somewhere in the middle
//
var names = ["Eric", "Donna", "Melanie", "Jessie"];
gs.info(names.join(", "));
names.splice(2, 0, "Cary", "Henri");
gs.info(names.join(", "));

//
// L24S06 -  slice(start, end) - extract part of an array in to another array
//
var names2 = ["Eric", "Donna", "Melanie", "Jessie", "Howard", "Tomasz"];
gs.info(names2.join(", "));
var subNames = names2.slice(1, 3); // Get names at positions 1 and 2
gs.info(subNames.join(", "));

//
// L24S08 - Reverse the elements of an array
//
var names3 = ["Eric", "Donna", "Melanie", "Jessie", "Howard", "Tomasz"];
names3.reverse();
gs.info(names3.join(", "));

//
// L24S09 - Getting the value
//
var list5 = [];
var incGr = new GlideRecord("incident");
incGr.addQuery("priority", "1");
incGr.query();

while (incGr.next()) {
  list5.push(incGr.getValue("sys_id")); // make sure use getter
}

gs.info("list=\n" + list5.join("\n"));

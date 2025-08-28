//lesson 8 - data type conversations / toString

// javascript is a loosely typed language, e.g.  you are not forced to put an int value on something that should have been int

var i = 5;
var iStr = i.toString(); // change to string

gs.info(typeof i); // number
gs.info(typeof iStr); //string

var n = "2";
var nNumber = parseInt(n); // change back to number
gs.info(typeof nNumber); // number

//lesson 8 - data type conversations / toString

// javascript is a loosely typed language, e.g.  you are not forced to put an int value on something that should have been int

var i = 5;
var iStr = i.toString(); // change to string

gs.info(typeof i); // number
gs.info(typeof iStr); //string

var n = "2";
var nNumber = parseInt(n); // change back to number
gs.info(typeof nNumber); // number

gs.info(i + n); //prints 52 as string
gs.info(i + nNumber); // prints 7

gs.info("------------------------------------------------");

//Lab:
// create 3 string var
// print len of each string
// concatenate them together, without space, but using a newline character
// save it to a new var
// get len of new var
// print len of new var

var a = "Usman";
var b = "Sensei";
var c = "Sajid";
gs.info(a.length);
gs.info(b.length);
gs.info(c.length);

var combined = a + "\n" + b + "\n" + c;
gs.info(combined);
gs.info(combined.length);

// lesson13 switch

var level = 5;
var message = "";

switch (level) {
  case 0:
    message = "Empty";
    break;

  case 1:
    message = "Low";
    break;

  case 3:
    message = "Mid";
    break;

  case 4:
    message = "High";
    break;

  case 5:
    message = "V High";
    break;

  default:
    message = "Uhmm.....";
}

gs.info(message);

// ------

// L13S02 - Multiple cases
//
// Using the switch statement
var level = 5;
var message = "";

switch (
  level // accepts int or string only
) {
  case 0: // type must match above
    message = "Empty";
    break;

  case 1:
  case 2:
    message = "Low";
    break;

  case 3: // Warning - what's wrong with case 3?
    message = "Medium";
  //break;
  case 4:
    message = "High";
    break;

  case 5:
    message = "Full";
    break;

  default:
    message = "Uh-oh!";
}
gs.info("Level=" + level + " status=" + message);

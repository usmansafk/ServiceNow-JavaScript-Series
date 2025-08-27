//lab 5 - nested loops

var team;
var people;
var id = 1;

for (team = 1; team < 5; team++) {
  for (people = 1; people < 4; people++) {
    gs.info("Team = " + team + " Player = " + people + " ID = " + id++);
  }
}

//chucks solution
// var id = 1;
// for (var team = 0; team < 5; team++) {
//     for (var person = 0; person < 4; person++) {
//         gs.info('id=' + id + ' team=' + team+1 + ' person=' + person+1);
//         ++id;
//     }
// }

//

//
// L18S01 - Nested loops
//
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 3; j++) {
//     gs.info('i=' + i + ' j=' + j);
//   }
// }
// gs.info('Done i=' + i + ' j=' + j);

//try catch finnaly

try {
  for (var i = 0; i < 5; i++) {
    gs.info("i = " + i + " answer = " + answer);
  }
} catch (e) {
  gs.info("A runtime error occured: " + e.message);
} finally {
  gs.info("Done");
}

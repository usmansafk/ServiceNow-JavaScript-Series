//Database stuff
//GlideRecord

var incGR = new GlideRecord("incident");
incGR.setLimit(5);
incGR.orderBy("number");
incGR.query();

while (incGR.next()) {
  gs.info(incGR.number); // works but not preffered -- returns type of object
  gs.info(incGR.getValue("number")); // use getters and setters! -- returns type of field
}

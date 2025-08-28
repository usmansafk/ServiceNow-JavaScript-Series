//Bismillah

gs.info("Bismillah");

// Get all Active inc, were Assigned to=Chad Miklas, and print Number

var incGR = new GlideRecord("incident");
incGR.addActiveQuery();
incGR.addEncodedQuery("caller_id=b682abf03710200044e0bfc8bcbe5d0a");
//incGR.addQuery('assigned_to', 'b682abf03710200044e0bfc8bcbe5d0a');
incGR.query();

while (incGR.next()) {
  gs.info("Number: " + incGR.getValue("number"));
}

//  example client side script
function onLoad() {
  alert("Current state value is: " + g_form.getValue("state"));
}

//
// Lab 7:
// Update your previous lab to return the sys_id and
// display value of the records you found using an array of objects.
// Return an array of objects.
//
// @param tableName - name of table to query
// @param limit - integer > 0
// @return array of objects
//    {
//      "display_value" : <display value>,
//      "sys_id" : <sys_id>
//    }
//
function getRecordDisplayValue(tableName, limit) {
  var list = [];
  var tableGR = new GlideRecord(tableName);
  tableGR.setLimit(limit);
  tableGR.query();

  while (tableGR.next()) {
    var obj = {};
    obj["display_value"] = tableGR.getDisplayValue();
    obj["sys_id"] = tableGR.getValue("sys_id");
    list.push(obj);
  }

  return list;
}

var output = getRecordDisplayValue("incident", 3);
gs.info(JSON.stringify(output, null, 4));

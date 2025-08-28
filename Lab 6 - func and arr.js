function getRecordDisplayValue(tableName) {
  var list = [];
  var tableGR = new GlideRecord(tableName);
  tableGR.query();

  while (tableGR.next()) {
    list.push(tableGR.getDisplayValue());
  }

  return list;
}

var output = getRecordDisplayValue("incident").join(" | ");
gs.info(output);

//lab 6b

function getRecordDisplayValue(tableName, limit) {
  var list = [];
  var tableGR = new GlideRecord(tableName);
  tableGR.setLimit(limit);
  tableGR.query();

  while (tableGR.next()) {
    list.push(tableGR.getDisplayValue());
  }

  return list;
}

var output = getRecordDisplayValue("incident", 10).join(" | ");
gs.info(output);

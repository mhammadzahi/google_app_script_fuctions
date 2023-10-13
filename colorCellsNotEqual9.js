function colorCellsInColumnC() {
  var spreadsheetId = '1whBwf6y1fztW0g0uMdVW3ToQ5ccQZavky--XyLaR27s';
  var sheetName = 'trial';
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  var range = sheet.getRange("C2:C" + sheet.getLastRow()); // Start from row 2 to skip the header
  var values = range.getValues();
  

  var colorMapping = {};
  

  var duplicatedValues = [];
  

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  for (var i = 0; i < values.length; i++) {
    var snNumber = values[i][0];
    

    if (!colorMapping[snNumber]) {

      colorMapping[snNumber] = getRandomColor();
    } else {

      duplicatedValues.push(snNumber);
    }
    

    range.getCell(i + 1, 1).setBackground(colorMapping[snNumber]);
  }
  

  console.log("Duplicated Values: " + duplicatedValues);
}


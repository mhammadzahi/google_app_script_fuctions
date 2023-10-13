function removeSpacesFromNumbers() {
  var sheet = SpreadsheetApp.openById("1whBwf6y1fztW0g0uMdVW3ToQ5ccQZavky--XyLaR27s").getSheetByName("Tenancy");
  var data = sheet.getRange("B1:B" + sheet.getLastRow()).getValues();
  
  for (var i = 0; i < data.length; i++) {
    if (typeof data[i][0] === 'string') {

      var cleanedValue = data[i][0].replace(/\s/g, '');
      if (!isNaN(cleanedValue)) {
        data[i][0] = parseFloat(cleanedValue);
      }
    }
  }
  
  sheet.getRange("B1:B" + sheet.getLastRow()).setValues(data);
}

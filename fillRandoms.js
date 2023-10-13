function fillRandomData() {
  var sheet = SpreadsheetApp.openById("1whBwf6y1fztW0g0uMdVW3ToQ5ccQZavky--XyLaR27s").getSheetByName("wrong_tenancy");
  sheet.getRange("A:Y").setNumberFormat("@");
  sheet.getRange("A:Y").setHorizontalAlignment("center");
  sheet.getRange("A:Y").setFontSize(12);
  sheet.getRange("A2:Y").setFontColor("#555555");
  sheet.getRange("A2:Y").setFontWeight("normal");

  var numRows = sheet.getLastRow();
  var randomString, phoneNumber;
  
  for (var i = 2; i <= numRows; i++) {
    randomString = generateRandomString(9);
    phoneNumber = "0501234567";
    
    sheet.getRange(i, 10).setValue(randomString); // Column N is 14th column (indexing starts from 1)
    sheet.getRange(i, 11).setValue(phoneNumber);  // Column O is 15th column
  }
}

function generateRandomString(length){
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var randomString = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}


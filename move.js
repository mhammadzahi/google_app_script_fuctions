function copyColoredRows() {

  var sourceSheet = SpreadsheetApp.openById("1whBwf6y1fztW0g0uMdVW3ToQ5ccQZavky--XyLaR27s").getSheetByName("Tenancy");
  var destSheet = SpreadsheetApp.openById("1whBwf6y1fztW0g0uMdVW3ToQ5ccQZavky--XyLaR27s").getSheetByName("wrong_tenancy");
  
  var dataRange = sourceSheet.getDataRange();
  

  var numRows = dataRange.getNumRows();
  var numCols = dataRange.getNumColumns();
  

  var headerRow = dataRange.offset(0, 0, 1, numCols);
  

  destSheet.getRange(1, 1, 1, numCols).setValues(headerRow.getValues());
  

  for (var i = 2; i <= numRows; i++) { 
    var row = dataRange.offset(i - 1, 0, 1, numCols);
    

    if (hasColoredCells(row)) {
      destSheet.appendRow(row.getValues()[0]);
    }
  }
}

function deleteRowsWithColoredCells(){
  var sourceSheet = SpreadsheetApp.openById("1whBwf6y1fztW0g0uMdVW3ToQ5ccQZavky--XyLaR27s").getSheetByName("Tenancy");
  var dataRange = sourceSheet.getDataRange();
  var numRows = dataRange.getNumRows();
  var numCols = dataRange.getNumColumns();
  for (var i = numRows; i >= 2; i--){
    var row = dataRange.offset(i - 1, 0, 1, numCols);
    if(hasColoredCells(row))
      sourceSheet.deleteRow(i);
    
  }
}


function hasColoredCells(row){
  var values = row.getValues()[0];
  for (var i = 0; i < values.length; i++) {
    var bgColor = row.getCell(1, i + 1).getBackground();
    if (bgColor !== "#ffffff") {
      return true;
    }
  }
  return false;
}


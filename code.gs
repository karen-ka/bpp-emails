function myFunction() {
  
  var spreadSheetID = 'PAIRINGS_SHEET_ID' // !CHANGE ME!
  var DEST_FOLDER = 'DESTINATION_FOLDER_ID' // !CHANGE ME!

  var ss = SpreadsheetApp.openById(spreadSheetID);
  var sheets = ss.getSheets();
  var counter = 1
  var values = sheets[1].getSheetValues(5, 1, 100, 12);
  for(var i = 0; i < values.length; i++) {
    var p1 = values[i][1];
    var p1e = values[i][0];
    var p1mb = values[i][3];
    var p1add = values[i][4];
    var p1on = values[i][5];
    var p2 = values[i][7];
    var p2e = values[i][6];
    var p2mb = values[i][9];
    var p2add = values[i][10];
    var p2on = values[i][11];
    Logger.log(p2mb);
    if(p1add.length < 3 && p2add.length < 3 && p1mb.length < 3 && p2mb.length < 3){ // no data
      break; // probably not valid
    }
    // both ON campus
    if(p1add.length < 3 && p2add.length < 3){
      var file = DriveApp.getFileById('1wif4KqdbF0T1oaqcT3zg31x5ZhTLgIc1W0njjcqAOEg');
      var folder = DriveApp.getFolderById(DEST_FOLDER);
      var copy = file.makeCopy('Pairing #' + counter, folder);
      var doc = DocumentApp.openById(copy.getId()); 
      var body = doc.getBody(); 
      body.replaceText("##NAME1##", p1);
      body.replaceText("##NUM2##", p2mb);
      body.replaceText("##NAME2##", p2);
      body.replaceText("##NUM1##", p1mb);
      body.replaceText("##EMAIL1##", p1e);
      body.replaceText("##EMAIL2##", p2e);
      doc.saveAndClose(); 
    // p1 off campus, p2 on campus
    }else if(p1add.length > 5 && p2add.length < 3){
      var file = DriveApp.getFileById('12F3eQYJJvQF1Ktsk8tyf6LsP7Cvb1kvKqmNtZUouy88');
      var folder = DriveApp.getFolderById(DEST_FOLDER); // INSERT the destination folder ID. Once again, this can be found in the URL once you have the folder openned in your browser
      var copy = file.makeCopy('Pairing #' + counter, folder);
      var doc = DocumentApp.openById(copy.getId()); 
      var body = doc.getBody(); 
      body.replaceText("##OFFCAMPUS_NAME##", p1);
      body.replaceText("##MB##", p2mb);
      body.replaceText("##ONCAMPUS_NAME##", p2);
      body.replaceText("##ADDRESS##", p1add);
      body.replaceText("##OFFCAMPUS_EMAIL##", p1e);
      body.replaceText("##ONCAMPUS_EMAIL##", p2e);
      body.replaceText("##OFF_NAME##", p1on);
      doc.saveAndClose(); 
    // p2 off campus, p1 on campus
    }else if(p2add.length > 5 && p1add.length < 3){
      var file = DriveApp.getFileById('12F3eQYJJvQF1Ktsk8tyf6LsP7Cvb1kvKqmNtZUouy88');
      var folder = DriveApp.getFolderById(DEST_FOLDER); // INSERT the destination folder ID. Once again, this can be found in the URL once you have the folder openned in your browser
      var copy = file.makeCopy('Pairing #' + counter, folder);
      var doc = DocumentApp.openById(copy.getId()); 
      var body = doc.getBody(); 
      body.replaceText("##OFFCAMPUS_NAME##", p2);
      body.replaceText("##MB##", p1mb);
      body.replaceText("##ONCAMPUS_NAME##", p1);
      body.replaceText("##ADDRESS##", p2add);
      body.replaceText("##OFFCAMPUS_EMAIL##", p2e);
      body.replaceText("##ONCAMPUS_EMAIL##", p1e);
      body.replaceText("##OFF_NAME##", p2on);
      doc.saveAndClose();
    // both OFF campus 
    }else if(p2add.length > 6 && p1add.length > 6){
      var file = DriveApp.getFileById('138HYa8nkJYkJCrDPm9RLEI5HOCyT3hkFN03o1y3rqQc');
      var folder = DriveApp.getFolderById(DEST_FOLDER); // INSERT the destination folder ID. Once again, this can be found in the URL once you have the folder openned in your browser
      var copy = file.makeCopy('Pairing #' + counter, folder);
      var doc = DocumentApp.openById(copy.getId()); 
      var body = doc.getBody(); 
      body.replaceText("##NAME1##", p1);
      body.replaceText("##NAME_1##", p1);
      body.replaceText("##ADDRESS2##", p2add);
      body.replaceText("##NAME2##", p2);
      body.replaceText("##ADDRESS1##", p1add);
      body.replaceText("##EMAIL1##", p1e);
      body.replaceText("##EMAIL2##", p2e);
      body.replaceText("##OFF1##", p1on);
      body.replaceText("##OFF2##", p2on);
      doc.saveAndClose(); 
    }
    counter ++;
  }
}

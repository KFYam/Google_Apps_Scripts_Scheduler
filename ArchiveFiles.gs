function createFolderSchedules() {
  var parentFolderId = "XXXXXXXXXXXXXXXXXXXXXXXXXXX";
  var sourceFolderID = "XXXXXXXXXXXXXXXXXXXXXXXXXXX";

  var folderName = new Date().toISOString().substring(0,10);
  var folder = DriveApp.getFolderById(parentFolderId).createFolder(folderName);

  Logger.log("Folder created: " + folder.getName());

  var sourceFolder = DriveApp.getFolderById(sourceFolderId);
  var files = sourceFolder.getFiles();

  while (files.hasNext()) {
    varfile  = files.next();
    file.makeCopy(file.getName(),folder);
  }

  Logger.log("Files copied to the new folder.");
}

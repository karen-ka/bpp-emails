# bpp-emails
google script for automatically filling out email templates

### pre-requisite / troubleshooting

* create a google spreadsheet from the form ("form spreadsheet")

* create an empty folder to put the emails in

* if you're unable to open gscripts, you may have to be logged out of all other google accounts and try again

### how-to

1. Open [the pairing template](https://docs.google.com/spreadsheets/d/1Zm4m6lf34j4Xbx0qGSlC5Lbwu5KtXTON32og-0ghtVE/edit#gid=415438612). Right-click on the tab on the bottom named **template** -> click "copy-to" -> select the form spreadsheet.

2. You should see a new tab added to the form spreadsheet. **Make sure the template is the 2nd sheet on the spreadsheet!** Fill out the info - each row should contain a single pairing. Leave any fields blank if they are not applicable.

3. **This only has to be done once per new spreadsheet:** When finished with all pairings, click on Tools -> Script editor. Copy paste the contents of `code.gs`, filling in the following necessary fields (keep the quotes around the ID's!) and making sure to **save** after you're done. 

- `var spreadSheetID = 'PAIRINGS_SHEET_ID'` on line 2. This should just be the url of the form spreadsheet

- `var DEST_FOLDER = 'DESTINATION_FOLDER_ID'` on line 22

4. Done! When ready to generate the emails, click on the button on the template page, and wait a few minutes - the emails should pop up in your destination folder. Happy pairing : )


### id examples

You can find the id's by navigating to the spreadsheet/folder and copying the contents of the url. Here's some examples:

If the url is https://docs.google.com/spreadsheets/d/1Zm4m6lf34j4Xbx0qGSlC5Lbwu5KtXTON32og-0ghtVE/edit#gid=415438612, the ID would be `1Zm4m6lf34j4Xbx0qGSlC5Lbwu5KtXTON32og-0ghtVE` - the stuff in between /d/ and /edit. 

For https://drive.google.com/drive/u/0/folders/1s1KVtpLPcNl-jhqfKrlP3YUtc-Cggk3X, the ID is the stuff at the end - `1s1KVtpLPcNl-jhqfKrlP3YUtc-Cggk3X`.

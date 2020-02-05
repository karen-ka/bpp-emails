# bpp-emails
google script for automatically filling out email templates

### pre-requisite / troubleshooting

* create a google spreadsheet from the form

* create an empty folder to put the emails in

* if you're unable to open gscripts, you may have to be logged out of all other google accounts and try again

### how-to

1. Open [the pairing template](https://docs.google.com/spreadsheets/d/1Zm4m6lf34j4Xbx0qGSlC5Lbwu5KtXTON32og-0ghtVE/edit#gid=415438612). Right-click on the tab on the bottom named **template** -> click "copy-to" -> select the spreadsheet created for the form.

2. You should see a new tab added to the form spreadsheet. **Make sure this is the 2nd sheet on the spreadsheet!** Fill out the info - each row should contain a single pairing. Leave any fields blank if they are not applicable

3. **This only needs to be done once:** When ready to generate emails, click on Tools -> Script editor. Copy paste the contents of `code.gs`, filling in the necessary fields:

- `var spreadSheetID = 'PAIRINGS_SHEET_ID'` on line 2

- `var DEST_FOLDER = 'DESTINATION_FOLDER_ID'` on line 22

You can find the id's by navigating to the spreadsheet/folder and copying the contents of the url. Here's some examples:

If the url is https://docs.google.com/spreadsheets/d/1Zm4m6lf34j4Xbx0qGSlC5Lbwu5KtXTON32og-0ghtVE/edit#gid=415438612, the ID would be `1Zm4m6lf34j4Xbx0qGSlC5Lbwu5KtXTON32og-0ghtVE` - the stuff in between /d/ and /edit. 

For https://drive.google.com/drive/u/0/folders/1s1KVtpLPcNl-jhqfKrlP3YUtc-Cggk3X, the ID is the stuff at the end - `1s1KVtpLPcNl-jhqfKrlP3YUtc-Cggk3X`.

Once that's done, make sure to **save**.

4. Done! Click on the button on the template page, and wait a few minutes - the templates should pop up in your destination folder.

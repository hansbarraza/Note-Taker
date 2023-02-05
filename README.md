# Note Taker

## Description
This is a simple Express.js based application for taking and storing notes. The application serves an HTML page at where the user can view, add and delete notes. The notes are stored in a JSON file in the /db directory.

## Features
* View notes: The application serves an HTML page that displays all the existing notes.
* Add notes: The user can add a new note by clicking on the "Add a Note" button and filling in the form.
* Delete notes: The user can delete a note by clicking on the trash icon.

## Technical Details
* The application is built using Express.js
* The notes are stored in a JSON file located at /db/db.json.
* The fs module is used to read and write the JSON file.
* The application uses the express.json() and express.urlencoded({ extended: true}) middleware to parse JSON and URL-encoded data from the client.
* The express.static('public') middleware is used to serve the static assets located in the /public directory.
* The application listens on port 3001 by default, but this can be overridden by setting the PORT environment variable.

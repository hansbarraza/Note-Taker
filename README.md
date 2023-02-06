# Note Taker

## Description
This is a simple Express.js based application for taking and storing notes. The application serves an HTML page at where the user can view, add and delete notes. The notes are stored in a JSON file in the /db directory.

![Demo of Note Taker](/public/assets/video-demo/note-taker.gif)

https://murmuring-cove-00458.herokuapp.com/

## Features
* View notes: The application serves an HTML page that displays all the existing notes.
* Add notes: The user can add a new note by filling in the form and clicking on the save icon.
* Delete notes: The user can delete a note by clicking on the trash icon.

## Technical Details
* The application is built using Express.js
* The notes are stored in a JSON file located at /db/db.json.
* The fs module is used to read and write the JSON file.
* The application uses the express.json() and express.urlencoded({ extended: true}) middleware to parse JSON and URL-encoded data from the client.
* The express.static('public') middleware is used to serve the static assets located in the /public directory.
* The application listens on port 3001 by default, but this can be overridden by setting the PORT environment variable.
* Application is deployed on heroku: Heroku is a cloud platform as a service (PaaS) that enables developers to build, run, and manage applications entirely in the cloud.

 ## Questions
  If you have any questions about this project contact me directly at barraza24@gmail.com. You can also view more of my work at https://github.com/hansbarraza.

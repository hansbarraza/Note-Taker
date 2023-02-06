// Imports the required modules
const fs = require('fs');
const express = require('express');
const path = require('path');
// Initializes the express framework
const app = express();
// Defines a constant PORT to use the enviroment variable or default to 3001
const PORT = process.env.PORT || 3001;
// Middleware to handle static files in 'public' directory and handle url encoded data and parse JSON data
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// Get requests for the root and notes endpoint, sending back HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});
// Post request endpoint to add a new note to the database by reading, parsing and modifying notes
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    fs.readFile(path.join(__dirname, '/db/db.json'), 'utf-8', (err, data) => {
        if (err) throw err;
    const currentNote = JSON.parse(data);
    let highestId = 0;
    currentNote.forEach(note => {
        if (note.id > highestId){
            highestId = note.id;
        }
    });
    newNote.id = highestId + 1;
    currentNote.push(newNote);
    fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(currentNote), (err) => {
        if (err) throw err;
        res.json(currentNote);
    });
    });
});
// Get request endpoint to get all the notes from database
app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '/db/db.json'), 'utf-8', (err, data) => {
        if (err) throw err;
    res.json(JSON.parse(data));
    });
});
// Delete request endpoint to delete a note from database 
app.delete('/api/notes/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '/db/db.json'), 'utf-8', (err,data) => {
        if (err) throw err;
    let currentNote = JSON.parse(data);
    let noteId = req.params.id;
    currentNote = currentNote.filter(note => note.id != noteId);
    fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(currentNote), (err) => {
        if (err) throw err;
        res.json({ success: true});
    });
    });
});

app.listen(PORT, () => console.log('Server listening on port ' + PORT));
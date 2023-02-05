const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

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

app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '/db/db.json'), 'utf-8', (err, data) => {
        if (err) throw err;

        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => console.log('Server listening on port ' + PORT));
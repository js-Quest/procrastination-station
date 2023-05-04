const app = require('express').Router();
const { readAndAppend, readFromFile, deleteNote } = require('../helpers/fsHelper');
const uuid = require('../helpers/uuid')


// GET route for retrieving the notes list on left side of page
app.get('/', (req,res) => {
  console.info(`${req.method} request received for notes`);

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

// POST route for submitting notes
app.post('/', (req,res) => {
  console.info(`${req.method} request received to submit new note`);

  // destructure assignment for items in req.body
  const {title, text } = req.body;

  // check for required elements
  if (title && text) {
    console.log(req.body);
    // save in object
    const newNote = {
      title,
      text,
      id: uuid()
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote
    };
    res.json(response);
  }else{ 
    res.json('error in posting note')
  }
});

app.delete('./', (req,res) => {
  console.info(`${req.method} request received to delete note`);

  deleteNote('./db/db.json', req)

})

module.exports = app;
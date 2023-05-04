const app = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsHelper');


// GET route for retrieving the notes
app.get('/', (req,res) => {
  console.info(`${req.method} request received for notes`);

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

// POST route for submitting notes
app.post('/', (req,res) => {
  console.info(`${req.method} request received to submit new note`);

  // destructure assignment for items in req.body
  const {title, text} = req.body;

  // check for required elements
  if (title && text) {
    // save in object
    const newNote = {
      title,
      text
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

module.exports = app;
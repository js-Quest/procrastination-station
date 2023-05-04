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
  const newNote = {
    title,
    text
  };

  // fetch POST request to server
})





module.exports = app;
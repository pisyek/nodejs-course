const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse('List of notes:'));
    notes.forEach(function(note, index){
        console.log(index+1 + " " +note.title);
    });
};

const removeNote = (title) => {
  const notes = loadNotes();
  const keepNotes = notes.filter((note) => note.title !== title);

  if (notes.length === keepNotes.length) {
      console.log(chalk.red.inverse('Note not found!'));
  } else {
      saveNotes(keepNotes);
      console.log(chalk.green.inverse('Note removed!'));
  }
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!!duplicateNote) {
        console.log(chalk.red.inverse('Title is taken!'));
    } else {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (!!note) {
      console.log(chalk.default.inverse(note.title));
      console.log(note.body);
  } else {
      console.log(chalk.red.inverse('Note not found.'));
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());
    } catch (e) {
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
};
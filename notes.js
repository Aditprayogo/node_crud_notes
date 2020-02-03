const fs = require('fs')
const chalk = require('chalk')

const getName = () => {
    return 'Your notes is...'
};

const addNotes = (title, body) => {

    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    // kalau gk ada data ducplicate
    // berarti boleh push ke datajson
    if (duplicateNotes.length === 0) {

        // push ke dalam array
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('new note added')

    } else {
        // ada duplicate
        console.log(chalk.bgRed('Note has been taken'))

    }


}

const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes)
    //JSON.stringify turns a JavaScript object into JSON text and stores that JSON text in a string
    // write file dalam bentuk JSON text
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        //JSON.parse turns a string of JSON text into a JavaScript object,
        // menconvert data string menjadi javascript object
        return JSON.parse(dataJson)
    } catch (error) {

        return []
    }
}

module.exports = {
    getName: getName,
    addNotes: addNotes
}
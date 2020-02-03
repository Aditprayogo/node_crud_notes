const fs = require('fs')
const chalk = require('chalk')

const getName = () => {
    return 'Your notes is...'
};

const addNotes = (title, body) => {

    const notes = loadNotes()
    // duplicate notes
    // filter
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
        console.log(chalk.bgGreen.red('Note has been edited'))

    } else {
        // ada duplicate
        console.log(chalk.bgRed('Note has been taken'))

    }


}

const removeNotes = (title) => {

    // load existing note
    const notes = loadNotes()

    const notesToKeep = notes.filter(function (note) {
        // kalau note tidak sama sama yang mau di hapus
        return note.title !== title
    })
    saveNotes(notesToKeep);

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
        // kalo filenya gk ada
        // simpan ke array kosong
        return []
    }
}

module.exports = {
    getName: getName,
    addNotes: addNotes,
    removeNotes: removeNotes
}
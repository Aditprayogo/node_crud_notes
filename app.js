const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')

const notes = require('./notes')

//create add comment
yargs.command({
    command: 'add',
    describe: 'add a new notes',
    builder: {
        title: {
            describe: 'Note title',
            //default is false 
            demandOption: true,
            type: 'string',

        },
        body: {
            describe: 'add a new body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
    }
})

//remove comment
yargs.command({
    command: 'remove',
    describe: 'Remove a node',
    builder: {
        title: {
            demandOption: true,
            type: 'string',
            describe: 'Delete notes'
        }
    },
    handler: (argv) => {
        notes.removeNotes(argv.title)
    }
})

//remove comment
yargs.command({
    command: 'list',
    describe: 'List a node',
    handler: () => {
        notes.listNotes()
    }
})

//remove comment
yargs.command({
    command: 'read',
    describe: 'Read a node',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNotes(argv.title)
    }
})

yargs.parse()




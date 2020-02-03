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
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

//remove comment
yargs.command({
    command: 'remove',
    describe: 'Remove a node',
    handler: function () {
        console.log('Removing a note')
    }
})

//remove comment
yargs.command({
    command: 'List',
    describe: 'List a node',
    handler: function () {
        console.log('List a note')
    }
})

//remove comment
yargs.command({
    command: 'Read',
    describe: 'Read a node',
    handler: function () {
        console.log('Read a note')
    }
})

yargs.parse()




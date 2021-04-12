const yargs = require('yargs');

yargs.command({
    command: 'add',
    builder: {
        title: {
            describe: 'Add action',
            type: 'string',
        },
        body: {
            describe: 'The sum is:',
            type: 'number',
        }, 
    },
    handler: function (a,b) {
        let sum = a + b;
        console.log('body:' + sum);
    }
})
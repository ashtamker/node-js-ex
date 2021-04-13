const { require } = require("yargs");

const yargs = require('yargs');


yargs.command({
    command: ' pow',
    describe: 'power the number',
    builder: {
        x: {
            type: 'integer',

        },

    },
    handler: function(){
        
    }
})
const fs = require('fs')


fs.writeFileSync('new.txt','first lesson in nodejs');
fs.copyFileSync('new.txt', 'copyNew.txt');
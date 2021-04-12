const fs = require('fs');


fs.writeFileSync('new.txt','first lesson in nodejs');
fs.copyFileSync('new.txt', 'copyNew.txt');
fs.rename('copyNew.txt', 'setNewName.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });
// 
const list = () => {
    const files = fs.readdirSync('./');
    console.log(files);
}
 
list();
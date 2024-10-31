const fs = require ('fs');

fs.readFile('Nama.txt','utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Nama saya : ',data);
})
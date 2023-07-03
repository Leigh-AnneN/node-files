
const fs = require('fs');
const process = require('process')

// read file at path and print it out
function cat(path) {


    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        console.log(data);
    });
}

cat(process.argv[2]);

const fs = require('fs'); // load built-in module 

let data = "";

fs.readFile("threads.js", (err, content) => {
    data = content.toString();
    console.log("Read ", data);
});

fs.readFile("async.js", (err, content) => {
    data = content.toString();
    console.log("Read ", data);
});

console.log("Bye!!!");

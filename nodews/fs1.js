const fs = require('fs'); // load built-in module 

// Blocking API bad to use in NodeJS
let data = fs.readFileSync("threads.js"); // blocking API

console.log(data.toString());


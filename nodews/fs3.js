const fs = require('fs'); // load built-in module 

// stream based ==> apt for streaming api

let stream = fs.createReadStream("threads.js");

stream.on("data", (chunk) => {
    console.log(chunk.toString()); // can execute multiple times depending on size of file
});

stream.on("error", (err) => {
    console.log("Error" , err);
});

stream.on("end", () => {
    console.log("***********");
})
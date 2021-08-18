let http = require('http'); 
const fs = require('fs'); // load built-in module 
 // http://localhost:9999/
let server = http.createServer( (req,res) => {
    let stream = fs.createReadStream("./src/math.js"); // very big file // episode 1 of GOT
    stream.on("data", (chunk) => {
       res.write(chunk.toString()); // can execute multiple times depending on size of file
    });
    stream.on("end", () =>  res.end());
});

server.listen(9999, () => console.log("server started [http://localhost:9999]"));
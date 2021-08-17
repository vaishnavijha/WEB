let http = require('http'); // look out for built-in module else in "node_modules"
let url = require('url');
let math = require('./math');

// http://localhost:3000/add?x=20&y=15
// http://localhost:3000/sub?x=20&y=15

let server = http.createServer( (req,res) => {
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url, true).query;
    if(pathname === '/add') {
        res.write(math.add(parseInt(query["x"]),parseInt(query["y"]) ).toString());
    } else if (pathname === '/sub') {
        res.write(math.sub(parseInt(query["x"]),parseInt(query["y"]) ).toString());
    }
    res.end();
});

server.listen(3000, () => console.log("server started [http://localhost:3000]"));
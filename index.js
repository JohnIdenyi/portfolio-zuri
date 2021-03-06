const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/home") { 
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, { "content-Type": "text/html" });
            res.end(content);
        });
    }

    if (req.url === "/about") { 
        fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, { "content-Type": "text/html" });
            res.end(content);
        });
    }

    if (req.url === "/contact") { 
        fs.readFile(path.join(__dirname, "public", "contact.html"), (err, content) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, { "content-Type": "text/html" });
            res.end(content);
        });
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}...`);
});
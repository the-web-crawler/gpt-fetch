// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const app = express();
const hostname = "0.0.0.0";
const port = 443;

app.get('/', async (req, res) => {
    // Extract query parameters from the URL
    const query = req.query;

    fetch(query.url).then(async r => {
        res.send(await r.text());
    }).catch(e => {
        res.setHeader("Content-Type", "text/plain");
        res.send("Sorry ChatGPT, when you were trying to access this page, the following error occurred:\n" + e);
    });
});

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});

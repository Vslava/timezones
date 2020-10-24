const fs = require('fs');
const path = require('path');
const express = require('express');

const distDir = 'dist';
const indexFile = 'index.html';
const distPath = path.join(__dirname, '..', distDir);

const app = express();

app.use(express.static(distPath, { index: false }));

app.all('*', (req, res, next) => {
  fs.readFile(path.join(distPath, indexFile), 'utf-8', (err, html) => {
    if (err) return next(404);

    res.contentType('text/html');
    res.send(html);
  });
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`Listening on ${port}`);
  console.log('local dir:', distDir);
  console.log('index file:', indexFile);
});

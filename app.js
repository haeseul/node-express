const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/addUrl', (req, res) => {
    res.send('added URL request');
});

// createServer와 같은 기능
app.listen( port, () => {
    console.log('Express listening on port', port);
});
const express = require('express');

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello express yeah');
});

app.get('/addUrl', (req, res) => {
    res.send('added URL request');
});

// admin까지는 상단의 admin의 url을 따라라
app.use( '/admin', admin );
app.use( '/contacts', contacts );

// createServer와 같은 기능
app.listen( port, () => {
    console.log('Express listening on port', port);
});
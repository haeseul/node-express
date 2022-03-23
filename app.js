const express = require('express');
const nunjucks = require('nunjucks');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

// template를 기본 폴더로 하고, 이후에 생성하는 것은 template의 하위 폴더로 생성됨
nunjucks.configure('template', {
    autoescape: true,
    express: app
});

app.get('/', (req,res) => {
    res.send('express start');
});

// Routing
app.use('/admin', admin);
 
app.listen( port, () => {
    console.log('Express listening on port', port);
});
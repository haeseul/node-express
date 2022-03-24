const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

// template를 기본 폴더로 하고, 이후에 생성하는 것은 template의 하위 폴더로 생성됨
nunjucks.configure('template', {
    autoescape: true,
    express: app
});

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.send('express start');
});

// admin 전체에 미들웨어 세팅
function vipMiddleware (req, res, next) {
    console.log('최우선 미들웨어');
    next();
}

// Routing
app.use('/admin', vipMiddleware, admin);
 
app.listen( port, () => {
    console.log('Express listening on port', port);
});
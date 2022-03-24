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

app.use('/uploads', express.static('uploads'));

app.use((req, res, next) => {
    app.locals.isLogin = true;
    app.locals.req_path = req.path;
    next();
});

app.get('/', (req,res) => {
    res.send('express start');
});

// Routing
app.use('/admin', admin);

// 모든 라우팅 이후에 에러 잡음
app.use((req, res, _) => {
    res.status(400).render('common/404.html');
});
app.use((req, res, _) => {
    res.status(500).render('common/500.html');
});
 
app.listen( port, () => {
    console.log('Express listening on port', port);
});
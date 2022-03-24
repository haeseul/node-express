const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

class App {
    constructor() {
        this.app = express();

        // 뷰엔진 세팅
        this.setViewEngine();

        // 미들웨어 세팅
        this.setMiddleWare();

        // 정적 디렉토리 추가
        this.setStatic();

        // 로컬 변수
        this.setLocals();

        // 라우팅
        this.getRouting();

        // 404 에러
        this.status404();

        // 에러처리
        this.errorHandelr();
    }


    setMiddleWare() {
        // 미들웨어 세팅
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    setViewEngine() {
        // template를 기본 폴더로 하고, 이후에 생성하는 것은 template의 하위 폴더로 생성됨
        nunjucks.configure('template', {
            autoescape: true,
            express: this.app
        });
    }

    setStatic() {
        this.app.use('/uploads', express.static('uploads'));
    }

    setLocals() {
        // 템플릿 변수
        this.app.use((req, res, next) => {
            this.app.locals.isLogin = true;
            this.app.locals.req_path = req.path;
            next();
        });
    }

    getRouting() {
        // controllers 폴더에 라우팅 격리
        this.app.use(require('./controllers'));
    }

    status404() {
        // 모든 라우팅 이후에 에러 잡음
        this.app.use((req, res, _) => {
            res.status(400).render('common/404.html');
        });
    }

    errorHandelr() {
        this.app.use((req, res, _) => {
            res.status(500).render('common/500.html');
        });
    }
}


module.exports = new App().app;
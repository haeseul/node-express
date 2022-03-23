const express = require('express');
const router = express.Router();

function testMiddleware( req, res, next ) {
    console.log('첫번째 미들웨어');
    next();
}

router.get('/', testMiddleware, (req,res) => {
    res.send('admin app');
});

router.get('/products', function(req, res) {
    res.render( 'admin/products.html' , {
        message: "hihi" ,
        online : "hi hello~"
    } // message 란 변수를 템플릿으로 내보낸다.
    );
});

module.exports = router;
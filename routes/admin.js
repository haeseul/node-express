const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
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
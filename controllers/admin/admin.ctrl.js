exports.get_products = (req, res) => {
    res.render( 'admin/products.html' , {
        message: "hihi" ,
        online : "hi hello~"
    } // message 란 변수를 템플릿으로 내보낸다.
    );
}

exports.get_products_write = (req, res) => {
    res.render('admin/write.html');
}

exports.post_products_write = (req, res) => {
    res.send(req.body);
}
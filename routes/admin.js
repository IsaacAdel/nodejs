const express = require('express');
const path = require('path');
const router = express.Router() ;
const routDir = require('../helpers/path');
// router is a path or 
const products = [];

router.get('/add-product',(req,res,next)=>{
    // res.sendFile(path.join(routDir,'views','add-product.html'));
    res.render('add-product',{pageTitle :"AddProduct", path : "/admin/add-product"})
}); /*because of the action = "/product" so it's going to the product page */


router.post('/add-product',(req,res,next)=>{ /* we can use post to edit */
    products.push({title:req.body.title}); 
    /* 
    Using req.body.title instead of just req.
    body allows you to specifically access and extract
     the value of the "title" property from the request body
     .*/
     //{title: req.body.title} creates a new object literal with a property named title.
    res.redirect('/'); // redirect the client to the / page
});


/*
here we export the router that we exports the middlewares
that we use router to mak 
*/

exports.routes = router;
exports.products = products;

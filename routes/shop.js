const express = require('express');
const path = require('path');
const routes = express.Router() ;
const routDir = require('../helpers/path');
const adminData = require('./admin')
// let src = document.querySelector('#src');
// let imageSrc = document.querySelector('.image');
// imageSrc = src ;
routes.get('/',(req,res,next)=>{ // now if any page start with slach will load this content
   const products = adminData.products;
   const docTitle = 'Shop'
   let reverseProducts = [];
   for(let i = 0 ; i < products.length ; i++){
     reverseProducts = products.push(products[-1]);
   }
    res.render('shop',{prods: reverseProducts , pageTitle: docTitle , path : '/'});//We also don't need shop.pug because we defined pug as the default templating engine
});

module.exports = routes;
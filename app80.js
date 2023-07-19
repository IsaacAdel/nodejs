const path = require('path');

const express = require('express');
const bodyparser = require('body-parser')// will help us to get the data and parse it
// const exphbs = require('express-handlebars');
import { engine } from 'express-handlebars';
app.engine('handlebars', engine());


const app = express();


// app.set('view engine','pug');
//app.engine('handlebars', exphbs());// this register a new templating engine 
app.set('view engine','handlebars')
// app.set is a method used to configure the application settings or properties
app.set('views','views')
// app.set('views','name of folder')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const rootDir = require('../V80/helpers/path');


app.use(bodyparser.urlencoded({extended : false}));
/*
 to change from the code hexa to the text extended false to the data which isn't complicated 
*/
app.use(express.static(path.join(__dirname,'public'))); //we serve css statically  
app.use('/admin',adminData.routes); //here we add /admin to any url come from admin.js 
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:' 404 Not Found'}) /*./ mean that the foder
     we need "views" is in the folder that we are set now 
     rootDir represent the dirname of the mainModdule (app.js) we delete dirname to write it
     */
})

//  const server = http.createServer(app);
    
 app.listen(3002, () => {
    console.log('Server is running on port 3002');
  }); // now we can delete require http because of 


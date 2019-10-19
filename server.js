const express = require('express');
const app = express();
const PORT = 3000;
const methodOverride = require('method-override');

require('./db/db');
 
app.set('view engine', 'ejs') // renders files as Ejs
app.use(methodOverride('_method'))
app.use(express.json()) // parse JSON data 
app.use(express.urlencoded({extended: false}))

const routerController = require('./controllers/router')
app.use('/players', routerController);

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
})
'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const expressHandlebars = require('express-handlebars');

app.use(express.static(__dirname+'/public'));

app.engine('hbs', expressHandlebars.engine({
    layoutDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout'
}));

app.set('view engine', 'hbs');

// routes
app.use('/', require('./routes/indexRouter'));

// khoi dong web server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


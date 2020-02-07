const express = require('express');
var bodyParser = require("body-parser");
const path = require('path');
const fileupload = require('express-fileupload');
const indexRouter = require('./controllers/index');
const productRouter = require('./controllers/products');
const errorRouter = require('./controllers/error');
const log = require('./helpers/logger');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(fileupload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/error', errorRouter);

const port = process.env.PORT || 3030;
app.listen(port, () => log(`Server running on port: ${port}`));
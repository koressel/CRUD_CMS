const express = require('express');
var bodyParser = require("body-parser");
const path = require('path');
const indexRouter = require('./controllers/index');
const loginRouter = require('./controllers/login');
const productRouter = require('./controllers/products');
const blogRouter = require('./controllers/blog');
const errorRouter = require('./controllers/error');
const log = require('./helpers/logger');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/deleteProduct', productRouter);
app.use('/deleteBlogPost', blogRouter);
app.use('/error', errorRouter);
app.use('/login', loginRouter);

const port = process.env.PORT || 3030;
app.listen(port, () => log(`Server running on port: ${port}`));
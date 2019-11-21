const cons = require('consolidate');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use('/static', express.static('public'));

app.get('/', (req, res) => res.render('index'));
app.get('/index', (req, res) => res.render('index'));
app.get('/tour', (req, res) => res.render('tour'));
app.get('/admin', (req, res) => res.render('admin'));
app.get('/fans', (req, res) => res.render('fans'));
app.get('/news', (req, res) => res.render('news'));
app.get('/concert', (req, res) => res.render('concert'));
app.get('/error', (req, res) => res.render('error'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
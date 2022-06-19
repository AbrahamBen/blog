var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Article = require('./models/article.model');
const Category = require('./models/category.model');
const bodyParser =  require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//Prise en charge du json
app.use(bodyParser.json());

//Prise en charge des formulaires HTML
app.use(bodyParser.urlencoded({extended:false}));
const mongoose = require('mongoose');
const {log} = require("debug");
mongoose.connect('mongodb://localhost:27017/blog')
    .then(()=> console.log('La connexion à MongoDB réussie'))
    .catch(()=>console.log('Echec de le connexion à MongoDB'));

for (let i = 0; i < 8; i++) {
  article = new Article({
    title :'Qu\'est-ce que  le Lorem ipsum dolor sit amet ?',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibusLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibusLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibusLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibusLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibusLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibusLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibus',
    publishedAt: Date.now()
  })
  //article.save();
}

for (let i = 0; i < 8; i++) {
  category = new Category({
    title :'Formation JavaScript',
    description:'LHic oreutatisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibusLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibusLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibusLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibusLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibusLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt modi non porro soluta, tempore. Deleniti dolores exercitationem, facilis, ipsam mollitia, nisi nostrum nulla odit quaerat quam quo reprehenderit voluptatibus',
  })
  //category.save();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

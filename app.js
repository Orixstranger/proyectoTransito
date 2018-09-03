var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//Upload
var multipart = require('connect-multiparty');

var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');


var app = express();
//-------------------------------------------------------------------------------------
//nuevos datos
app.use(bodyParser.urlencoded('extended: true'));
app.use(bodyParser.json());


//nuevos datos session secert
app.use(session({secret: 'ACT Loja', resave: true, saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(multipart());




//----------------------------------------------
//nuevos codigos
var models = require('./models');
models.sequelize.sync().then(() => {
    console.log('Se ha conectado la base de datos');
}).catch(err => {console.log(err, 'Hubo un error');});
require('./config/pasaporte/passport.js')(passport, models.agente, models.persona, models.rol);
//----------------------------------------------
//---Datos originales
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

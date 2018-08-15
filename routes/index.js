var express = require('express');
var router = express.Router();

/*router.get('/transito/templates/forma11', function (req, res, next) {
 res.render('vistas/app', {title: "Prueba vista 1"});
 });
 
 router.get('/transito/templates/forma12', function (req, res, next) {
 res.render('vistas/app_1', {title: "Prueba vista 2"});
 });*/

/* GET home page. */
router.get('/home', function (req, res, next) {
       res.render('vistas_1/plantilla', {title: "Home", archivo: "./dinamic/app", h1: "AGENTE CIVIL DE TRÁNSITO", 
           fragmento: "../fragmentos/usuario/usuario_register.ejs"});
});



//router.get('/transito/templates/home', function (req, res, next) {
    //res.render('vistas_1/plantilla', {title: "Home", archivo: "./dinamic/app", h1: "AGENTE CIVIL DE TRÁNSITO"});
//});
//registro
router.get('/citacion', function (req, res, next) {
    res.render('vistas_1/plantilla', {title: "Citacion", archivo: "./dinamic/citacion", h1: "Infracciones de Tŕansito", fragmento: "../fragmentos/usuario/usuario_register.ejs"});
});

//LOGIN
router.get('/login', function (req, res, next) {
    res.render('login');
});
router.post('/login', function (req, res, next) {
    var email = req.body.login;
    var clave = req.body.password;
    if (email == 'deisons8@gmail.com' && clave == '1234') {
        req.session.user = 'Administrador';
        //req.session.save();
        console.log(req.session.user + " *********** ");
        req.session.cookie.expires = false;
        res.redirect("/transito/templates/home");
    } else {
        res.redirect('/login');
    }

});

router.get('/registro', function (req, res, next) {
    res.render('vistas_1/plantilla', {title: "Registro", archivo: "./dinamic/registro_citacion", h1: "Registro",
    fragmento: "../fragmentos/usuario/cabecera_registro.ejs"});
});

router.get('/acerca', function (req, res, next) {
    res.render('vistas_1/plantilla', {title: "Quienes Somos",fragmento: "../fragmentos/usuario/usuario_register.ejs", archivo: "./dinamic/acerca", h1: "¿QUIENES SOMOS?"});
});

router.get('/transito/cerrar', function (req, res, next) {
    req.session.destroy();
    res.render('/');
});
//administrador
/*router.get('/registro/administrador', function (req, res, next) {
 var login = (req.session.user != undefined);
 if (login == true) {
 res.render('templates/app', {title: 'Principal', login: login,
 fragmento: '../fragmentos/administrador/frmadmin', usuario: req.session.user});
 } else {
 res.render('templates/app', {title: 'Principal', login: login});
 }
 });*/

//router.post('/registro/administrador', administradorController.guardar);

/*router.get('/noticias/acerca/:a/:b', function(req, res, next) {
 res.render('acerca', { title: 'Acerca de noticas', descripcion: 'las noticias que se quiera publicar '+req.params.id});
 });*/

//router.get('/noticias/resta/:a/:b', pruebasi.resta);
//router.get('/noticias/suma/:a/:b', obj.suma);
//router.post('/noticias/suma/', obj.sumarPost);

router.get('/administracion/principal', function (req, res, next) {
    //var login = (req.session.user != undefined);
    //if (login == true) {
    //res.render('templates/app', {title: 'Principal', login: login,
    //fragmento: '../fragmentos/noticias/frm_noticias'});
    //} else {
    //res.render('templates/app', {title: 'Principal', login: login});
    //}
    //res.render('suma', { title: 'Sumar dos variables'});
});

module.exports = router;

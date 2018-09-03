var express = require('express');
var router = express.Router();
var wkhtmltopdf = require('wkhtmltopdf');
var path = require('path');
var saveToPDF = require('./pdfhelper');
//-------------------------------------------------------------
var autentification = require('../controllers/AdministradorController');
var authController = new autentification();
var passport = require('passport');

var citacion = require('../controllers/CitacionController');
var citController = new citacion();
//-------------------------------------------------------------

/* GET home page. */
router.get('/pdf', (req, res) => {
       
    saveToPDF('buscar_infractor',path.resolve(__dirname,'./test2.pdf'),{},() =>{
        res.send('ok')
    });
});

router.get('/home', citController.verHome);

router.get('/', citController.verIntro);

router.get('/acerca', citController.verAcerca);

router.get('/citacion', citController.verArticuloCitacion);

router.get('/inicio', authController.signin);
router.post('/login', passport.authenticate('local-signin', {successRedirect: '/buscar_infractor',
    failureRedirect: '/home'}
));

//registro
router.post("/registro/save", passport.authenticate('local-signup', {successRedirect: '/registro_citacion',
    failureRedirect: '/home'}
));

//INFRACTOR
//vista infractor
router.get('/buscar_infractor', citController.buscarInfractor);
router.get('/crear_infractor', citController.crearInfractor);
//buscar infractor
router.post('/buscar', citController.buscar);
//crear infractor
router.post('/registroInfractor', citController.registrarNuevoInfractor);

//PLACA
//vista placa
router.get('/buscar_placa', citController.buscarPlaca);
router.get('/crear_placa', citController.crearPlaca);
//buscar placa
router.post('/metodoBuscarPlaca', citController.metodoBuscarPlaca);
//crear placa
router.post('/registroPlaca', citController.registrarNuevaPlaca);

//ARTICULO
//VISTA ARTICULO
router.get('/buscar_articulo', citController.buscarArticulo);
//BUSCAR ARTICULO
router.post('/metodoBuscarArticulo', citController.metodoBuscarArticulo);

router.get('/registro_citacion', citController.verRegistroCitacion);

//CITACION
//VISTA CREAR CITACION
router.get('/crear_circunstancia', citController.crearCircunstancia);
router.get('/buscar_citacion', citController.buscarCitacion);
//crear citacion
router.post('/registrarCitacion', citController.registrarCitacion);
//metodo buscar citacion
router.post('/metodoBuscarCitacion', citController.metodoBuscarCitacion);

//MAPA
router.get('/mapa', citController.mapaGeolocalizacion);
router.get('/confirmacion', citController.confirmacion);

//CERRAR PAGINA
router.get('/cerrar', citController.cerrar);

//CREAR PDF
router.post('/postPDF', function (req, res, next) {

});


module.exports = router;



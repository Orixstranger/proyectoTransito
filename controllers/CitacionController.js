'use strict';
var models = require('./../models');
var fs = require('fs');
const uuidv4 = require('uuid/v4');

class CitacionController {

    verHome(req, res, next) {
        if (req.isAuthenticated()) {
            res.render('vistas_1/plantilla', {title: 'Home', archivo: "./dinamic/app", h1: "AGENTE CIVIL DE TRÁNSITO", login: req.isAuthenticated(), rol: req.user.rol, fragmento: "../fragmentos/usuario/usuario_register.ejs"});

        } else {

            res.render('vistas_1/plantilla', {title: 'Home', login: req.isAuthenticated(), rol: '',
                title: 'Home', archivo: "./dinamic/app", h1: "AGENTE CIVIL DE TRÁNSITO", fragmento: "../fragmentos/usuario/usuario_register.ejs"});
        }

    }
    verIntro(req, res, next) {
        
            res.render('intro');
       

    }

    verAcerca(req, res, next) {
        if (req.isAuthenticated()) {
            res.render('vistas_1/plantilla', {title: 'Quienes Somos', archivo: "./dinamic/acerca", h1: "¿QUIENES SOMOS?", login: req.isAuthenticated(), rol: req.user.rol, fragmento: "../fragmentos/usuario/usuario_register.ejs"});

        } else {
            res.render('vistas_1/plantilla', {title: 'Home', login: req.isAuthenticated(), rol: '',
                title: 'Quienes Somos', archivo: "./dinamic/acerca", h1: "¿QUIENES SOMOS?", fragmento: "../fragmentos/usuario/usuario_register.ejs", login: req.isAuthenticated()});
        }
    }

    verArticuloCitacion(req, res, next) {
        res.render('vistas_1/plantilla', {title: "Citacion", archivo: "./dinamic/citacion", h1: "Infracciones de Tŕansito",
            fragmento: "../fragmentos/usuario/usuario_register.ejs", login: req.isAuthenticated()});
    }

    verRegistroCitacion(req, res, next) {
        res.render('vistas_1/plantilla', {title: "Registro", archivo: "./dinamic/registro_citacion", h1: "Registro", nombre: '',
            fragmento: "../fragmentos/usuario/cabecera_registro.ejs", login: req.isAuthenticated()});
    }

    cerrar(req, res, next) {
        req.session.destroy();
        res.redirect('/');
    }

    buscarInfractor(req, res, next) {
        res.render('vistas_1/plantilla', {title: "Registro", archivo: "./dinamic/buscar_infractor", h1: "Buscar Infractor", nombre: '',
            fragmento: "../fragmentos/usuario/cabecera_registro.ejs", login: req.isAuthenticated()});
    }

    crearInfractor(req, res, next) {
        res.render('vistas_1/plantilla', {title: "Registro", archivo: "./dinamic/crear_infractor", h1: "Buscar Infractor", nombre: '',
            fragmento: "../fragmentos/usuario/cabecera_registro.ejs", login: req.isAuthenticated()});
    }

    buscarArticulo(req, res, next) {
        res.render('vistas_1/plantilla', {title: "Registro", archivo: "./dinamic/buscar_articulo", h1: "Buscar Articulo", nombre: '',
            fragmento: "../fragmentos/usuario/cabecera_registro.ejs", login: req.isAuthenticated()});
    }

    crearPlaca(req, res, next) {
        res.render('vistas_1/plantilla', {title: "Registro", archivo: "./dinamic/crear_placa", h1: "Buscar Infractor", nombre: '',
            fragmento: "../fragmentos/usuario/cabecera_registro.ejs", login: req.isAuthenticated()});
    }

    buscarPlaca(req, res, next) {
        res.render('vistas_1/plantilla', {title: "Registro", archivo: "./dinamic/buscar_placa", h1: "Buscar Articulo", nombre: '',
            fragmento: "../fragmentos/usuario/cabecera_registro.ejs", login: req.isAuthenticated()});
    }

    mapaGeolocalizacion(req, res, next) {
        res.render('vistas_1/plantilla', {title: "Registro", archivo: "./dinamic/mapa_localizacion", h1: "Buscar Ubicacion", nombre: '',
            fragmento: "../fragmentos/usuario/cabecera_registro.ejs", login: req.isAuthenticated()});
    }

    crearCircunstancia(req, res, next) {
        res.render('vistas_1/plantilla', {title: "Registro", archivo: "./dinamic/detalle_infraccion", h1: "Buscar Infractor", nombre: '',
            fragmento: "../fragmentos/usuario/cabecera_registro.ejs", login: req.isAuthenticated()});
    }

    buscarCitacion(req, res, next) {
        res.render('vistas_1/plantilla', {title: "Registro", archivo: "./dinamic/buscar_citacion", h1: "Buscar Infractor", nombre: '',
            fragmento: "../fragmentos/usuario/cabecera_registro.ejs", login: req.isAuthenticated()});
    }
    
    confirmacion(req, res, next) {
        res.render('vistas_1/plantilla', {title: "Registro", archivo: "./dinamic/regresar_continuar", h1: "Buscar Infractor", nombre: '',
            fragmento: "../fragmentos/usuario/cabecera_registro.ejs", login: req.isAuthenticated()});
    }

    buscar(req, res, next) {
        var Persona = models.persona;
        console.log('******************************************************');
        var cedula = req.body.cedula;
        console.log(req.body.cedula + " *********++++++++++++++++++++++++++++++****8");
        Persona.findOne({where: {cedula: cedula}}).then(function (persona) {
            if (persona) {
                res.send(persona);
            }

        });

    }
    metodoBuscarPlaca(req, res, next) {
        var Vehiculo = models.vehiculo;
        console.log('******************************************************');
        var placa_veh = req.body.placa_veh;
        console.log(req.body.placa_veh + " *********++++++++++++++++++++++++++++++****8");
        Vehiculo.findOne({where: {placa_veh: placa_veh}}).then(function (vehiculo) {
            if (vehiculo) {
                res.send(vehiculo);
            }

        });

    }
    
    metodoBuscarArticulo(req, res, next) {
        var Articulo = models.articulo;
        console.log('******************************************************');
        console.log(req.body.numero_articulo + " *********++++++++++++++++++++++++++++++****8");
        Articulo.findOne({where: {'numero_articulo': req.body.numero_articulo, 'numero_inciso': req.body.numero_inciso, 'numeral': req.body.numeral}}).then(function (articulo) {
            if (articulo) {
                res.send(articulo);
            }

        });

    }

    verRegistro(req, res, next) {
        //this.isLoggedIn(req, res, next);

        res.render('template/templateI', {title: 'Listado de peliculas por servicio web',
            login: true,
            fragmento: '../fragmentos/admin/peliculasws/registro',
            rol: req.user.rol});
    }

    registrarNuevoInfractor(req, res, done) {
        var Infractor = models.infractor;
        var Persona = models.persona;
        var dataPersona = {
            cedula: req.body.nuevo_cedula_infractor,
            apellidos: req.body.nuevo_apellidos_infractor,
            nombres: req.body.nuevo_nombres_infractor
        };
        Persona.create(dataPersona).then(function (newPersona, created) {
            if (!newPersona) {
                return done(null, false);
            }
            if (newPersona) {
                var data = {
                    id: req.body.nuevo_cedula_infractor,
                    tipo: 'infractor',
                    external_id: uuidv4()
                };

                Infractor.create(data).then(function (newInfractor, created) {
                    if (!newInfractor) {
                        return done(null, false);
                    }
                    if (newInfractor) {
                        return done(null, newInfractor);
                    }
                });
                return done(null, newPersona);
            }
        });
        res.redirect('/buscar_infractor');
    }

    registrarNuevaPlaca(req, res, done) {
        var Vehiculo = models.vehiculo;
        var dataVehiculo = {
            placa_veh: req.body.nuevo_placa_vehiculo,
            marca_veh: req.body.nuevo_marca_vehiculo,
            tipo_veh: req.body.nuevo_tipo_vehiculo,
            color_veh: req.body.nuevo_color_vehiculo
        };
        Vehiculo.create(dataVehiculo).then(function (newVehiculo, created) {
            if (!newVehiculo) {
                return done(null, false);
            }
            if (newVehiculo) {
                return done(null, newVehiculo);
            }
        });
        res.redirect('/buscar_placa');
    }
    
    registrarCitacion(req, res, done) {
        var Citacion = models.citacion;
        var dataCitacion = {
            id_citacion: req.body.crear_codigo_citacion,
            fecha_citacion: req.body.datepicker,
            hora_citacion: req.body.timepicker,
            hora_detencion: req.body.timepickerDet,
            detalle_citacion: req.body.nuevo_detalle_circunstancia,
            zona: 'urbana'
        };
        Citacion.create(dataCitacion).then(function (newCitacion, created) {
            if (!newCitacion) {
                return done(null, false);
            }
            if (newCitacion) {
                
                return done(null, newCitacion);
                
            }
        });
        res.redirect('/buscar_citacion');
    }
    
    metodoBuscarCitacion(req, res, next) {
        var Citacion = models.citacion;
        console.log('******************************************************');
        var id_citacion = req.body.id_citacion;
        console.log(req.body.id_citacion + " *********++++++++++++++++++++++++++++++****8");
        Citacion.findOne({where: {id_citacion: id_citacion}}).then(function (citacion) {
            if (citacion) {
                res.send(citacion);
            }

        });

    }

    isLoggedIn(req, res, next) {
        if (!req.isAuthenticated())
            res.redirect('/inicio');
    }
    
    
}
module.exports = CitacionController;

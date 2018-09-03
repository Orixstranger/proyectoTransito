'use strict';
var bCrypt = require('bcrypt-nodejs');
const uuidv4 = require('uuid/v4');
module.exports= function (passport, agente, persona,rol) {
    var Agente = agente;//modelo
    var Persona = persona;//modelo
    var Rol = rol;//modelo
    var LocalStrategy = require('passport-local').Strategy;
    passport.serializeUser(function (agente, done) {
        done(null, agente.codigo);
    });
    // used to deserialize the user
    passport.deserializeUser(function (codigo, done) {
        Agente.findById(codigo).then(function (agente) {
            if (agente) {
                
                    done(null, agente.get());
            } else {
                done(agente.errors, null);
            }
        });

    });
    //registro de agentes por passport
    passport.use('local-signup', new LocalStrategy(
            {
                usernameField: 'codigo', //lo que esta como name en el input del registro
                passwordField: 'clave', //lo que esta como name en el input del registro
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
            function (req, name, password, done) {                
                var generateHash = function (password) {
                    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
                };
                //verificar si el email no esta registrado
                Agente.findOne({
                    where: {
                        codigo: name
                    }
                }).then(function (agente) {
                    if (agente)
                    {
                        return done(null, false, {
                            message: 'El codigo ya esta registrado'
                        });

                    } else
                    {
                        var userPassword = generateHash(password);
                        var dataPersona =
                                {
                                    cedula: req.body.cedula,
                                    apellidos: req.body.apellidos,
                                    nombres: req.body.nombres
                                };                        
                        Persona.create(dataPersona).then(function (newPersona, created) {                        
                            if (!newPersona) {
                                return done(null, false);
                            }
                            if (newPersona) {
                                var data =
                                        {
                                            codigo: name,
                                            clave: userPassword,
                                            tipo: 'agente',
                                            id_persona: newPersona.cedula
                                        };
                                        
                                Agente.create(data).then(function (newAgente, created) {
                                    if (!newAgente) {
                                        return done(null, false);
                                    }
                                    if (newAgente) {
                                        return done(null, newAgente);
                                    }
                                });
                                return done(null, newPersona);
                            }
                        });
                    }
                });
            }
    ));
    //inicio de sesion
    passport.use('local-signin', new LocalStrategy(
            {                
                usernameField: 'txt_codigo',
                passwordField: 'txt_clave',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
            function (req, name, password, done) {
                
                var isValidPassword = function (userpass, password) {
                    return bCrypt.compareSync(password, userpass);
                }                
                Agente.findOne({where: {codigo: name}}).then(function (agente) {
                    if (!agente) {
                        return done(null, false, {message: 'Correo no existe'});
                    }
                    if (!isValidPassword(agente.clave, password)) {
                        return done(null, false, {message: 'Clave incorrecta.'});
                    }
                    var userinfo = agente.get();
                    return done(null, userinfo);
                    //-------------------
                    //var userinfo = cuenta.get();
                    //console.log(userinfo.persona.rol.id+' xxx ');
                    //return done(null, userinfo);
                    //-------------------
//                    var userinfo ={
//                        id: cuenta.id,
//                        id_cuenta: cuenta.external_id,
//                        id_persona: cuenta.persona.external_id,
//                        nombre: cuenta.persona.apellidos + ' ' + cuenta.persona.nombres,
//                        rol: cuenta.persona.rol.nombre
//                    };

                }).catch(function (err) {
                    console.log("Error:", err);
                    return done(null, false, {message: 'Cuenta erronea'});
                });
            }
    ));
}
/*'use strict';
var Sequelize = require('sequelize');
var Agente = require("./Agente");
Agente.create({
    id_persona: 1105665044,
// Persistente
    nombres: "Patricio Bolívar",
    apellidos: "Benítez Lanche",
    codigo_agente: 20
}).then(function (user) {
    console.log('Usuario ' + ' creado con éxito.');
})
        .catch(Sequelize.ValidationError, function (error) {
            console.log("Errores de validación:", error);
            for (var i in error.errors) {
                console.log('Error en el campo:', error.errors[i].value);
            }
            ;
        }).catch(function (error) {
    console.log("Error:", error);
});*/
'use strict';
module.exports = function (sequelize, Sequelize){
    var aux = require('../models/rol');
    var Rol = new aux(sequelize, Sequelize);
    var Articulo = sequelize.define('articulo',{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        numero_articulo:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nombre_articulo:{
            type: Sequelize.STRING(400),
            allowNull: false
        },
        detalle_articulo:{
            type: Sequelize.STRING(400),
            allowNull: false
        },
        numero_inciso:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        numeral:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        detalle_numeral:{
            type: Sequelize.STRING(400),
            allowNull: false
        }
    });
    
    //_-------------------------------------------------------------
//    Persona.belongsTo(Rol, {foreignKey: 'id_rol',constraints: false});
    return Articulo;
};

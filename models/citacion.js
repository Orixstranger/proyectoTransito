'use strict';
module.exports = function (sequelize, Sequelize){
    var aux = require('../models/rol');
    var Rol = new aux(sequelize, Sequelize);
    var Citacion = sequelize.define('citacion',{
        id_citacion:{
            primaryKey: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        fecha_citacion:{
            type: Sequelize.DATE,
            allowNull: false
        },
        hora_citacion:{
            type: Sequelize.TIME(),
            allowNull: false
        },
        hora_detencion:{
            type: Sequelize.TIME(),
            allowNull: true
        },
        detalle_citacion:{
            type: Sequelize.STRING(400),
            allowNull: false
        },
        zona:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    
    //_-------------------------------------------------------------
//    Persona.belongsTo(Rol, {foreignKey: 'id_rol',constraints: false});
    return Citacion;
};

'use strict';
module.exports = function (sequelize, Sequelize){
    var aux = require('../models/rol');
    var Rol = new aux(sequelize, Sequelize);
    var Persona = sequelize.define('persona',{
        cedula:{
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombres:{
            type: Sequelize.STRING(60),
            allowNull: false
        },
        apellidos:{
            type: Sequelize.STRING(60),
            allowNull: false
        }
    });
    Persona.associate = function(models){
        models.persona.hasOne(models.agente,{
            foreignKey: 'id_persona'
        });
        models.persona.hasMany(models.infractor,{
            foreignKey: 'id_persona'
        });
        
    };
    
    //_-------------------------------------------------------------
//    Persona.belongsTo(Rol, {foreignKey: 'id_rol',constraints: false});
    return Persona;
};
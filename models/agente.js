'use strict';
//para los datos que se quiera guardar en la base de datos
module.exports = function (sequelize, Sequelize){
    var aux = require('../models/persona');
    var Persona = new aux(sequelize, Sequelize);
    var Agente = sequelize.define('agente',{
        codigo:{
            primaryKey: true,
            type: Sequelize.STRING(3)
        },
        
        clave: {
            type: Sequelize.STRING,
            allowNull: true
        },
        tipo: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });
//    Agente.belongsTo(Persona,{foreignKey: 'id_persona', constraints: false});
    
    
//    Agente.associate =  function(models){
//        models.agente.belongsTo(models.persona, {
//            foreignKey: 'id_persona'
//        });
//    };
    return Agente;
};

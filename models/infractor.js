'use strict';
module.exports = function (sequelize, Sequelize) {
    var Infractor = sequelize.define('infractor', {
        id: {
            autoincrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        tipo:{
            type: Sequelize.STRING(60),
            allowNull: false
        },
       external_id: {
           type: Sequelize.UUID
       }
    });
    //Datos para producir la llamada de la relacion
    //Agente.belogsTo(Persona);
    Infractor.associate = function (models) {

        models.infractor.belongsTo(models.persona, {
            foreignKey: 'id_persona'
        });

//        models.infractor.hasMany(models.vehiculo, {
//            foreingKey: 'id_infractor'
//        });
//        models.infractor.hasMany(models.documento,{
//            foreignKey: 'id_infractor'
//        });
    };
    return Infractor;
};
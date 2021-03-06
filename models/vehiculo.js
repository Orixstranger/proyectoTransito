'use strict';
module.exports = function (sequelize, Sequelize){
    var Vehiculo = sequelize.define('vehiculo',{
        placa_veh:{
            primaryKey: true,
            type: Sequelize.STRING(7)
        },
        marca_veh:{
            type: Sequelize.STRING,
            allowNull: false
        },
        tipo_veh:{
            type: Sequelize.STRING,
            allowNull: false
        },
        color_veh:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    
    return Vehiculo;
};


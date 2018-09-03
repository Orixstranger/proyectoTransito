'use strict';

module.exports = function (sequelize, Sequelize){
    
    var Ubicacion = sequelize.define('ubicacion',{
        id:{
            autoincrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        latitud:{
            type: Sequelize.STRING,
            allowNull: false
        },
        longitud:{
            type: Sequelize.STRING,
            allowNull: false
        },
        nombre_calle:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
        //Documento.belongsTo(Infractor, {foreignKey: 'id_infractor',constraints: false});
    return Ubicacion;
};

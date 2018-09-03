'use strict';

module.exports = function (sequelize, Sequelize){
    var aux = require('../models/infractor');
    var Infractor = new aux(sequelize, Sequelize);
    var Documento = sequelize.define('documento',{
        id:{
            autoincrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        tipo_doc:{
            type: Sequelize.STRING,
            allowNull: false
        },
        categoria_lic:{
            type: Sequelize.STRING,
            allowNull: false
        },
        tipo_lic:{
            type: Sequelize.STRING,
            allowNull: false
        },
        emision:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
        Documento.belongsTo(Infractor, {foreignKey: 'id_infractor',constraints: false});
    return Documento;
};



'use strict';

module.exports = function (sequelize, Sequelize){
    var aux = require('../models/infractor');
    var Infractor = new aux(sequelize, Sequelize);
    var TipoDocumento = sequelize.define('tipo_documento',{
        id:{
            autoincrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombre:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
//        Documento.belongsTo(Infractor, {foreignKey: 'id_infractor',constraints: false});
    return TipoDocumento;
};

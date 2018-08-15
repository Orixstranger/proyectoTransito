
//para los datos que se quiera guardar en la base de datos
module.exports = function (sequelize, Sequelize){
    var Agente = sequelize.define('agente',{
        codigo_agente:{
            primaryKey: true,
            type: Sequelize.INTEGER
        }
    });
    Agente.associate =  function(models){
        models.agente.belongsTo(models.persona, {
            foreignKey: 'id_persona'
        });
    };
    return Agente;
};

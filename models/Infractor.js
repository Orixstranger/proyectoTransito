module.exports = function (sequelize, Sequelize) {
    var Infractor = sequelize.define('infractor', {
        id_infractor: {
            autoincrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        }
    });
    //Datos para producir la llamada de la relacion
    //Agente.belogsTo(Persona);
    Infractor.associate = function (models) {

        models.infractor.belongsTo(models.persona, {
            foreignKey: 'id_persona'
        });

        models.infractor.hasMany(models.vehiculo, {
            foreingKey: 'id_infractor'
        });
    };
    return Infractor;
};
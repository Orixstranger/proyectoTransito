module.exports = function (sequelize, Sequelize){
    var Persona = sequelize.define('persona',{
        
        id_persona:{
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombres:{
            type: Sequelize.STRING,
            allowNull: false
        },
        apellidos:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    Persona.associate = function(models){
        models.persona.hasMany(models.agente,{
            foreignKey: 'id_persona'
        });
        models.persona.hasMany(models.infractor,{
            foreignKey: 'id_persona'
        });
    };
    
    return Persona;
};
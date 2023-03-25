module.exports = (sequelize, dataTypes) => {
    let alias = "generos";
    
    let cols = {
        id: {   type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                nullable: true},
        nome: { type: dataTypes.STRING,
                nullable: true}
    };

    let config = {
        tableName: "genero",
        timestamps: false
    }
   
    let Genero = sequelize.define(alias, cols, config);


    Genero.associate = (models) => {
        Genero.hasMany(models.livros, {
            As: "livros",
            foreignKey: "genero_id"
        })
    }

    return Genero;
}
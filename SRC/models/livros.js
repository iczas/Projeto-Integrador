module.exports = (sequelize, dataTypes) => {
    let alias = "livros";
    
    let cols = {
        id: {   type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                nullable: true},
        title: { type: dataTypes.STRING,
                nullable: true}
    };

    let config = {
        tableName: "livros",
        timestamps: false
    }
   
    let livros = sequelize.define(alias, cols, config);


    Livros.associate = (models) => {
        Livros.belongsToMany(models.genero, {
            As: "genero",
            through: livros_genero,
            foreignKey: "livros_id",
            otherKey: "genero_id",
            timestamps: false
        })
    }

    return Livros;
}
require('dotenv').config()

const { Sequelize,DataTypes } = require('sequelize')

const DbBlog = new Sequelize(
    // Nome do banco de dados
    process.env.DB_NOME, 
    // Usuário
    process.env.DB_USUARIO, 
    // Senha
    process.env.DB_SENHA,
    // Tecnologia / Aonde está o localizado
   
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    })

const usuarios = database.define('usuarios', {
        nomeUsuario: DataTypes.STRING,
        senha: DataTypes.STRING 
    })

   

    try{
        DatabaseError.authenticate()
        database.sync()
    }
    catch(error){
        console.error(error)
    }

module.exports = DbEstante
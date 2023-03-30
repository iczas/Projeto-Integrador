let db = require('../database/models');

let apiController = {
    getLivros: (req,res) => {
        db.Livro
        .findAll()
        .then(returnedLivros => {
        return res.status(200).json({
            total: returnedLivros.length,
            data: returnedLivros
        })
        })
     },getLivros: (req,res) => {
        db.Livro
        .findByPk(req.params.id)
        .then(livro => {
        return res.status(200).json({
            data: livro,
            status: 200

        })
        })
     },
     createLivros: (req,res) => {
        db.Livro
        .create(req.body)
        .then(livro => {
        return res.status(200).json({
            data: livro,
            status: 200
        })
        })
    },
     deleteLivros: (req,res) => {
        db.Livro
        .destroy({
            where:{
                id: req.params.id
            }
        })
        .then(response => {
        return res.json(response)
        })
    },  
};

module.exports = apiController;
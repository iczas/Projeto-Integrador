const db = require('..database/models');

let livrosController = {
    create: (req,res) => {
        db.genero.findAll()
        .then((generosresult) => {
            return res.render('createLivros',{generos:generosresult});
        })
        .catch((error) => console.log(error));
    },
    register: (req,res) => {
        db.Livro.create({
            title: req.body.title,
            autor: req.body.autor,
            genero_id:req.body.genero_id,
            editora:req.body.editora,
            data_lancamento:req.body.data_de_lancamento
        })
        .then(() => res.redirect('/'))
        .catch((error) => console.log(error))
    },
    lista:(req,res) => {
        db.Livro.findAll()
          .then((listaDeLivros) =>{
            return res.render('lista', {livros: listaDeLivros})
          })
          .catch((error) => console.log(error))
    },
    lista:(req,res) => {
        db.Livro.findByPk(
            req.params.id,
           { include:[
            {association: genero},
            {association: autor},
            {association: editora},
            {association: data_de_lancamento},
           ]

            }
        )
          .then((detalhesLivros) =>{
            return res.render('detalhesLivros', {livros: detalhesLivros})
          })
          .catch((error) => console.log(error))
    },
    updateLivro:(req,res) => {
        let livroId = req.params.id;
        let generoVolta 
        let livroVolta
    Db.Genero.findAll()
        .then((generos) => {
            generoVolta = generos;
            return generoVolta
        })
        .then((generoVolta) => {
            livroVolta = db.livro.findByPk(livroId)
            .then((livroVolta) => {
                res.render('atualizaLivro', {livro:livroVolta,genero:generoVolta})
            }) 
            .catch((error) => console.log(error))
        })  
            .catch((error) => console.log(error));
    },
    processUpdate:(req,res) => {
        db.livro.update({
            title: req.body.title,
            autor: req.body.autor,
            genero_id:req.body.genero_id,
            editora:req.body.editora,
            data_lancamento:req.body.data_de_lancamento
        },
        {
        where: {id:req.body.id}
        })

        .then(() => res.redirect('/livros/' + req.params.id))
        .catch((error) => console.log(error))
    },
    deletaLivro: (req,res) => {
        db.livro.destroy({
        where:{
          id: req.params.id
      }
    })
    .then(() => res.redirect('/livros/' + req.params.id))
    .catch((error) => console.log(error))
  }
}


module.exports = livrosController;
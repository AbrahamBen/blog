const Article = require('../models/article.model');
const Category = require('../models/category.model');

/**
 * Get all articles
 */

exports.list = (req,res)=>{
    Article.find()
        .then((articles)=>{
            res.render('index',{title:'Accueil', articles});
        })
        .catch((err)=>{
            res.status(401).json(err);
        });
}

/**
 * Get one article
 */
exports.show=(req,res)=>{
    Article.findOne({_id:req.params.id})
        .then((article)=>{
            res.render('single-article',{article});
            console.log(article)
        })
        .catch((err)=>{
            res.redirect('/');
        });
}

/**
 * Render article view
 */
exports.add = (req,res)=>{
Category.find()
    .then((categories)=>{
        res.render('add-article',{categories});
    })
    .catch((err)=>{
        res.redirect('/');
    });
}

/**
 * Add article
 */
exports.addOne = (req,res)=>{
    let  article = new Article({
        ...req.body,
        publishedAt:Date.now()
    });

    article.save((err,article)=>{
        if(err){
            Category.find()
                .then((categories)=>{
                    res.render('add-article',{categories:categories,error:'Une erreur est survenue lors de l\'ajout de l\'article. Veuillez réessayer plus tard'});
                })
                .catch(()=>{
                    res.redirect('/');
                })
            //res.render('add-article',{error:'Une erreur est survenue lors de l\'ajout de l\'article. Veuillez réessayer plus tard'});
        }else{
            Category.find()
                .then((categories)=>{
                    //res.render('add-article',{categories:categories,error:'Une erreur est survenue lors de l\'ajout de l\'article. Veuillez réessayer plus tard'});
                    res.render('add-article',{categories:categories,success:'Félicitation!! votre article a été ajouté avec succès'});
                })
                .catch(()=>{
                    res.redirect('/');
                })
            //res.render('add-article',{success:'Félicitation!! votre article a été ajouté avec succès'});
        }
    });
}

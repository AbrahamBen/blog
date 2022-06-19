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

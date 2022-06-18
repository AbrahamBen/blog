var express = require('express');
var router = express.Router();
const Article = require('../models/article.model');

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
  Article.find()
      .then((articles)=>{
        res.render('index',{title:'Accueil', articles});
        //res.status(200).json(articles)
      })
      .catch((err)=>{
        res.status(401).json(err);
      });

});

/* GET article/:id */
 router.get('/article/:id',(req,res,nex)=>{
     Article.findOne({_id:req.params.id})
         .then((article)=>{
             res.render('single-article',{article});
             console.log(article)
         })
         .catch((err)=>{
             res.redirect('/');
         })
 });
module.exports = router;

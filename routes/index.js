var express = require('express');
var router = express.Router();
const Article = require('../models/article.model');
const articleController = require('../controllers/article.controller');

/* GET home page. */
router.get('/', articleController.list);

/* GET /article/:id */
 router.get('/article/:id',articleController.show);

/* GET /add-article */
 router.get('/add-article',articleController.add);

 router.post('/add-article',articleController.addOne)
module.exports = router;

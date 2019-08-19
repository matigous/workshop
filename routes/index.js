var express = require('express');
var router = express.Router();
var connection = require('../db');

/* GET home page. */
router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM listaparacompras ORDER BY id desc', function (err, rows) {
    if (err) {
      res.render('index', { page_title: "Index - Node.js", data: '' });
    } else {
      res.render('index', { page_title: "Index - Node.js", data: rows });
    }
  });
});

module.exports = router;

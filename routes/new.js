var express = require('express');
var router = express.Router();
var connection = require('../db');

router.get('/', function (req, res, next) {
    // render to views/new.ejs
    res.render('new', {
        title: 'Add New Customers',
        nome: '',
        quantidade: ''
    })
})

// ADD NEW USER POST ACTION
router.post('/', function (req, res, next) {
    var user = {
        nome: (req.body.nome),
        quantidade: parseInt(req.body.quantidade)
    }
    connection.query('INSERT INTO listaparacompras SET ?', user, function (err, result) {
        if (err) {
            res.render('new', {
                title: 'Add New',
                nome: user.nome,
                quantidade: user.quantidade
            })
        } else {
            res.redirect('/');
        }
    })
})

module.exports = router;

var express = require('express');
var router = express.Router();
var connection = require('../db');

// EDIT USER POST ACTION
router.get('/(:id)', function (req, res, next) {
    /*var user = {
        id: req.params.id,
        nome: req.body.nome,
        quantidade: parseInt(req.body.quantidade)
    }*/
    console.log(req.params.id);
    connection.query('DELETE FROM listaparacompras WHERE id = ' + req.params.id, function (err, result) {
        res.redirect('/');
    })
})

module.exports = router;
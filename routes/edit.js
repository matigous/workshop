var express = require('express');
var router = express.Router();
var connection = require('../db');



// SHOW EDIT USER FORM
router.get('/(:id)', function (req, res, next) {
    connection.query('SELECT * FROM listaparacompras WHERE id = ' + req.params.id, function (err, rows, fields) {
        if (err) throw err
        // if user not found
        if (rows.length <= 0) {
            res.redirect('/')
        }
        else { // if user found
            // render to views/edit.ejs template file
            res.render('edit', {
                title: 'Edit Food',
                //data: rows[0],
                id: rows[0].id,
                nome: rows[0].nome,
                quantidade: rows[0].quantidade
            })
        }
    })
})

// EDIT USER POST ACTION
router.post('/', function (req, res, next) {
    var user = {
        nome: req.body.nome,
        quantidade: parseInt(req.body.quantidade)
    }
    console.log(req.body.id);
    connection.query('UPDATE listaparacompras SET ? WHERE id = ' + req.body.id, user, function (err, result) {
        res.redirect('/');
    })
})


module.exports = router;
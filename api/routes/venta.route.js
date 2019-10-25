const express = require('express');
const app = express();
const ventaRoutes = express.Router();

let Venta = require('../models/Venta');

ventaRoutes.route('/add').post(function (req, res) {
    let venta = new Venta(req.body);
    venta.save().then(venta => {
        res.status(200).json({ 'Venta': 'Venta registrada correctamente' });
    }).catch(err => {
        res.status(400).send("Imposible registrar venta");
    });
});

ventaRoutes.route('/').get(function (req, res) {
    Venta.find(function (err, ventas) {
        if (err) {
            console.log(err);
        } else {
            res.json(ventas);
        }
    });

});

module.exports = ventaRoutes;
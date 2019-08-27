const router = require('../middleware/router');
const controller = require('../controllers/c_voucher');
const express = require('express')
const {
    body,
    check,
    validationResult
} = require('../middleware/expresse-validator');

router.get('/', (req, res) => {
    res.render('./voucher/add_voucher.html');
});

router.post('/add',
    [
        body('first_voucher', "Debe ingresar el numero del voucher").not().isEmpty()
        .isInt().withMessage('Debe ser un numero'),
        //Valida que el numero de vale no se repita
        check('first_voucher').custom((value, ) => {
            console.log("Ya te lo mando a busqueda");
            controller.ifExist(value).then(b => {
                console.log("B es igual: " + b)
                if (b === true) {
                    console.log("Si we la rego la doña");
                    res.send('Ya existe!');
                } else {
                    res.send('No existe!');
                }
            })
        })
    ], (req, res) => {
        // Handle the request somehow
        controller.createVoucher(req, res);
    });

module.exports = router;


/*GET List*/
router.get('/', (req, res) => {
    controller.getList(req, res);

});

/*GET Create*/
router.get('/create', (req, res) => {
    controller.getCreate(req, res);
});

/*POST Create*/
/* router.post('/create',
    [
        body('brand', 'Debe ingresar la marca del vehículo').not().isEmpty(),
        body('chassis', 'Debe ingresar el número chasis del vehículo').not().isEmpty(),
        body('model', 'Debe ingresar modelo del vehículo').not().isEmpty(),
        body('engine', 'Debe ingresar número de motor del vehículo').not().isEmpty()
        .not().isAlphanumeric()
        .isLength({
            min: 10
        }).withMessage('El número del motor debe contener al menos 10 carácteres alfanúmericos'),
        body('state', 'Debe ingresar el estado del vehículo').not().isEmpty(),
        body('seats', 'Debe ingresar la cantidad de asientos').not().isEmpty()
        .not().toInt().withMessage('Debe ingresar una cantidad númerica')
    ], (req, res) => {
        controller.create(req, res);
    }); */

module.exports = router
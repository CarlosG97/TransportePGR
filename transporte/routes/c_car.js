const express = require('express')
const router = express.Router();
const services = require('../services/s_car');
const Car = require('../models/m_car');

/*GET Car List*/
router.get('/', (req, res) =>
    //cars = await services.getAll();
    //.then(res.render('../views/Cars/list.html'), {
    //  cars
    //})
    //.catch(errors => console.log(errors))
    services.getAll()
    .then(cars => res.render('../views/Cars/list.html', {
        cars
    }))
    .catch(error => console.log(error))
);

/*Get Add a car */
router.get('/add', (req, res) => {
    if (services.create()) {
        res.redirect('index.html');
    } else {
        res.redirect('/');
    }
});

module.exports = router
const router = require('../middleware/router');
const department_services = require('../services/s_department');
const city_services = require('../services/s_city');
const frequent_places_services = require('../controllers/s_frequent_places');
const {
    body,
    validationResult
} = require('express-validator');



router.get('/lugares_frecuentes', (req, res) => {
    Direcciones = frequent_places_services.getAll()
        .then(Direcciones => {
            res.render('../views/frequent_places/list.html', {
                Direcciones,

            });
        })
        .catch(err => console.log(err));
});

router.get('/lugares_frecuentes/add', (req, res) => {

    Departamentos = department_services.getAll()
        .then(Departamentos => res.render('../views/frequent_places/add.html', {
            Departamentos,

        }))
        .catch(err => console.log(err))
});
router.get('/getMunicipios', (req, res) => {
    selectedDepartamento = req.query.selectedDepartamento;
    municipios = city_services.getMunicipios(selectedDepartamento)
        .then(municipios => res.send(municipios))
        .catch(err => console.log(err));
});

router.post('/lugares_frecuentes/add', [
    //Validations
    body('name', 'El nombre debe ser menor a 100 caracteres.').isLength({
        max: 150
    }),
    body('name', 'Ingrese el nombre de la dirección.').not().isEmpty(),

    /* body('name', 'El nombre debe contener solo caracteres alfanuméricos.').not().isAlphanumeric(), */
    body('detail', 'Ingrese el detalle de la dirección.').not().isEmpty(),
    body('detail', 'El detalle debe ser menor a 150 caracteres.').isLength({
        max: 200
    }),
    /* body('detail', 'El detalle debe contener solo caracteres alfanuméricos.').not().isAlphanumeric(), */
    body('departamento', 'No seleccionó un departamento.').not().isEmpty(),
    body('municipio', 'No seleccionó un municipio').not().isEmpty(),
], (req, res) => {
    const errors = validationResult(req);
    let {
        name,
        detail,
        departamento,
        municipio,

    } = req.body;

    console.log(errors.array());
    //If there are errors, renders the same form, otherwise saves the new Address
    console.log(name);
    if (!errors.isEmpty()) {

        Departamentos = department_services.getAll()
            .then(Departamentos => {
                res.render('../views/frequent_places/add.html', {
                    Departamentos,
                    name,
                    detail,
                    departamento,
                    municipio,
                    errors: errors.array()
                });

            })
    } else {
        console.log(req.body);
        frequent_places_services.create(name, detail, municipio, departamento).then(function () {
            let Mstate2 = true;
            Departamentos = department_services.getAll()
                .then(Departamentos => res.render('../views/frequent_places/add.html', {
                    Departamentos,
                    Mstate2,
                }))
                .catch(err => console.log(err));
        }).catch(function (err) {
            console.log(err);
            if (err) {
                let Mstate = true;
                Departamentos = department_services.getAll()
                    .then(Departamentos => {
                        res.render('../views/frequent_places/add.html', {
                            Departamentos,
                            Mstate,
                        });
                    })
            } else {
                let Mstate2 = true;
                Departamentos = department_services.getAll()
                    .then(Departamentos => res.render('../views/frequent_places/add.html', {
                        Departamentos,
                        Mstate2,
                    }))
                    .catch(err => console.log(err));
            }

        })
    }
    /* .then(res.redirect('/lugares_frecuentes/add'))
    .catch(err => console.log(err)); */

});

module.exports = router;
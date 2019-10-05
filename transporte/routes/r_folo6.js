const router = require('../middleware/router');
//var bodyParser = require('body-parser');
const controller = require('../controllers/c_folo6');

//Dirección para mostrar el formulario donde se llena una nueva solicitud de folo 6
router.get('/solicitud_nueva', (req, res) => {
    res.render('./folo6/folo6.html');
});
//Cuando se hace refrencia a esta dirección, está redirecciona a la pantalla del folo con la posibilidad de editar los datos que el usuario ha ingresado previamente 
router.get('/solicitud_nueva/:id', (req, res) => {
    console.log("Solicito editar el folo con id: " + req.params.id);
    controller.getOne(req, res);
});
//Esta información muestra como texto cada uno de los atributos del folo
//****ESTA PENDIENTE DE AGREGAR EL ENVIO DE LAS DIRECCIONES Y LUGARES FRECUENTES
router.get('/solicitud_nueva/get/:id', (req, res) => {
    console.log("Solicito información el folo con id: " + req.params.id);
    controller.foloToString(req, res);
});
//Ruta para guardar los datos del folo sin incluir los datos de las direcciones y lugares frecuentes. 
//Con respecto a las direcciones y lugares, acá se envían: 
//En el caso de las direcciones se manda únicamente los id de las direcciones puesto que, ha este punto ya fueron creadas; 
//en el caso de los lugares fercuentes estos ya fueron creados previamente
router.post('/solicitud_nueva/add', (req, res) => {
    try {
        controller.createFolo6(req, res);
    } catch (err) {
        res.send({
            title: "Error en el enlace de guardado",
            message: "Ocurrio un error mientras se guardaban los datos, intente de nuevo, si el error persiste recargue la pagina o contacte a soporte",
            type: 1
        });
        console.log(err);
    }
});
//Dirección a la que se envían los datos lueo de ser modificados por el usuario 
router.post('/solicitud_nueva/edit', (req, res) => {
    try {
        controller.editFolo6(req, res);
    } catch (err) {
        res.send({
            title: "Error en el enlace de actualizado",
            message: "Ocurrio un error mientras se actualizaban los datos, intente de nuevo, si el error persiste recargue la pagina o contacte a soporte",
            type: 1
        });
        console.log(err);
    }
});
//Dirección a la que se llama para el eliminar el folo que contenga el id indicado
router.post('/solicitud_nueva/delete/:id', (req, res) => {
    try {
        controller.deleteFolo(req, res);
    } catch (err) {
        res.send({
            title: "Error en las rutas de eliminado",
            message: "Ocurrio un error mientras se eliminaban los datos, intente de nuevo, si el error persiste recargue la pagina o contacte a soporte",
            type: 1
        });
    }
});
//****MODIFICAR PARA QUE SE RECIBAN SOLO LOS FOLOS CORRESPONDIENTES AL USUARIO EN SESIÓN
//Manda a traer los folos ingresados en un formato que el data table pueda renderizar
router.get('/folos', (req, res) => {
    controller.getList(req, res);
});

module.exports = router;
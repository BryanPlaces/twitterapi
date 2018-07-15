//users
const USERSModel = require('./users.model');

module.exports.obtenerUsuarios = obtenerUsuarios;
module.exports.obtenerUsuarioPorUsername = obtenerUsuarioPorUsername;
module.exports.crearNuevoUsuario = crearNuevoUsuario;
module.exports.borrarUsuario = borrarUsuario;
module.exports.editarUsuario = editarUsuario;

/**
 * Lo de arriba se puede simplificar con:
 * module.exports = {obtenerUsuarios, ObtenerUsuariosPorId, añadirUsuario, borrarUsuario}
 */


function obtenerUsuarios (req, res) {
    USERSModel.find({}, (err, response) => {
        if(err) return res.status(500).send(err);
        if(response === null) return res.status(400).send("No hay usuarios");
        return res.json(response);
    })
}

function obtenerUsuarioPorUsername (req, res) {

    USERSModel.findOne({"username": req.params.username}, (err, response) => {
        if(err) return res.status(500).send(err);
        if(response === null) return res.status(400).send("No existe ese usuario");
        res.json(response);

    })
}

function crearNuevoUsuario (req, res) {

    const nuevoUsuario = new USERSModel({
        username : req.body.username,
        name : req.body.name,
        email: req.body.email
    })

    nuevoUsuario.save(function(err) {
        if(err) return res.status(406).send(err.message);
        return res.status(201).json(nuevoUsuario);
    })
}

function borrarUsuario (req, res) {

    USERSModel.findOneAndRemove({"username": req.params.username}, (err, response) => {
        if(err) return res.status(500).send(err);
        if(response === null) return res.status(400).send("El usuario no existe");
        return res.json(response);
    })
}

function editarUsuario(req, res) {

    USERSModel.findOneAndUpdate({"username": req.params.username}, {$set: {email: req.body.email}}, {new: true}, (err, response) => {
        if(err) return res.status(500).send(err);
        if(response === null) return res.status(400).send("El usuario no existe");
        return res.json(response);
    })
}

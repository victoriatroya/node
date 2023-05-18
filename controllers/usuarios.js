const { response } = require('express')

const getUsuarios = (req, res = response) => {

    const { q, nombre } = req.query
    res.json({
        msg: 'get api - controlador',
        q,
        nombre
    })
};

const putUsuario = (req, res = response) => {
    const { id } = req.params
    res.json({
        msg: 'put api - controlador',
        id
    })
};

const deleteUsuario = (req, res = response) => {

    res.json({
        msg: 'delete api - controlador',
    })
};

const postUsuario = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post api - controlador',
        nombre,
        edad
    })
};

module.exports = {
    getUsuarios,
    deleteUsuario,
    putUsuario,
    postUsuario
}
const {response, request} = require('express')

const usuariosGet = (req = request, res = response)=>{
    //const usuario = req.body
    res.json({
        msg: 'GET'
    })
}

const usuariosPost = (req, res)=>{
    //const usuario = req.body
    res.json({
        msg: 'POST'
    })
}

const usuariosDelete = (req = request, res = response)=>{
    //const usuario = req.body
    res.json({

        msg: 'DELETE'
    })
}

const usuariosPut = (req, res)=>{
    //const usuario = req.body
    res.json({
        msg: 'PUT'
    })
}

// get post put delete crud


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut

}
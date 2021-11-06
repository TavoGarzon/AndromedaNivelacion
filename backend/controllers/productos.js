const {response, request} = require('express')

const productosGet = (req = request, res = response)=>{
    //const usuario = req.body
    res.json({
        msg: 'PROGET'
    })
}

const productosPost = (req, res)=>{
    //const usuario = req.body
    res.json({
        msg: 'PROPOST'
    })
}

const productosDelete = (req = request, res = response)=>{
    //const usuario = req.body
    res.json({

        msg: 'PRODELETE'
    })
}

const productosPut = (req, res)=>{
    //const usuario = req.body
    res.json({
        msg: 'PROPUT'
    })
}

// get post put delete crud


module.exports = {
    productosGet,
    productosDelete,
    productosPost,
    productosPut

}
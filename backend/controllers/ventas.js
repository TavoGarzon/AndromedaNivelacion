const {response, request} = require('express')

const ventasGet = (req = request, res = response)=>{
    //const usuario = req.body
    res.json({
        msg: 'VENGET'
    })
}

const ventasPost = (req, res)=>{
    //const usuario = req.body
    res.json({
        msg: 'VENPOST'
    })
}

const ventasDelete = (req = request, res = response)=>{
    //const usuario = req.body
    res.json({

        msg: 'VENDELETE'
    })
}

const ventasPut = (req, res)=>{
    //const usuario = req.body
    res.json({
        msg: 'VENPUT'
    })
}

// get post put delete crud


module.exports = {
    ventasGet,
    ventasDelete,
    ventasPost,
    ventasPut

}
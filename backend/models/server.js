const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

class Server {

    constructor(){
        this.app = express()
        this.mongoose = process.env.MONGODB_CONNECT
        this.usuariosPath='/api/usuarios'
        this.productosPath='/api/productos'
        this.ventasPath='/api/ventas'



       // middlewares()
       this.middlewares();
//       this.app.use(express.json())
       

       //rutas de la app
       this.routes();

       //cors


    }

    middlewares(){
        //cors
        this.app.use(cors())

        //lectura y parseo
        this.app.use(express.json())

        //directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
        this.app.use(this.productosPath, require('../routes/productos'))
        this.app.use(this.ventasPath, require('../routes/ventas'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Servidor Conectado Exitosamente")
        })
    }

}

module.exports = Server
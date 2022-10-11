const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema

const eschemaenvio = new eschema({
    email:String,
    idenvio:String,
    fecha:String,
    hora:String,
    estado:String,
    largo:Number,
    alto:Number,
    ancho:Number,
    peso:String,
    direccion_recogida:String,
    ciudad_recogida:String,
    nombre_destinatario:String,
    cedula_destinatario:Number,
    direccion_entrega:String,
    ciudad_entrega:String
})

const ModeloEnvio = mongoose.model('envios', eschemaenvio)
module.exports = router

/*router.get('/ejemplo',(req,res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})*/

//Agregar envio
router.post('/agregarenvio',(req,res)=>{
    const nuevoenvio = new ModeloEnvio({
        email:req.body.email,
        idenvio:req.body.idenvio,
        fecha:req.body.fecha,
        hora:req.body.hora,
        estado:req.body.estado,
        largo:req.body.largo,
        alto:req.body.alto,
        ancho:req.body.ancho,
        peso:req.body.peso,
        direccion_recogida:req.body.direccion_recogida,
        ciudad_recogida:req.body.ciudad_recogida,
        nombre_destinatario:req.body.nombre_destinatario,
        cedula_destinatario:req.body.cedula_destinatario,
        direccion_entrega:req.body.direccion_entrega,
        ciudad_entrega:req.body.ciudad_entrega
    })
    nuevoenvio.save(function(err){
        if(!err){
            res.send("Envio agregado correctamente")
        }else{
            res.send(err)
        }
    })
})

//Obtener todos los envios
router.get('/obtenerenvios',(req,res)=>{
    ModeloEnvio.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//obtener data de envio
router.post('/obtenerdataenvio',(req,res)=>{
    ModeloEnvio.find({idenvio:req.body.idenvio},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//actualizar envio
router.post('/actualizaenvio',(req,res)=>{
    ModeloEnvio.findOneAndUpdate({idenvio:req.body.idenvio},{
        email:req.body.email,
        fecha:req.body.fecha,
        hora:req.body.hora,
        estado:req.body.estado,
        largo:req.body.largo,
        alto:req.body.alto,
        ancho:req.body.ancho,
        peso:req.body.peso,
        direccion_recogida:req.body.direccion_recogida,
        ciudad_recogida:req.body.ciudad_recogida,
        nombre_destinatario:req.body.nombre_destinatario,
        cedula_destinatario:req.body.cedula_destinatario,
        direccion_entrega:req.body.direccion_entrega,
        ciudad_entrega:req.body.ciudad_entrega
    },(err) => {
        if(!err){
            res.send('Envio actualizado correctamente')
        }else{
            res.send(err)
        }
    })
    
})

//borrar envio
router.post('/borrarenvio',(req,res)=>{
    ModeloEnvio.findOneAndDelete({idenvio:req.body.idenvio},(err) => {
        if(!err){
            res.send('Envio borrado correctamente')
        }else{
            res.send(err)
        }
    })
    
})

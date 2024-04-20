import { matchedData } from 'express-validator'
import Track from '../models/Track.js'
import { handleHttpError } from '../helpers/httperror.js'

const getItems = async (req, res)=>{
    try{
        const data = await Track.find({})
        res.send({data})
    }catch(e){
        handleHttpError(res, 'No se pudo cargar los track')
    }
}

const getItem = async (req, res)=>{
    try{
        // const req = matchedData(req)
        const { id } = req.params
        const data = await Track.findById(id)
        res.send(data)
    }catch(e){
        handleHttpError(res, 'Error en ver un track')
    }


}

const createItem = async (req, res)=>{
    try{
        const body = matchedData(req)
        const response  = await Track.create(body)
        res.send(response)
    }catch(e){
        handleHttpError(res, 'No se pudo crear el track, intente nuevamente')
    }
}

const updateItem = async (req, res)=>{
    try{
        const {id, ...body} = matchedData(req)
        const response  = await Track.findOneAndUpdate({'_id': id } , body)
        res.send(response)
    }catch(e){
        handleHttpError(res, 'No se pudo actualizar el track, intente nuevamente')
    }
}
const deleteItem = async(req, res)=>{
    try{
        const {id } = req.params
        const response = await Track.deleteOne({'_id': id})
        res.send(response)
    }catch(e){
        handleHttpError(res, 'No se pudo eliminar el track, intente nuevamente')
    }
}

export{
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}
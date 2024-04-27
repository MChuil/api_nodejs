import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import Storage from '../models/Storage.js'
import { handleHttpError } from '../helpers/httperror.js'

const filename = fileURLToPath(import.meta.url) //User/chuil/documentos/...storageController.js
const dirname = path.dirname(filename) ///Users/chuil/Documents/nodejs/apirest/controllers
const PATH_STORAGE =   `${dirname}/../storage`

const getItems = async (req, res)=>{
    const data = await Storage.find({})
    res.send({data})
}

const getItem = (req, res)=>{}

const createItem = async (req, res)=>{
    const  { body , file}  = req
    console.log(file)
    let data = {
        filename: file.filename,
        url: file.path
    }
    const response  = await Storage.create(data)
    res.send(response)
}

//TODO: pendiente
const updateItem = (req, res)=>{}

const deleteItem = async (req, res)=>{
    try{
        console.log(PATH_STORAGE)
        const { id } = req.params
        const data = await Storage.findById({'_id': id})
        const filePath = `${PATH_STORAGE}/${data.filename}` //c:/react/api/storage/akjsdkja.js
        //eliminación fisica del media
        fs.unlinkSync(filePath)
        //eliminar documento de la BAse de datos
        const storageDelete = await Storage.deleteOne({'_id': id})
        const response = {
            filePath,
            deleted: true
        }
        res.send(response)
    }catch(e){
        handleHttpError(res, 'No se pudo eliminar el storage, intente nuevamente')
    }
}

export{
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}
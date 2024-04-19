import Storage from '../models/Storage.js'

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

const updateItem = (req, res)=>{}
const deleteItem = (req, res)=>{}

export{
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}
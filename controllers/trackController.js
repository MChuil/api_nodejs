import Track from '../models/Track.js'

const getItems = async (req, res)=>{
    const data = await Track.find({})
    res.send({data})
}

const getItem = (req, res)=>{}

const createItem = async (req, res)=>{
    const  data  = req.body
    console.log(data)
    const response  = await Track.create(data)
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
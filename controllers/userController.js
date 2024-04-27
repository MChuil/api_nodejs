import User from '../models/User.js'

const getUsers = async (req, res)=>{
    const users = await User.find({})
}

//TODO: pendiente
const createUser = async(req, res) =>{
    
}

//TODO: pendiente
const updateUser = async(req, res) =>{

}

//TODO: pendiente
const deleteUser = async(req, res) =>{

}


export{
    getUsers
}
import User from '../models/User.js'

const getUsers = async (req, res)=>{
    const users = await User.find({})
}

const createUser = async(req, res) =>{
    
}

const updateUser = async(req, res) =>{

}

const deleteUser = async(req, res) =>{

}


export{
    getUsers
}
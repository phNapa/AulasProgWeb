import User from "../models/userModel.js"

async function getAllUsers(req,res){
    const users = await User.findAll()
    res.json(users)
}

export default getAllUsers
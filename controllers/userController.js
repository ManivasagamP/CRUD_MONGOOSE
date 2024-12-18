import User from "../models/userModel.js";

export const create = async(req,res) =>{
    const userData = new User(req.body);
    const {email} = userData;

    const userExist = await User.findOne({email});
    if(userExist){
        res.status(400).json({message:"user already exist"});
    }

    const savedUser = await userData.save();
    return res.status(200).json({message:"User saved",savedUser});
}

export const read = async(req,res) =>{

    try {
        const allUsers = await User.find();
        return res.status(200).json({allUsers});
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
}

export const clear = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"No user found"});
        }
        const clearedUser = await User.findByIdAndDelete(id);
        return res.status(200).json({message:"deleted successfully"});
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
}

export const update = async(req,res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"No user found"});
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body,{new:true});
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }

}
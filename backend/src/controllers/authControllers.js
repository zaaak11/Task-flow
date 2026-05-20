import bcrypt from "bcryptjs";
import User from "./models/userModel.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

//--Sign Up Logic--
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({"message" : "a User already exists with this email"});
        }


        await User.create({name, email, password});
        return res.status(200).json({"message" : "User have been created successfully"});

    } catch (error) {
        return res.status(500).json({"message" : error.message});
        
    }
};


//--Sign In Logic--
const signin = async (req, res) => {
    try {

        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({"message" : "User not found, try to signup"});
        }
        const doesMatch = await bcrypt.compare(password, user.password);
        if (!doesMatch){
            return res.status(400).json({"message" : "Wrong credentials"});
        };

        const token = jwt.sign(
            {userId : user._id, email : user.email}, process.env.JWT_SECRET, {expiresIn : "10d"}
        );
        return res.status(201).json({"message" : "signin successful", token});
        

    } catch (error) {
        return res.status(500).json({"message" : error.message})
    }
} 
 
export { signup, signin };
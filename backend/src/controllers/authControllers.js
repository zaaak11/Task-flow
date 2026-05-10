import User from "./models/userModel.js";

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userexist = await User.findOne(email)

        if(userexist){
            return res.status(400).json({"message" : "a User already exists with this email"});
        }


        await User.create({name, email, password});
        res.status(200).json({"message" : "User have been created successefully"});

    } catch (error) {
        res.status(500).json({"message" : error.message});
        
    }
}
 
export default signup;
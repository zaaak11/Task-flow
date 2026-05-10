import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Username is required"],
        minLength: [4, "Username must be at least 4 characters long"],
        maxLength: [30, "What a name, But it must be shorter"],
        trim : true,
        match: [/^[a-zA-Z]+$/, "The name must only contain characters"],
    },

    email : {
        type : String,
        required : [true, "Email is required"],
        trim : true,
        minLength : [5, "Email adress is too short"],
        maxLength : [40, "Email adress is too long"],
        match: [/\S+@\S+\.\S+/, "Invalid email adress"],
    },
    password : {
        type : String,
        required : [true, "Password is required"],
        minLength : [6, "Password is too short"],
    }

}, {timestamps : true});

//--Password hashing middleware--

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error)
    }
    
});

const User = mongoose.model('User', userSchema);

export default User;


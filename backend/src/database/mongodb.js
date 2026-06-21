import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const dbUri = process.env.DB_URI;

if(!dbUri){
    throw new Error("Please define a data base URI in the env file");
}

const connectToDb = async () => {
    try {
        await mongoose.connect(dbUri);
        console.log("connected to mongodb")
        
    } catch (error) {
        console.error("error connecting to DataBase", error);
        process.exit(1);
    }
}
export default connectToDb;



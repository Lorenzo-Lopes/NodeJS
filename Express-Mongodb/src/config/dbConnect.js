import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()
const uri = process.env.MONGO_CONNECT;

async function conectaNaDataBase() {
    mongoose.connect(uri)
    return mongoose.connection
}
 export default conectaNaDataBase
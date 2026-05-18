import dotenv from 'dotenv'
import mongoose from "mongoose"
dotenv.config()
const uri = process.env.MONGO_CONNECT

mongoose.connect(uri);

let db = mongoose.connection;

export default db;
import mongoose, { Connection } from "mongoose";

let isConnected: boolean | Connection = false;

const connectDB = async () => {
    if (isConnected) {
        console.log("using existing connection")
        return isConnected;
    }
    try {
        const res = await mongoose.connect(process.env.MONGO_URI!)
        isConnected = res.connection;
        console.log("MongoDB connected")
        return isConnected;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export default connectDB;
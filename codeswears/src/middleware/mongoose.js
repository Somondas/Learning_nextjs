import mongoose, { connect } from "mongoose";

const connectDB = handler => async (req, res) => {
    if (mongoose.connection.readyState[0]) {
        return handler(req, res)
    }
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE);
    return handler(req, res)
}


export default connectDB;
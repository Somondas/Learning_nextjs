import mongoose, { connect } from "mongoose";

const connectDB = async (handler) => {
    if (mongoose.connection[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect(process.env.DATABASE)
    return handler(req, res)
}
export default connectDB;
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    size: String,
    color: String,
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },

},
    { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Product", ProductSchema);
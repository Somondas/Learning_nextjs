import Product from "@/models/Product";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {

            let product = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty,
            })
            await product.save()
        }
        res.status(200).json({
            success: true,
            // product
        })
    } else {
        res.status(400).json({
            success: false,
            message: "This method is not allowed"
        })
    }

    res.status(200).json({
        success: true,
        products,
    })
}

export default connectDB(handler);

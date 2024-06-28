const Product = require('./../Models/productModels');


exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            status:"success",
            length:products.length,
            data:{
                products
            }
        });
    } catch (err) {
        res.status(500).json({
             message: err.message
             });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({
            status:'success',
            data:{
                product
            }
        });
    } catch (err) {
        res.status(500).json({
             message: err.message 
            });
    }
};

exports.createProduct = async (req, res) => {
    const newProduct = await Product.create(req.body)

    try {
        res.status(201).json({
            status:"success",
            data:{
                newProduct
            }
        });
    } catch (err) {
        res.status(400).json({
             message: err.message
             });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedProduct) return res.status(404).json({
             message: 'Product not found'
            });
        res.status(200).json({
            message:"product deleted"
        });
    } catch (err) {
        res.status(400).json({
             message: err.message 
            });
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



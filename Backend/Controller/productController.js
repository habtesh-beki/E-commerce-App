const Product = require('./../Models/productModels');
const catchAsync = require('./../utils/cathAsync')


exports.getAllProducts = catchAsync (async (req, res) => {
     const products = await Product.find();
        res.status(200).json({
            status:"success",
            length:products.length,
            data:{
                products
            }
        });
});

exports.getProductById = catchAsync( async (req, res) => {
      const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({
            status:'success',
            data:{
                product
            }
        });
});


exports.createProduct = catchAsync(async (req, res) => {
    const newProduct = await Product.create(req.body)
      res.status(201).json({
            status:"success",
            data:{
             newProduct
        }
     });
});


exports.updateProduct = catchAsync (async (req, res) => {
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
});

exports.deleteProduct = catchAsync(async (req, res) => {
     const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted' });
});



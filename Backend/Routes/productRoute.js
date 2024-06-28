const express = require('express')
const productController = require('./../Controller/productController');


router = express.Router()

router.get('/' , productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.post('/' , productController.createProduct)
router.patch('/:id' , productController.updateProduct)
router.delete('/:id' , productController.deleteProduct)


module.exports = router;
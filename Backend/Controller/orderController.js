// const asyncHandler = require('express-async-handler');
const Order = require('./../Models/orderModels');


exports.getAllOrder = async (req, res) => {
    try{
      const allOrder = await Order.find()
   res.status(200).json({
    status:'success',
    length:allOrder.length,
    data:{
        allOrder
    }
   })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
  };

exports.addOrderItems =  async (req, res) => {
    try{
         const {user, orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const newOrder =await Order.create({
      user,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    res.status(201).json({
        status:'success',
        data:{
            newOrder
        }
    });
  }
    }catch(err){
       res.status(400).json({
         status:'fail',
         message:err.message
       })
    }

};


exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
};
exports.updateOrderToPaid = async (req, res) => {
    try{
         const order = await Order.findByIdAndUpdate(req.params.id);
    res.status(200).json({
        status:'Success',
        data:{
            order
        }
    })
    }catch(err){
       res.status(400).json({
        status:'fail',
        message:err.message
       })
    }
};

exports.deleteOrder = async (req, res) => {
    try{
       await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({
        status:'SUCCESS',
        message:'orderDeleted'
    })
    }catch(err){
       res.status(400).json({
        status:'fail',
        message:err.message
       })
    }
};


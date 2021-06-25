const Transaction = require('../models/Transaction')
const CartControllers = require('./CartControllers')
const UserControllers = require('./UserControllers')

exports.index = async function (body) {
  try {
    if (body.verified === "Yes") {
      await CartControllers.setActiveFalse(body.udf5)
    }
    const doc = await Transaction.create(body);
    await UserControllers.setTransaction(doc._id, body.email)
  } catch (error) {
    console.log(error)
  }
}

exports.previousOrders = async function (ordersArray) {
  try {
    let doc = await Transaction.find({ _id: { $in: ordersArray } });
    // doc = doc.map(product => {
    //   let quantity = 1;
    //   cartArray.forEach(element => {
    //     if (element.productId == product._id) {
    //       quantity = element.quantity
    //     }
    //   })
    //   return {product, quantity}
    // })
    return doc
  } catch (error) {
    
  }
}
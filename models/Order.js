const mongoose = require('mongoose');
const Schema = mongoose.Schema

const orderSchema = new Schema({
    name: {
        type:String
    },
    email:{
        type: String
    },
    phone: {
        type: String
    },
    description: {
        type: String
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

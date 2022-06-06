const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Lesson'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

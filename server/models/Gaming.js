const mongoose = require('mongoose');

const { Schema } = mongoose;

const gamingSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

});

const Gaming = mongoose.model('Gaming', gamingSchema);

module.exports = Gaming;

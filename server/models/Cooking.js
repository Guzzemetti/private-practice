const mongoose = require('mongoose');

const { Schema } = mongoose;

const cookingSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Home',
        required: true
    },

});

const Cooking = mongoose.model('Cooking', cookingSchema);

module.exports = Cooking;

const mongoose = require('mongoose');

const { Schema } = mongoose;

const lifestyleSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
});

const Lifestyle = mongoose.model('Lifestyle', lifestyleSchema);

module.exports = Lifestyle;

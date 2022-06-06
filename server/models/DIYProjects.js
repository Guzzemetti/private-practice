const mongoose = require('mongoose');

const { Schema } = mongoose;

const diySchema = new Schema({
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

const Diy = mongoose.model('DIY', diySchema);

module.exports = Diy;

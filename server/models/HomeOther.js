const mongoose = require('mongoose');

const { Schema } = mongoose;

const otherSchema = new Schema({
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

const HomeOther = mongoose.model('Other', otherSchema);

module.exports = HomeOther;

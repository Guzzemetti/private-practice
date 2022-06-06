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
        ref: 'Gaming',
        required: true
    },

});

const GamingOther = mongoose.model('Other', otherSchema);

module.exports = GamingOther;

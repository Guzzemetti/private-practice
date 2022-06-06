const mongoose = require('mongoose');

const { Schema } = mongoose;

const mmoSchema = new Schema({
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

const Mmo = mongoose.model('Mmo', mmoSchema);

module.exports = Mmo;

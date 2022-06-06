const mongoose = require('mongoose');

const { Schema } = mongoose;

const rpgSchema = new Schema({
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

const Rpg = mongoose.model('Rpg', rpgSchema);

module.exports = Rpg;

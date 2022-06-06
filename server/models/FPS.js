const mongoose = require('mongoose');

const { Schema } = mongoose;

const fpsSchema = new Schema({
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

const Fps = mongoose.model('Fps', fpsSchema);

module.exports = Fps;

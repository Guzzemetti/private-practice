const mongoose = require('mongoose');

const { Schema } = mongoose;

const techSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
});

const Tech = mongoose.model('Tech', techSchema);

module.exports = Tech;

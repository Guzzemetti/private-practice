const mongoose = require('mongoose');

const { Schema } = mongoose;

const miscSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
});

const Misc = mongoose.model('Misc', miscSchema);

module.exports = Misc;

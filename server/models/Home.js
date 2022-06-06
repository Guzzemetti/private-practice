const mongoose = require('mongoose');

const { Schema } = mongoose;

const homeSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;

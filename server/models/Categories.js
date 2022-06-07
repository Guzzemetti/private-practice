const mongoose = require('mongoose');

// const SubCategory = require('./SubCategories');

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    subcategory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'SubCategory',
            required: true
        },
    ],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

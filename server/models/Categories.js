const mongoose = require('mongoose');

const subCategory = require('./SubCategories');

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    subCategory: [subCategory.schema]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

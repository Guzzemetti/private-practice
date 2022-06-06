const mongoose = require('mongoose');

const { Schema } = mongoose;

const subCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    }
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;

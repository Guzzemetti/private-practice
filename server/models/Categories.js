const mongoose = require('mongoose');

const { Schema } = mongoose;
// const Gaming = require('./Gaming')
// const Home = require('./Home')
// const Lifestyle = require('./Lifestyles')
// const Tech = require('./Tech')
// const Misc = require('./Misc')

const categorySchema = new Schema({
    
    // Gaming: [Gaming.schema],
    // Home: [Home.schema],
    // Lifestyle: [Lifestyle.schema],
    // Tech: [Tech.schema],
    // Misc: [Misc.schema]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

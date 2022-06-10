const mongoose = require('mongoose');

const { Schema } = mongoose;

const lessonSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // },
    price: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    coach: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    review: [{
        type: String,
        ref: 'Review',
    }],
    subcategory: [{
        type: Schema.Types.ObjectId,
        ref: 'SubCategory',
        required: true
    }]
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;

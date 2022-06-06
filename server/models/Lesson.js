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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    coach: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },  
    review: [{
        type: String,
        ref: 'Review',
        required: true
    }]
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;

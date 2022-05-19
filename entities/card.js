const mongoose = require('mongoose');
const { Schema } = mongoose;

const card = {
    questionId: {
        type: String,
    },
    answerId: {
        type: String
    },
    prevDate: {
        type: Date
    },
    nextDate: {
        type: Date
    },
    prevDate: {
        type: Date
    },
    intervalInDays: {
        type: Number
    },
    repetitions: {
        type: Number
    },
    EFactor: {
        type: Number
    },
    disabled: {
        type: Boolean
    },

};

const cardSchema = new Schema(card);

module.exports = cardSchema;
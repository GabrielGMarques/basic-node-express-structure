const mongoose = require('mongoose');
const Card = require('./card');
const { Schema } = mongoose;

const deck = {
    userId: {
        type: Schema.Types.ObjectId
    },
    cards: {
        type: [Card]
    }
};

const deckSchema = new Schema(deck);

module.exports = mongoose.model('deck', deckSchema)
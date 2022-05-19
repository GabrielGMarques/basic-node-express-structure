const Deck = require('../../../entities/deck');
const mongoose = require('mongoose');

class DeckService {

    static async GetUserDecks(userId) {
        return Deck.find({ userId: userId})
    }
}

module.exports = DeckService;
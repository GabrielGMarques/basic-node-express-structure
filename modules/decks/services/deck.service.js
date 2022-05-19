const Deck = require('../../../entities/deck');

class DeckService {

    static async GetUserDecks(userId) {
        return Deck.find({ userId: userId})
    }
}

module.exports = DeckService;
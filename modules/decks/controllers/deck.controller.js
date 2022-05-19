const Express = require('express');
const Router = Express.Router();
const AuthMiddleware = require('../../auth/middlewares/auth.middleware');

const DeckService = require('../services/deck.service');

Router.get('/:mindMapId',
  AuthMiddleware.GetSessionUser,
  async (req, res) => {
    const decks = await DeckService.GetUserDecks(res.locals.userId);
    res.json(decks);
  });
  
module.exports = Router;
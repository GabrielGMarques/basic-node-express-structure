const express = require('express');
const router = express.Router();
const userMiddleware = require('../../auth/middlewares/auth.middleware');

const DeckService = require('../services/deck.service');

router.get('/:mindMapId',
  userMiddleware.GetSessionUser,
  async (req, res) => {
    const decks = await DeckService.GetUserDecks(res.locals.userId);
    res.json(decks);
  });
  
module.exports = router;
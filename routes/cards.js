const express = require('express');
const router = express.Router();
const {data} = require('../data/flashcardData.json');
const cards = data.cards;

router.get('/', function (req, res) {
    // res.send('hi');
    // res.render('index', {
    res.render('cards', {prompt: cards[0].question, hint: cards[0].hint});
    //     prompt: cards[0].question,
    //     hint: card[0].hint
    // });
});

module.exports = router;
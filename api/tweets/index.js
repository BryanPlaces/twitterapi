const router = require('express').Router();
const controller = require('./tweets.controller');

router.get('/', controller.obtenerTweets);
router.get('/:id', controller.obtenerTweetPorId);
router.post('/owner', controller.añadirTweet);
router.delete('/:id', controller.borrarTweet);

module.exports = router;

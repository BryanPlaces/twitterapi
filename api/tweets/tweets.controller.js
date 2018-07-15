const TWEETSModel = require('./tweets.model');

module.exports.obtenerTweets = obtenerTweets;
module.exports.obtenerTweetPorId = obtenerTweetPorId;
module.exports.añadirTweet = añadirTweet;
module.exports.borrarTweet = borrarTweet;

function obtenerTweets(req, res) {
    TWEETSModel.find({}, (err, response) => {
        if(err) return res.status(500).send(err);
        response.sort((a, b) => a.createdAt < b.createdAt ? 1: (a.createdAt > b.createdAt ? -1:0));
        res.json(response);
    })
}

function obtenerTweetPorId (req, res) {
    TWEETSModel.findOne({_id: req.params.id}, (err, response) => {
        if(err && err.name === "CastError") return res.status(400).send("El id del tweet no existe");
        if(err) return res.status(500).send(err);
        res.json(response)
    })
}


function añadirTweet(req, res) {
    
    const nuevoTweet = new TWEETSModel ({
        text : req.body.text,
        owner : req.body.owner,
        createdAt: Date.now()
    })

    nuevoTweet.save(function(err) {
        if(err) return res.status(406).send(err.message);
        return res.status(201).json(nuevoTweet)
    })
}

function borrarTweet(req, res) {

    TWEETSModel.findOneAndRemove({_id: req.params.id}, (err, response) => {
        if(err && err.name === "CastError") return res.status(400).send("El id del tweet no existe");
        if(err) return res.status(500).send(err);
        return res.json(response);
    })
}

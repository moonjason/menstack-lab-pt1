const express = require('express');
const router = express.Router();
const Player =  require('../models/player');



router.get('/new', (req, res) => {
    res.render('new.ejs');
})

// Index Route
router.get('/', (req, res) => {
    Player.find({}, (err, foundPlayers) => {err? console.log(err) :
        res.render('index.ejs', {
            player: foundPlayers,
        })
    })
})
// Show Route
router.get('/:id', (req, res) => {
    Player.findById(req.params.id, (err, foundPlayers) => {
        if (err) {
            res.send(err);
        } else {
            res.render('show', {
                player: foundPlayers,
            })
        }
    })
})

router.get('/:id/edit', (req, res) => {
    Player.findById(req.params.id, (err, foundPlayers) => {
        if (err) {
            res.send(err);
        } else {
            let sponsors = foundPlayers.sponsors.join('')
            res.render('edit', {
                player: foundPlayers,
                id: req.params.id,
                sponsors: sponsors
            })
        }
    })
})


router.post('/', (req, res) => {
    if(req.body.injured === 'on'){
        // we do this to make it look like the
        // data in our model "sanitizing our data"
        req.body.injured = true;
    } else {
        req.body.injured = false;
    }
    req.body.sponsors.split(' ');
    Player.create(req.body, (err, created) => {err? res.send(err) : console.log(created);res.redirect('/players');})
})

router.delete('/:id', (req, res) => {
    Player.findByIdAndDelete(req.params.id, (err, deleted) => {
        if (err) {
            res.send(arr);
        } else {
            console.log(deleted);
            res.redirect('/players');
        }
    })
})


module.exports = router;
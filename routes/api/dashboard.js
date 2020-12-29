const { response } = require('express');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const headers = {
    'Content-Type':'application/json',
    'Accept':'application/json',
    'x-api-key':'Ba5SoB8Xxx9F3d6qAiSIA9x7z6SVliGzoRxNdpo3'
};

const Dashboard = require('../../models/Dashboard');

// @route   GET api/dashboard
// @desc    GET All items
// @access  Public
// router.get('/id', (req,res) => {
//     // Item.find()
//     //     .then(dashboard => res.json(dashboard))
//     res.send(id);
//     res.json(id);
//     console.log("Id is" + id);
// });

// @route   POST api/items
// @desc    Create A Item
// @access  Public
router.post('/', (req,res) => {
    
    delete req.body.currentVideo;
    delete req.body.id;
    console.log(req.body);
    var bodygot = JSON.stringify(req.body);
    // console.log(bodygot);
    fetch('https://api.shotstack.io/stage/render',
    {
        method: 'POST',
        body: bodygot,
        headers: headers
    })
    .then(function(res) {
        return res.json();
    }).then(function(body) {
        //console.log(body);
        id = body.response.id;
        res.send(body.response.id);
        console.log(body.response.id);
    });
});

module.exports = router;
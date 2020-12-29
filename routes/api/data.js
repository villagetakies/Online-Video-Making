const { response } = require('express');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const Dashboard = require('../../models/Dashboard');


// @route   GET api/data
// @desc    GET All Dashboard Items
// @access  Public
router.get('/', (req,res) => {
    Dashboard.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

// @route   POST api/data
// @desc    Create A Dashboard 
// @access  Public
router.post('/', (req,res) => {
    const newVideo = new Dashboard({
        "timeline": req.body["timeline"],
        "output": req.body["output"]
    })

    newVideo.save().then(newvideo => res.json(newvideo));
});


module.exports = router;
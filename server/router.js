const express = require('express');
const router = new express.Router();
const Donations = require('./model/model');

router.post('/api/donate', (req, res) => {
    let addDonation = new Donations(req.body);
    addDonation.save().then(() => {
        res.status(201).send("Donation is added");
    }).catch((e) => {
        res.status(400).send("Error: " + e)
    })
})

router.get('/api/availabledonation', async (req, res) => {
    let datas = await Donations.find();
    try {
        res.json(datas);
    } catch (e) {
        res.status(404).send(e);
    }
})

module.exports = router;

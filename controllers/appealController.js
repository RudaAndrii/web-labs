const mongoose = require('mongoose');

const Appeal = require('../models/appeal');

module.exports = {
    async saveAppeal(req, res) {
        let appealDto = req.body.appeal;
        await Appeal.create(appealDto);
        res.status(201).send('ok');
    },

    async getAllAppeals(req, res) {
        let appeals = await Appeal.find();
        return res.status(200).send(appeals);
    }
}
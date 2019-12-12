const mongoose = require('mongoose');

const News = require('../models/news');

module.exports = {
    async saveNews(req, res) {
        let newsDto = req.body.news;
        await News.create(newsDto);
        res.status(201).send('ok');
    },

    async getAllNews(req, res) {
        let news = await News.find();
        return res.status(200).send(news);
    }
};
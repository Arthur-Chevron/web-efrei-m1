const mongoose = require('mongoose');
const dbConfig = require("../config/db.config")
const Cars = require("./car.model")

const db = {
    "mongoose":mongoose,
    "url":dbConfig.url,
    "Cars":Cars(mongoose)
}

module.exports = db
const { Schema, model, Types: { ObjectId } } = require('mongoose');

const itemSchema = new Schema({
    destination,
    title,
    cost,
    duration,
    imgUrl,
    description
})
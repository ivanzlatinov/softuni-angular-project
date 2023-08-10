const { Schema, model, Types: { ObjectId } } = require('mongoose');

const itemSchema = new Schema({
    destination: { type: String, required: true, minlength: [4, 'Destination name must be atleast 4 characters long']},
    title: { type: String, required: true, minlength: [5, 'Title name must be atleast 5 characters long']} ,
    cost : { type: Number, required: true, min: [0.01, 'Cost must be higher than 0']},
    duration: { type: String, required: true, minlength: [5, 'Duration name must be atleast 3 characters long']},
    imgUrl:  { type: String, required: [true, 'Image Url is required'] } ,
    description: { type: String, required: true, minlength: [15, 'Description name must be atleast 15 characters long']},
    _ownerId: { type: ObjectId, ref: 'User', required: true}
});

const Item = model('Item', itemSchema);

module.exports = Item;
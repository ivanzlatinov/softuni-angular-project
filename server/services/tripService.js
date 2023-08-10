const Item = require("../models/Item")

async function getAll() {
   return Item.find({});
}

async function getByUserId(userId){
  return Item.find({ _ownerId: userId })
}

async function getById(id) {
   return Item.findById(id);

}

async function create(item){
return Item.create(item);

}

async function update(id, item) {
const existing = await Item.findById(id);

existing.destination = item.destination;
existing.title = item.title;
existing.cost = item.cost;
existing.duration = item.duration;
existing.imgUrl = item.imgUrl;
existing.description = item.description;

return existing.save();

}

async function deleteById(id){
return Item.findByIdAndDelete(id)

}

module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    update,
    deleteById
}
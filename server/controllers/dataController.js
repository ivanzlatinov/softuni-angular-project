
const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, update, deleteById, getByUserId } = require('../services/tripService');

const dataController = require('express').Router();

dataController.get('/', async (req, res) => {
    let items = [];
    if(req.query.where){
        const userId = JSON.parse(req.query.where.split('=')[1]);
        items = await getByUserId(userId);
    }else{
     items = await getAll();
}
res.json(items);

})

dataController.post('/', hasUser(), async (req, res) => {
    try{
        const data = Object.assign({ _ownerId: req.user.id }, req.body);
       const item = await create(data);
       res.json(item);
    }catch(err){
        res.status(400);
        console.log(err)
    }
    res.end();
});


dataController.get('/:id',  async (req, res, next) => {
    const item = await getById(req.params.id);
    res.json(item);
});

dataController.put('/:id', hasUser(), async (req, res, next) => {
    const item = await getById(req.params.id);
    if(req.user._id != item._ownerId){
        return res.status(403).json({ message: 'You cannot modify this record'});
    }

    try {
    const result = await update(req.params.id, req.body);
    res.json(result);
    } catch (err){
        res.status(400)
        console.log(err);
    }
});

dataController.delete('/:id', hasUser(), async (req, res) => {
    const item = await getById(req.params.id);
    if(req.user._id != item._ownerId){
        return res.status(403).json({ message: 'You cannot modify this record'});
    }

    try {
        await deleteById(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(400)
        console.log(err);
    }

})

module.exports = dataController;
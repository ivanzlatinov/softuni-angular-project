const express = require('express');
const cors = require('./middlewares/cors');
const  mongoose  = require('mongoose');
const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');
const trimBody = require('./middlewares/trimBody');
const session = require('./middlewares/session');


const connectionString = 'mongodb://0.0.0.0:27017/travel-blog';

start();

async function start() {
 await mongoose.connect(connectionString);
console.log('Database connected')

const app = express();

app.use(express.json());
app.use(cors());
app.use(trimBody());
app.use(session());

app.get('/', (req, res) => {
    res.json({ message: 'REST Service operational'});
})


app.use('/users', authController);
app.use('/data/catalog', dataController);

app.listen(3000, () => console.log('REST service started'));
}

//REPLACE THROW WITH CONSOLE.LOG() !
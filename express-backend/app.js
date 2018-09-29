const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const router = express.Router();
// set up express app


// connect to mongodb
mongoose.connect('mongodb://127.0.0.1/task', {
    useMongoClient: true
   
});

// fix mongoose mpromise deprecation in node 8.x
Promise.promisifyAll(mongoose)
mongoose.Promise = global.Promise;

// use body-parser middleware json
app.use(bodyParser.json());

// routes//
app.use('/api', require('./routes/api'));

// error handling
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
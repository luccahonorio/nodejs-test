
// INIT MONGOOSE

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodejstestdb', { useNewUrlParser: true, useUnifiedTopology: true });

// IMPORT MODELS

const { Sample } = require('./models/sample');

// EXPRESS

const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    Sample.find((err, samples) => {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.send({ samples });
        }
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
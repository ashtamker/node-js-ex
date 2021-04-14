const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
const usersRoute = require('./worker.routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/worker', usersRoute)

app.listen(port, () => {
    console.log('running at ' + port);
})
const express = require('express');
const bodyParser = require('body-parser');
const port = 8001;
const app = express();
const workerRoute = require('./worker.routes');
const roomRoute = require('./rooms.routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/worker', workerRoute);
app.use('/api/rooms', roomRoute);

app.listen(port, () => {
    console.log('running at ' + port);
})
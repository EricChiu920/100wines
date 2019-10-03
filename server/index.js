const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3001;

app.use(cors({ credentials: true }));

app.use('/api', routes);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

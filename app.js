const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

// Routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

// Start the app
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
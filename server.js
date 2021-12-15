require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const mainPage = require('./routes/main');
const errorPage = require('./routes/error');

const app = express();
app.set('view engine', 'ejs');

app.use(mainPage);
app.use(errorPage);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
})
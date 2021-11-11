require('dotenv').config();
const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
})
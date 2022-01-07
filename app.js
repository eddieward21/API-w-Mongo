const express = require('express');
const res = require('express/lib/response');
const { reset } = require('nodemon');
require('dotenv/config')
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')

const postsRoute = require('./routes/posts');
const Post = require('./models/Post');
const req = require('express/lib/request');

app.use(bodyParser.json())
app.use('/posts', postsRoute)
//ROUTES

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB')
})

app.listen(3000)


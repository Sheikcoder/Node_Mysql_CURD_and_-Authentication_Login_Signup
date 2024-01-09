const express = require('express');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //predefind api import
app.use(bodyParser.json());

app.use("/posts", postsRoutes);
app.use("/user" , userRoutes);

app.use(express.json());

module.exports = app;


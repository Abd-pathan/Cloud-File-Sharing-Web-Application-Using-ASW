const express = require('express');
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser'); 
const multer = require('multer');


const port = 5000;
const uploadFileofProject = require('./routes/upload')
const deleteFileofProject = require('./routes/deleteFile')
const userLogin = require('./routes/login')

const app = express();

// Multer configuration for file upload
const upload = multer({ dest: 'uploads/' });

//EJS setup
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static("public"));

// Express session middleware for session management
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(uploadFileofProject)
app.use(deleteFileofProject)
app.use(userLogin)

// server setup
app.listen(port, () => {
  console.log(`Server running on url http://localhost:${port}`);
})
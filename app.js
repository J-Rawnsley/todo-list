//connect to db
const mongoose = require('mongoose');

const path = require('path');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit")
const limiter = rateLimit({
	windowMs: 60 * 1000,
	max: 20
})

//for use in development, disable during production
const connectString = require('./connectString');

//for use in production, disable during development
// const connectString = process.env.CONNECT_STRING

async function main() {
  await mongoose.connect(connectString);
  console.log('connected to database');
}


main().catch((err) => console.log(err));

//set up the server
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// view engine setup
app.set('view engine', 'pug');

//set up express to populate request body with form field
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//enable css
app.use(express.static(path.join(__dirname, 'public')));

//for security
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      'script-src': ["'self'", 'code.jquery.com', 'cdn.jsdelivr.net'],
    },
  })
);

//use rate limiter to limit number of requests to the database
app.use(limiter)

//import model
const Item = require("./models/item.js")

//import controller
const mainController = require("./controllers/mainController.js")


//call controller functions to show the list, add, delete and clear items

app.get('/', mainController.displayToDoList)

app.get('/delete/:id', mainController.deleteItem);

app.get('/clear', mainController.clearAll);

app.post('/', mainController.addItem);

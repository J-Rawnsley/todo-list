//connect to db
const mongoose = require('mongoose');
const connectString = require('./connectString');

console.log(connectString);

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

//create a model
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
	content: { type: 'string' },
});

const Item = mongoose.model('Item', ItemSchema);

//add some data using the models
const testItem = new Item({
	content: 'This is a test item.',
});

// testItem.save();

// new Item({
// 	content: 'This is a second test item.',
// }).save();

// Item.deleteMany({}).then(console.log(" all items deleted"))

//create a list of items and pass them to the render function

const itemList = async (req, res, next) => {
	const allItems = await Item.find({}).exec();
	console.log(allItems);

	res.render('main', {
		items: allItems,
	});
};

//call the render function to display the main page
app.get('/', (req, res) => {
	itemList(req, res);
});

app.get('/delete/:id', async (req, res) => {
	await Item.findByIdAndDelete(req.params.id);
	res.redirect('/');
});

app.get('/clear', (req, res) => {
	Item.deleteMany({}).then(res.redirect('/'));
});

//add an item
app.post('/', async (req, res) => {
	console.log('post request');
	const newItem = new Item({
		content: req.body.content,
	});
	const allItems = await Item.find({}).exec();
	if (allItems.length < 10) {
		await newItem.save();
	}
	itemList(req, res);
});

//import model
const Item = require('../models/item.js');

//create a list of items and render them in the main view
const itemList = async (req, res, next) => {
	const allItems = await Item.find({}).exec();
	console.log(allItems);

	res.render('main', {
		items: allItems,
	});
};

//call the item list function to render the list of items
exports.displayToDoList = (req, res) => {
	itemList(req, res);
};

//add an item, then re-render the main view
exports.addItem = async (req, res) => {
	console.log('post request');
	const newItem = new Item({
		content: req.body.content,
	});
	const allItems = await Item.find({}).exec();
	if (allItems.length < 10 && newItem.content.length > 0) {
		await newItem.save();
	}
	itemList(req, res);
};

//delete an item
exports.deleteItem = async (req, res) => {
	await Item.findByIdAndDelete(req.params.id);
	res.redirect('/');
};

//clear all items
exports.clearAll = (req, res) => {
	Item.deleteMany({}).then(res.redirect('/'));
};



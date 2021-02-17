const getData = (req, res, db) => {

	//returns all items from 'items' table

	db('*')
	.from('items')
		.then(data => {
			res.json(data)
		})
		.catch(err => res.status(400).json('error - get all items'))
}

module.exports = {
	getData
}
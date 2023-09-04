const User = require('../Models/User');

exports.getAddProduct = (req, res, next) => {
	User.findAll()
		.then(UserDetails => {
			// console.log(UserDetails);
			res.json(UserDetails);
		}).catch(err => console.log(err, 'SOME ERROR OCCURED DURING GETTING THE PRODUCTS FROM DB'));
}

exports.postAddProduct = (req, res, next) => {
	const name = req.body.name;
	const email = req.body.email;
	// const name = "mohd danish";
	// const email = "mm107867dk@gmail.com";
	User.create({
		Name: name,
		Mail: email
	}).then((data) => {
		return data.save();
		// console.log('USER SUCCESSFULLY ADDED');
	}).catch(err => console.log(err));
}


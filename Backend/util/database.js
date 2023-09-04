const Sequelize = require('sequelize');

const sequelize = new Sequelize('BookingManagementApp', 'root', 'maazdanish',
	{
		dialect: 'mysql',
		host: 'localhost'
	});

module.exports = sequelize;	
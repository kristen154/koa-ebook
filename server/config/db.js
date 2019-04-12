const Sequelize = require('sequelize');

const theDb = new Sequelize('mysql://root:123456@localhost/ebook',{
	define: {
		timestamps: false
	}
})

module.exports = {
	theDb
}
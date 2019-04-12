const Sequelize = request('sequelize');

const theDb = new Sequelize('mysql://root:12345@localhost/ebook',{
	define: {
		timestamps: fasle
	}
})

module.exports = {
	theDb
}
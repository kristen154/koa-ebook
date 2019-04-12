const theDatabase = require('../config/db.js').theDb;
const userSchema = theDatabase.import('../schema/koa_user.js')

const getUserByName = async function(name){
	console.log(name)
	const userInfo = await userSchema.findOne({
		where: {
			username: name
		}
	})
	return userInfo
}

module.exports = {
	getUserByName
}
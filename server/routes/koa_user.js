const userController = require('../controllers/koa_user.js')
const router = require('koa-router')();
router.post('/user',userController.postUserAuth)

module.exports = router;
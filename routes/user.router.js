const { Router } = require('express');
const router = Router();

const userController = require('../controllers/user.controller');

router.post('/login', userController.userLogin);
router.post('/register', userController.userRegister);
router.post('/recoveryAccount', userController.userRecoveryAccount);
router.put('/changePassword', userController.userChangePswd);

module.exports = router;
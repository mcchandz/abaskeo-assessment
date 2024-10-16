const express = require('express');
const router = express.Router();
const userAdminController = require('../controller/user.admin.controller');

router.post('/register', userAdminController.saveUserAdmin);
router.post('/login', userAdminController.loginUserAdmin);
router.get('/users/:role', userAdminController.findAllData);
router.delete('/users/:role/:id', userAdminController.deleteUserById);

module.exports = {
    router
}
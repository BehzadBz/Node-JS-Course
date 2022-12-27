const express = require('express');
const usedController = require('../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(usedController.getAllUsers)
  .post(usedController.createUser);

router
  .route('/:id')
  .get(usedController.getUser)
  .patch(usedController.updateUser)
  .delete(usedController.deleteUser);

module.exports = router;

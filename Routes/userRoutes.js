const express = require('express');
const { createUser, getUsers, updateUser, deleteUser } = require('../Controller/userController');
const router = express.Router();

// Route to create a new user
router.post('/', createUser);

// Route to fetch all users
router.get('/', getUsers);

// Route to update a user
router.put('/:id', updateUser);

// Route to delete a user
router.delete('/:id', deleteUser);

module.exports = router;

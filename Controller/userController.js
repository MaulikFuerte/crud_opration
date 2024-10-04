const User = require('../Models/User');

// Controller for creating a new user
const createUser = async (req, res) => {
    const { name, number } = req.body;

    try {
        const user = new User({ name, number });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        console.error("Error creating user:", err.message);
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
};

// Controller for fetching all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error("Error fetching users:", err.message);
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
};

// Controller for updating a user
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, number } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, number }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (err) {
        console.error("Error updating user:", err.message);
        res.status(500).json({ message: 'Error updating user', error: err.message });
    }
};

// Controller for deleting a user
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error("Error deleting user:", err.message);
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
};

module.exports = { createUser, getUsers, updateUser, deleteUser };

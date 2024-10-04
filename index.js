// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // INITIALIZE
// const PORT = 3000;
// const app = express();
// const DB = "mongodb+srv://maulikfuerte:7410@connection.burvd.mongodb.net/?retryWrites=true&w=majority&appName=connection";

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // CONNECT TO DATABASE
// const connectDB = async () => {
//     try {
//         await mongoose.connect(DB);
//         console.log("Connection Successful");
//     } catch (error) {
//         console.error("Error connecting to the database:", error);
//     }
// };

// // Define the User Schema
// const UserSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     number: { type: Number, required: true },
// });

// // Create the User model
// const User = mongoose.model('Users', UserSchema);

// // API Route to create a new user
// app.post('/api/users', async (req, res) => {
//     const { name, number } = req.body; // Destructure fields from the request body
//     console.log("Request Data:", { name, number });

//     // Create a new user instance
//     const user = new User({ name, number }); // Pass all fields

//     try {
//         // Save user to database
//         await user.save();
//         console.log("User created successfully:", user);
//         res.status(201).json({ message: 'User created successfully', user });
//     } catch (err) {
//         console.error("Error creating user:", err.message);
//         res.status(500).json({ message: 'Error creating user', error: err.message });
//     }
// });

// // API Route to fetch all users
// app.get('/api/users', async (req, res) => {
//     try {
//         const users = await User.find(); // Fetch all users from the database
//         console.log("Fetched Users:", users);
//         res.status(200).json(users); // Send users as JSON response
//     } catch (err) {
//         console.error("Error fetching users:", err.message);
//         res.status(500).json({ message: 'Error fetching users', error: err.message });
//     }
// });

// // API Route to update a user
// app.put('/api/users/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, number } = req.body;

//     try {
//         const updatedUser = await User.findByIdAndUpdate(id, { name, number }, { new: true });
//         if (!updatedUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json({ message: 'User updated successfully', updatedUser });
//     } catch (err) {
//         console.error("Error updating user:", err.message);
//         res.status(500).json({ message: 'Error updating user', error: err.message });
//     }
// });

// // API Route to delete a user
// app.delete('/api/users/:id', async (req, res) => {
//     const { id } = req.params;

//     try {
//         const deletedUser = await User.findByIdAndDelete(id);
//         if (!deletedUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json({ message: 'User deleted successfully' });
//     } catch (err) {
//         console.error("Error deleting user:", err.message);
//         res.status(500).json({ message: 'Error deleting user', error: err.message });
//     }
// });

// // Start Server
// const startServer = async () => {
//     await connectDB();

//     app.listen(PORT, () => {
//         console.log(PORT + ' Connected');
//     });
// };

// startServer();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');

// CONFIG
const PORT = process.env.PORT || 3000;
const DB = "mongodb+srv://maulikfuerte:7410@connection.burvd.mongodb.net/?retryWrites=true&w=majority&appName=connection";

// EXPRESS APP INITIALIZATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/users', userRoutes);

// DATABASE CONNECTION
const connectDB = async () => {
    try {
        await mongoose.connect(DB);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit process if connection fails
    }
};

// START THE SERVER
const startServer = async () => {
    await connectDB(); // Connect to the database first

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

// Start the server
startServer();


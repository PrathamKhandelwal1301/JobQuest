const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user'); // Replace with your user model path

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET ; // Use environment variables for better security

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate the input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const newUser = await User.create({ email, password: hashedPassword });

        // Generate a JWT token for the new user
        const token = jwt.sign(
            { id: newUser._id, email: newUser.email }, // Payload
            process.env.JWT_SECRET,             // Secret
            { expiresIn: '1h' }                 // Options
        );

        res.status(201).json({
            message: 'User registered successfully',
            token,
        });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


// Login controller
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login successful',
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Example protected route
exports.protected = (req, res) => {
    res.status(200).json({ message: 'You have access to this protected route' });
};
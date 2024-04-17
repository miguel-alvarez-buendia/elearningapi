const User = require('../models/user.model');
const { hashPassword, comparePassword, generateToken } = require('../config/auth');


async function createUser(req, res) {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ where: { email } });
        if (user) throw new Error('User already exists');
        const hashedPassword = await hashPassword(password);
        user = await User.create({ email, password: hashedPassword });

        const token = generateToken(user);
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) throw new Error('User not found');

        const isValidPassword = await comparePassword(password, user.password);
        if (!isValidPassword) throw new Error('Invalid password');

        const token = generateToken(user);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

module.exports = {
    createUser,
    login
};
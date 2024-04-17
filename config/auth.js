const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secretKey = 'my_secret_key';

function generateToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null;
    }
}

function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

function comparePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}

function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        next();
    });
}

module.exports = {
    generateToken,
    verifyToken,
    hashPassword,
    comparePassword,
    authenticateToken
};

const jwt = require('jsonwebtoken');

function generateTokenAndSetCookie(userId, res) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // milliseconds conversion
        httpOnly: true, // preven XSS attacks
        sameSite: "strict", // prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development",
    });
};

module.exports = generateTokenAndSetCookie;
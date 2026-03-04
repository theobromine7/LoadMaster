const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function auth(req, res, next) {
    try {
        console.log("HEADERS:", req.headers);

        const token = req.header("x-auth-token");

        if (!token) {
            return res.status(401).json({
                msg: "No authentication token, access denied"
            });
        }

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // fetch full user from DB
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                msg: "User not found"
            });
        }

        // attach full user object
        req.user = user;

        next();

    } catch (err) {
        res.status(401).json({
            msg: "Token invalid or expired"
        });
    }
}

module.exports = auth;

const jwt = require('jsonwebtoken');
const JWT_SECRET = "Aj7223924944kj";

// module.exports.authenticate = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ message: 'Unauthorized: No token provided' });
//     }

//     const token = authHeader.split(' ')[1];
//     console.log(token);
//     try {
//         const decoded = jwt.verify(token, JWT_SECRET);
//         req.user = decoded; // Attach user data to request
//         next(); // Proceed to next middleware/controller
//     } catch (err) {
//         console.log(err);
//         return res.status(401).json({ message: 'Unauthorized: Invalid token' });
//     }
// };



module.exports.authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: Token not provided or malformed' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded token to the request
        next(); // Pass control to the next middleware/route handler
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};
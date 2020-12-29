const { verify } = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    checkToken: (req,res,next) => {
        var token = req.get("authorization");
        if (token){
            token = token.slice(7); 
            // remove "Bearer " 
            verify(token, process.env.SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json({
                        success: 0,
                        message: "Invalid or expired token"
                    });
                } else {
                    next();
                }
            })

        } else {
            return res.status(401).json({
                success: 0,
                message: "access denied!",
            });
        }
    }
}
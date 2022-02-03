import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']
    if (token == null || token == undefined) return res.sendStatus(403);

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(403);
        }
        req.user = user 
        next()
    })
}
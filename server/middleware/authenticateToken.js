import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']

    if (token == null) return res.sendStatus(403);
    console.log(token)

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(403);
        }
        req.user = user
        next()
    })
}
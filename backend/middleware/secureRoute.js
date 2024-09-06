import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

const secureRoute = async (req, res, next) => {

    const token = req.cookies.jwt;
    try {

        if (!token) {
            return res.status(401).json({ error: "no token, authorization denied" })
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_Secret);
            try {
                const user = await User.findOne({ _id: decoded.userID }).select("-password");
                req.user = user;
            } catch (error) {
                return res.status(401).json({ error: "user does not exist" });
            }
        } catch (error) {
            return res.status(401).json({ error: "invalid token" })
        }

        next();
    } catch (error) {
        res.status(500).json({ errors: "internal server error." })
    }

}

export default secureRoute;
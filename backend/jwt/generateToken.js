import jwt from "jsonwebtoken"

const createTokenAndSaveCookie = (userID, res) => {

    const token = jwt.sign({userID}, process.env.JWT_Secret, {
        expiresIn : "1d"
    });

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict"
    });
}

export default createTokenAndSaveCookie;
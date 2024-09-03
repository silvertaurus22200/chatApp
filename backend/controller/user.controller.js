import createTokenAndSaveCookie from "../jwt/generateToken.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const signup = async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;

    try {
        if (password !== confirmPassword) {
            return res.status(400).json({ erro: "passwords do not match" })
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: "user already registered" })
        }

        const hashPassword = await bcryptjs.hash(password, 10)
        const newUser = new User({
            fullname,
            email,
            password : hashPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully" })
        console.log(res);

    } catch (error) {
        res.status(500).json({ error: "internal server error" });
        console.log(error);
    }

}


const login = async (req, res) => {
    const {email, password} = req.body;
    
    try {
        const user = await User.findOne({email});
        if(!user){
           return res.status(400).json({message: "user does not exist"});
        }
        const isMatched = await bcryptjs.compare(password, user.password)
        if(!isMatched){
            return res.status(400).json({message: "invalid password"});
        }
        createTokenAndSaveCookie(user._id, res);
        res.status(200).json({message: "user successfully logged in", user: {
            _id: user._id,
            fullname: user.fullname,
            email: user.email
        }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "internal server error"});
    }


}


const logout = (req, res) => {

    try {
        res.clearCookie("jwt");
        res.status(200).json({message: "user logout successfully"}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "internal server error"})
    }
}

export default { signup, login , logout};
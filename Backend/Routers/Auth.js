const express = require("express")
const router = express.Router();
const usermodel = require("../Models/User")
const JWT_SECRET = "yadgshdgjfrurfg"
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();


let transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,  
    },
});

router.post("/register", async (req, res) => {
    const { name, email, rollnum, password, phone } = req.body;

    // Email validation
    if (!validator.isEmail(email) || !validator.isLength(email, { min: 3, max: 320 })) {
        return res.status(400).send({
            success: false,
            message: "Invalid email"
        });
    }

    // Phone number validation
    if (!validator.isLength(phone, { min: 10, max: 10 })) {
        return res.status(400).send({
            success: false,
            message: "Phone number should be 10 digits"
        });
    }

    // Password validation
    if (!validator.isLength(password, { min: 6 })) {
        return res.status(400).send({
            success: false,
            message: "Password should be at least 6 characters long"
        });
    }

    // Check if user already exists
    const suser = await usermodel.findOne({ email });
    if (suser) {
        return res.status(400).send({
            success: false,
            message: "User already exists"
        });
    }

    // Hash password and save user
    const hashedpass = await bcrypt.hash(password, 10);
    const user = new usermodel({ name, email, rollnum, password: hashedpass, phone });
    await user.save();

    // Send email
    const subject = "Welcome";
    const text = "Welcome to Feedbacker";
    var mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: subject,
        text: text,
    };

    // Send email using nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send({
                success: false,
                message: "Error sending email"
            });
        } else {
            console.log('Email sent:', info.response);
        }
    });

    // Respond with success message
    return res.status(201).send({
        success: true,
        message: "User registered successfully"
    });
});

router.post("/login", async (req, res) => {               // http://localhost:5000/api/v1/login
    try {
        const { password, email } = req.body;
        //validation
        if (!password | !email) {
            return res.status(401).send({
                success: false,
                message: "Please provide  password",
            });
        }
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "email is not registerd",
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invlid email  or password",
            });
        }
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
            expiresIn: "7d"
        });
        return res.status(200).send({
            success: true,
            messgae: "login successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                rollnum: user.rollnum,
                password: user.password,
                phone: user.phone,
                role : user.role
                
            },
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Login Callcback",
            error,
        });
    }
}
);
module.exports = router;


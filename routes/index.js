const express = require("express");
const router = express.Router();

router.post("/send", (req, res, next) => {
    const { name, email, message } = req.body;

    debugger

    let mail = {
        from: email,
        to: process.env.EMAIL,
        subject: `Contact message from ${name}`,
        html: message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            debugger
            res.json({
                message: "Fail to send email"
            })
        } else {
            debugger
            res.json({
                message: "Email sent."
            })
        }
    })
});

module.exports = router;
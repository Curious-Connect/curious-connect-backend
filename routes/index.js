const express = require("express");
const router = express.Router();


router.get("/", function(req,res) {
    res.send("connected")
})

router.post("/send", (req, res, next) => {
    const { name, email, message } = req.body;

    let mail = {
        from: email,
        to: process.env.EMAIL,
        subject: `Contact message from ${name}`,
        html: message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                message: "Fail to send email"
            })
        } else {
            res.json({
                message: "Email sent."
            })
        }
    })
});

module.exports = router;
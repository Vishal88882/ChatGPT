const express = require("express");
const fs = require("fs/promises")
const app = express();
const nodemailer = require("nodemailer");
app.use(express.json())
app.use((req, res, next) => {
    console.log("it's custom middleware")
    req.example = "exampleValue";
    next();
});
const cors = require('cors');
app.use(cors());

app.post("/signup", async (req, res) => {

    try {
        const filecontent = await fs.readFile("./users.json", "utf-8")
        const usercontent = JSON.parse(filecontent)
        const { email } = req.body;
        const code = Math.floor(1000 + Math.random() * 9000)
        if (!email)
            return res.status(404).json({ message: "Data Missing" })
        else {
            // check to see if any user with the given email address already exists in the usercontent arrray

            const userExists = usercontent.some(el => el.email === email);
            if (userExists) throw new Error("User already exists!");

            usercontent.push(req.body)
            if (!userExists) throw new Error("Your're not our user");
            else {

                userExists.code = code
                const stringusercontent = JSON.stringify(usercontent, null, 2)
                await fs.writeFile("./users.json", stringusercontent)
                console.log("Otp Sent!")
            }
            const Mail_Template = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Email Received</title>

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: Arial, sans-serif;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
    }

    .header {
      background: #4CAF50;
      color: #ffffff;
      text-align: center;
      padding: 20px;
      font-size: 20px;
    }

    .content {
      padding: 20px;
      color: #333333;
      font-size: 16px;
      line-height: 1.6;
    }

    .footer {
      background: #f4f4f4;
      text-align: center;
      padding: 15px;
      font-size: 12px;
      color: #777777;
    }
  </style>
</head>

<body>

  <div class="container">

    <div class="header">
      We’ve Received Your Request
    </div>

    <div class="content">
      <p>Hi, <strong>${userExists.username}</strong>,</p>

      <p>Thank you for contacting us.</p>

      <p>
        Hello ${userExists.username}, We Recieved a request to reset your password.
        Ths is your 4-digit OTP ${otp} don't share with anyone!
      </p>

      <p>
        If you have any additional information, feel free to reply to this email.
      </p>

    </div>

    <div class="footer">
      © All rights reserved.
    </div>

  </div>

</body>
</html>
`

            const transport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "codewithvishal001@gmail.com",
                    pass: "gxgo vita sphh glwl"
                }
            });
            transport.sendMail({
                to: email,
                from: "codewithvishal001@gmail.com",
                subject: "Reset Your Password",
                html: Mail_Template,
                text: "Don't share this OTP with anyone!"
            })
                .then(() => {
                    console.log("Mail sent")
                })
                .catch((error) => {
                    console.log("Error: ", error.message)
                })

            const stringusercontent = JSON.stringify(usercontent, null, 2)
            await fs.writeFile("./users.json", stringusercontent)
            res.status(200).json({
                message: "Otp Sent to your given email"
            })
        }
    } catch (error) {
        console.log("Error : ", error.message);
        res.status(401).json({ message: error.message });
    }
})

app.post("/email_verify", async (req, res) => {

    try {
        const filecontent = await fs.readFile("./users.json", "utf-8")

        const usercontent = JSON.parse(filecontent)
        const { code } = req.body;
        const userExists = usercontent.some(el => el.code == code);
        if (!userExists) throw new Error("Server error");
        else {
            res.status(200).json({
                message: "verification successfull"
            })
        }
    } catch (error) {
        console.log("Error : ", error.message);
        res.status(401).json({ message: error.message });
    }
})

app.post("/login", async (req, res) => {

    try {
        const filecontent = await fs.readFile("./users.json", "utf-8")
        const usercontent = JSON.parse(filecontent)
        const { password } = req.body;
        const userExists = usercontent.find(el => el.email == email || el.code == code);

        if(!userExists){
            res.status(202).json({message : "server error"});
        }

        const stringusercontent = JSON.stringify(usercontent, null, 2)
            await fs.writeFile("./users.json", stringusercontent)
            res.status(200).json({
                message: "Login succesfull"
            })
    } catch (error) {
        res.status(401).json({ message: "error" })
    }
})

app.listen(9000,console.log("Working ✅"));

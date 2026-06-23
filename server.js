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
const { Route } = require("lucide-react");
app.use(cors());


const otpStore = {};

// Route :: 1

app.post("/send_otp", async (req, res) => {

    try {
        const filecontent = await fs.readFile("./users.json", "utf-8")
        const usercontent = JSON.parse(filecontent)
        const { email } = req.body;
        const userExists = usercontent.find(el => el.email === email);
        const code = Math.floor(1000 + Math.random() * 9000)

        if (!userExists) {
            usercontent.push({ email, password: "" });
            await fs.writeFile("./users.json", JSON.stringify(usercontent, null, 2));
        }

        otpStore[email] = code;

        const stringusercontent = JSON.stringify(usercontent, null, 2)
        await fs.writeFile("./users.json", stringusercontent)
        console.log("Code Sent!")

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
      <p>Hi, <strong></strong>,</p>

      <p>Thank you for contacting us.</p>

      <p>
        Hello , We Recieved a request to reset your password.
        Ths is your 4-digit Code ${code} don't share with anyone!
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
            text: "Don't share this Code with anyone!"
        })
            .then(() => {
                console.log("Mail sent")
            })
            .catch((error) => {
                console.log("Error: ", error.message)
            })



        res.status(200).json({
            message: "Code Sent to your given email"
        })

    } catch (error) {
        console.log("Error : ", error.message);
        res.status(401).json({ message: error.message });
    }
})

// Route :: 2

app.post("/verify_otp", async (req, res) => {

    try {
        const { email, code } = req.body;

        if (!otpStore[email])
            return res.status(400).json({ message: "OTP expired, request a new one" });

        if (otpStore[email] != code)
            return res.status(400).json({ message: "Wrong OTP" });

        delete otpStore[email];

        const filecontent = await fs.readFile("./users.json", "utf-8")
        const usercontent = JSON.parse(filecontent)
        const userExists = usercontent.find(el => el.email == email);

        if (userExists.password !== "") {
            return res.status(200).json({ status: "old_user" });
        } else {
            return res.status(200).json({ status: "new_user" });
        }
        console.log(otpStore[email])

    } catch (error) {
        console.log("Error : ", error.message);
        res.status(401).json({ message: error.message });
    }
})

// Route :: 3

app.post("/login", async (req, res) => {
    
    try {
        const { email, password } = req.body;
        const filecontent = await fs.readFile("./users.json", "utf-8")
        const usercontent = JSON.parse(filecontent)
        
        const userExists = usercontent.find(el => el.email === email);
        
        if (!userExists) {
            return res.status(404).json({ message: "User not found" });
        }
        if (userExists.password !== password) {
            return res.status(202).json({ message: "Wrong Password" });
        }
         else{
            res.status(200).json({message:"Login successfull"})
         }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Route :: 4


app.post("/password", async (req, res) => {

    try {
        const filecontent = await fs.readFile("./users.json", "utf-8")
        const usercontent = JSON.parse(filecontent)
        const { email, password } = req.body;

        const userExists = usercontent.find(el => el.email === email);

        if (!userExists) {
            res.status(202).json({ message: "User not found" });
        }

        userExists.password = password

        const stringusercontent = JSON.stringify(usercontent, null, 2)
        await fs.writeFile("./users.json", stringusercontent)

        res.status(200).json({
            message: "Password created"
        })
    } catch (error) {
        res.status(402).json({ message: "error1" })
    }
})

// Route :: 5

app.post("/register", async (req, res) => {

    try {
        const filecontent = await fs.readFile("./users.json", "utf-8")
        const usercontent = JSON.parse(filecontent)
        const { email, name, age, password } = req.body;

        const userExists = usercontent.find(el => el.email === email);

        if (!userExists) {
            res.status(202).json({ message: "User not found" });
        }

        userExists.password = password
        userExists.name = name
        userExists.age = age

        const stringusercontent = JSON.stringify(usercontent, null, 2)
        await fs.writeFile("./users.json", stringusercontent)

        res.status(200).json({
            message: "Registred Successfully"
        })
    } catch (error) {
        res.status(402).json({ message: "error1" })
    }
})

app.listen(9000, console.log("Working ✅"));

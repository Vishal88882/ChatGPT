import "../App.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react"


export default function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const passwordRef = useRef();
    const email = location.state?.email;

    const handleLoginInput = async () => {
        const password = passwordRef.current?.value
        if (!passwordRef.current?.value) {
            return alert("Please fill complete details!");
        }
        else {
            try {
                const response = await fetch('http://localhost:9000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });
                const result = await response.json();

                if (response.ok) {
                    alert('Logged in');
                    navigate("/Home");

                } else {
                    alert('Error: ' + (result.message || "Wrong password"));
                }

            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
    }

    const handlecodeInput = async () => {
            try {
                const response = await fetch('http://localhost:9000/send_otp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });
                const result = await response.json();

                if (result.status == "ok") {
                    alert("Otp sent to you given email");
                    navigate("/Signup_with_code", { state: { email, status: result.status } })

                } 
                else if(result.status == "not ok"){
                    alert("Otp Sent to your give email")
                    navigate("/New_User_Code", { state: { email } })
                }
                

            } catch (error) {
                console.error('Fetch error:', error);
            }
        }


         {
//     "email": "sunharilalrajpu8882@gmail.com",
//     "password": "122",
//     "name": "12",
//     "age": "12"
  }
    return (
        <>
            <div className="background">
                <a href="/Login" className="atag">ChatGpt</a>
                <h1 className="main_heading" style={{ marginBottom: "15px" }}>Enter Your password</h1>
                <div className="background_inner">
                    <input type="text" className="inpt_new" placeholder="Enter you email" value={email} readOnly />
                    <input type="text" className="inpt_new" placeholder="Enter you password" ref={passwordRef} autoFocus />
                    <button className="button_new" onClick={handleLoginInput}>Continue</button>
                    <div className="divider_new">
                        <div className="line_new"></div>
                        <div className="or_new">OR</div>
                        <div className="line_new"></div>
                    </div>
                    <button className="button_new_other" onClick={handlecodeInput} >Signup with one time code</button>
                    <h5 className="caution">Terms of Use <span>|</span> Privacy Policy</h5>
                </div>

            </div>
        </>
    )
}

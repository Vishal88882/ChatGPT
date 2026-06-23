import "../App.css";
import { useRef } from "react"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const codeRef = useRef();
    const email = location.state?.email;

    const handlecodeInput = async () => {
        console.log(codeRef.current?.value);
        const code = codeRef.current?.value
        console.log(code)

        if (!codeRef.current?.value) {
            return alert("Please fill complete details!");
        }
        // console.log(userData);
        else {
            try {
                const response = await fetch('http://localhost:9000/send_otp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ code })
                });
                const result = await response.json();

                if (response.ok) {
                    alert('Otp sent to you given mail');
                    navigate("/Signup_with_code")

                } else {
                    alert('Error: ' + (result.message || "Wrong code"));
                }

            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
    }
    return (
        <>
            <div className="background">
                <a href="/Login" className="atag">ChatGpt</a>
                <h1 className="main_heading">Check your inbox</h1>
                <h3 className="secondry_heading" style={{ color: "white", marginTop: "10px", width: "25%" }}>Enter the verification code we just sent to codewithvishal00@gmail.com</h3>
                <div className="background_inner">
                    <input type="text" className="inpt_new" placeholder="Enter you email" value={email} disabled />
                    <input type="text" className="inpt_new" placeholder="Code" />
                    <button className="button_new" onClick={() => navigate("/User_login")} autoFocus>Continue</button>
                    <div className="divider_new">
                        <div className="line_new"></div>
                        <div className="or_new">OR</div>
                        <div className="line_new"></div>
                    </div>
                    <button className="button_new_other" onClick={() => navigate("/Signup_password")}>Continue with password</button>
                    <h5 className="caution">Terms of Use <span>|</span> Privacy Policy</h5>
                </div>
            </div>
        </>
    )
}
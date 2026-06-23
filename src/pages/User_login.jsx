import "../App.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef,useState } from "react"


export default function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const passwordRef = useRef();
    const [infoArray, setInfoArray] = useState([]);
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
                    body: JSON.stringify({ email, code })
                });
                const result = await response.json();


                if (!response.ok) {
                    alert('Error: ' + (result.message || "Wrong code"));
                    return;
                }

                if (result.status === "new_user") {
                    setInfoArray([{ status: "new_user" }])
                    alert("Email verified. Create your password.");
                    navigate("/Signup_password", {
                        state: { email }
                    });

                }
                else if (result.status === "old_user") {
                    setInfoArray([{ status: "old_user" }])
                    alert("Welcome back!");
                    navigate("/New_User_Code",{state:{email}});
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

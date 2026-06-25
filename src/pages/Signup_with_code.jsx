import "../App.css";
import { useRef, useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



// let globalArray = []

export default function App() {
    const initialStatus = null;
    const statusRef = useRef(initialStatus);
    const [infoArray, setInfoArray] = useState([]);
    const codeRef = useRef();
    
    const navigate = useNavigate();
    const location = useLocation();
    
    const email = location.state?.email;

    useEffect(() => {
        if (!email) {
            alert("Session expired. Please try again.");
            navigate("/Login");
        }
    }, [email]);



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
                const response = await fetch('http://localhost:9000/verify_otp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, code })
                });
                const result = await response.json();
                statusRef.current = result.status;


                if (!response.ok) {
                    alert('Error: ' + (result.message || "Wrong code"));
                    return;
                }

                if (result.status === "new_user") {
                    // globalArray.push(result.status === "new_user")
                    setInfoArray([{ status: "new_user" }])
                    
                    alert("Email verified. Create your password.");
                    navigate("/Signup_password", {
                        state: { email }
                    });

                }
                else if (result.status === "old_user") {
                    // globalArray.push(result.status === "old_user")
                    setInfoArray([{ status: "old_user" }])
               
                    alert("Welcome back!");
                    navigate("/Home");
                }


            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
    }


    const handleButton = async () => {
        const currentStatus = statusRef.current;
        if (!currentStatus) {
            return alert("Please verify the code first.");
        }

        if (currentStatus === "new_user") {
            console.log("Redirecting to onboarding screen...");
            navigate("/Signup_password", { state: { email } })
        }
        else if (currentStatus === "old_user") {
            console.log("Welcome back!");
            navigate("/User_login", { state: { email } })
        }
        console.log("statusRef:", statusRef.current);
    }


    return (
        <>
            <div className="background">
                <a href="/Login" className="atag">ChatGpt</a>
                <h1 className="main_heading">Check your inbox</h1>
                <h3 className="secondry_heading" style={{ color: "white", marginTop: "10px", width: "25%" }}>Enter the verification code we just sent to {email}</h3>
                <div className="background_inner">
                    <input type="text" className="inpt_new" value={email} disabled readOnly />
                    <input type="text" className="inpt_new" placeholder="Code" autoFocus ref={codeRef} />
                    <button className="button_new" onClick={handlecodeInput}>Continue</button>

                    <div className="divider_new">
                        <div className="line_new"></div>
                        <div className="or_new">OR</div>
                        <div className="line_new"></div>
                    </div>
                    <button className="button_new_other" onClick={handleButton}>Continue with password</button>
                    <h5 className="caution">Terms of Use <span>|</span> Privacy Policy</h5>
                </div>
            </div>
        </>
    )
}
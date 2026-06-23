import "../App.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef } from "react"

export default function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const nameRef = useRef();
    const ageRef = useRef();
    const email = location.state?.email;
    const password = location.state?.password;
    
    
    const handledetailsInput = async () => {
        const name = nameRef.current?.value
        const age= ageRef.current?.value

        console.log(name , age)

        if (!nameRef.current?.value || ! ageRef.current?.value) {
            return alert("Please fill complete details!");
        }
        else {
            try {
                const response = await fetch('http://localhost:9000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password, name, age })
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
    return (
        <>
            <div className="background">
                <a href="/Login" className="atag">ChatGpt</a>
                <h1 className="main_heading">Enter Your Details</h1>
                <div className="background_inner">
                    <input type="text" className="inpt_new" placeholder="Enter your name" ref={nameRef} autoFocus />
                    <input type="text" className="inpt_new" placeholder="Enter you age" ref={ageRef} />
                    <button className="button_new" onClick={handledetailsInput}>Continue</button>
                    <div className="divider_new">
                        <div className="line_new"></div>
                        <div className="or_new">OR</div>
                        <div className="line_new"></div>
                    </div>
                    {/* <button className="button_new_other">Signup with one time code</button> */}
                    <h5 className="caution">Terms of Use <span>|</span> Privacy Policy</h5>
                </div>
            </div>
        </>
    )
}
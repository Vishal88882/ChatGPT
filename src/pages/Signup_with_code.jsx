import "../App.css";
import { useNavigate } from "react-router-dom";
// import Signup from "./Signup";
export default function App() {
    const navigate = useNavigate();
    return (
        <>
            <div className="background">
                <a href="/Login" className="atag">ChatGpt</a>
                <h1 className="main_heading">Check your inbox</h1>
                <h3 className="secondry_heading" style={{color:"white", marginTop:"10px", width:"25%"}}>Enter the verification code we just sent to codewithvishal00@gmail.com</h3>
                <div className="background_inner">
                    <input type="text" className="inpt_new" placeholder="Enter you email" autoFocus />
                    <input type="text" className="inpt_new" placeholder="Code" />
                    <button className="button_new">Continue</button>
                    <div className="divider_new">
                        <div className="line_new"></div>
                        <div className="or_new">OR</div>
                        <div className="line_new"></div>
                    </div>
                    <button className="button_new_other" onClick={() => navigate("/Signup")}>Continue with password</button>
                    <h5 className="caution">Terms of Use <span>|</span> Privacy Policy</h5>
                </div>
            </div>
        </>
    )
}
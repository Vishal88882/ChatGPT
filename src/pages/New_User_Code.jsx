import "../App.css";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.svg"
import apple from "../assets/apple.svg"

export default function App() {
    const navigate = useNavigate();
    return (
        <>
            <div className="background">
                <a href="/Login" className="atag">ChatGpt</a>
                <h1 className="main_heading">Check your inbox</h1>
                <h3 className="secondry_heading" style={{color:"white", marginTop:"10px", width:"25%"}}>Enter the verification code we just sent to codewithvishal00@gmail.com</h3>
                <div className="background_inner">
                    <input type="text" className="inpt_new" placeholder="Code" />
                    <button className="button_new" onClick={() => navigate("/User_login")}>Continue</button>
                    <div className="divider_new">
                        <div className="line_new"></div>
                        <div className="or_new">OR</div>
                        <div className="line_new"></div>
                    </div>
                    <button className="button_new_other" onClick={() => navigate("/Signup_password")} style = {{gap:"5px"}}><img src={google} alt="hello" />Continue with Google</button>
                    <button className="button_new_other" onClick={() => navigate("/Signup_password")} style = {{gap:"5px"}}><img src={apple} alt="hello" />Continue with Apple</button>
                    <h5 className="caution">Terms of Use <span>|</span> Privacy Policy</h5>
                </div>
            </div>
        </>
    )
}
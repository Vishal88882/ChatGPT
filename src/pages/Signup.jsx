import "../App.css";
export default function App() {
    return (
        <>
            <div className="background">
                <a href="/Login" className="atag">ChatGpt</a>
                <h1 className="main_heading">Create a password</h1>
                <h3 className="secondry_heading" style={{color:"white", marginTop:"10px", width:"25%"}}>You’ll use this password to log in to ChatGPT and other OpenAI products</h3>
                <div className="background_inner">
                    <input type="text" className="inpt_new" placeholder="Enter you email" autoFocus />
                    <input type="text" className="inpt_new" placeholder="Enter you password" />
                    <button className="button_new">Continue</button>
                    <div className="divider_new">
                        <div className="line_new"></div>
                        <div className="or_new">OR</div>
                        <div className="line_new"></div>

                    </div>
                    <button className="button_new_other">Signup with one time code</button>
                    <h5 className="caution">Terms of Use <span>|</span> Privacy Policy</h5>
                </div>

            </div>
        </>
    )
}
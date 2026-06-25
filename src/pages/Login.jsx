import { useState, useEffect, useRef } from "react";
import { LuGraduationCap, LuNewspaper, LuPanelLeft, LuPhone } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import apple from "../assets/apple.svg"
import phone from "../assets/phone.svg"
import google from "../assets/google.svg"
import pen from "../assets/pen.svg"
import search from "../assets/search.svg"
import panel from "../assets/panel.svg"
import openai from "../assets/openai.svg"
import book from "../assets/book.svg";
import apps from "../assets/apps.svg";
import chatgpt from "../assets/chatgpt.svg";
import gemini from "../assets/gemini.svg";
import star from "../assets/star.svg";
import tick from "../assets/tick.svg";
import input1 from "../assets/input1.svg";
import input2 from "../assets/input2.svg";
import input3 from "../assets/input3.svg";
import send from "../assets/send.svg";
import login1 from "../assets/login1.svg";
import { FiSettings } from "react-icons/fi";
import { FiLifeBuoy } from "react-icons/fi";

import "../App.css";

import { useNavigate } from "react-router-dom";

export default function Login() {

  const [isOpen, setIsOpen] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sendActive, setsendActive] = useState("");
  const [loginbar, setloginbar] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();

  function handleInputChange(event) {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      setsendActive(false);
    }
    setsendActive(inputValue);
  }

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);

      } else {
        setIsOpen(true);
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);






  const handleEmailInput = async () => {
    console.log(emailRef.current?.value);
    const email = emailRef.current?.value
    console.log(email)

    if (!emailRef.current?.value) {
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
          body: JSON.stringify({ email })
        });
        const result = await response.json();

        if (result.status === "old_user" || result.status === "new_user") {
          alert("Code sent you given emial")
          navigate("/Signup_with_code", {
            state: {
              email,
              status: result.status
            }
          });
        }

      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  }





  return (
    <div className="container" onClick={() => { setDropdown(false), setloginbar(false) }}>
      <aside className={isOpen ? "sidebar" : "sidebar closed"}>
        <div className="just_div">
          <nav >
            <button>
              {isOpen ? (
                <img src={openai} className="openai_logo" />
              ) : (
                <img onClick={() => setIsOpen(!isOpen)} src={openai} className="openai_logo" />
              )}
            </button>

            <button>
              <img onClick={() => setIsOpen(!isOpen)} src={panel} className="openai_ai_logo" />
            </button>
          </nav>

          <span>
            <img src={pen} alt="" className="svg_images" /><button className="button">New chat</button>
          </span>
          <span>
            <img src={search} alt="" className="svg_images" /><button className="button">Search chats</button>
          </span>
          <span>
            <img src={book} alt="" className="svg_images" /><button className="button">Images</button>
          </span>
          <span>
            <img src={apps} alt="" className="svg_images" /><button className="button">Apps</button>
          </span>
        </div>

        <div className="table_of_content table_of_content_1">
        </div>
        <div className="button_icon">
          <button><img src={login1} />See plans and pricing</button>
          <button><FiSettings size={18} />Settings</button>
          <button><FiLifeBuoy size={20} />Help</button>

        </div>

        <div className="footer_div footer_div_1">
          <footer className="footer_align footer_align_1">
            <span>
              <p>Get responses tailored to you</p>
              <span>Log in to get answers based on saved chats, plus create images and upload files.
              </span>
            </span>
            <button onClick={() => navigate("/home")}>Log in</button>
          </footer>
        </div>
      </aside>

      <div className="chat_bot">
        <nav>
          <span>
            <button className="first_btn" onClick={(e) => { e.stopPropagation(); setDropdown(true); }}>
              ChatGPT <img src={chatgpt} alt="ChatGPT" />
            </button>
            {loginbar && (<>
              <div className="overlay" ></div>
              <div className="login_form" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setloginbar(false)} style={{ fontSize: "20px", marginLeft: "auto", display: "flex", background: "none", border: "none", }} className="X"><RxCross2 style={{ color: "white", padding: "10px", borderRadius: "20px" }} /></button>
                <p className="main_heading">Login or sign up</p>
                <p className="secondry_heading">You’ll get smarter responses and can upload files, images, and more.</p>

                <button className="login_btns"><img src={google} alt="hello" />Continue with Google</button>
                <button className="login_btns"><img src={apple} alt="hello" />Continue with Apple</button>
                <button className="login_btns" onClick={() => navigate("/New_User_Code")}><img src={phone} alt="hello" />Continue with Phone</button>

                <div className="divider">
                  <div className="line"></div>
                  <div className="or">OR</div>
                  <div className="line"></div>
                </div>
                <input type="text" placeholder="Email Address" className="inpt" autoFocus ref={emailRef} />
                <button className="submit_btn" onClick={handleEmailInput}>Continue</button>

              </div>

            </>
            )}

            <span>
              <span>
                <button className="first_btn first_btn_1" onClick={(e) => { e.stopPropagation(); setloginbar(!loginbar) }}>Log in</button>
              </span>
              <span>
                <button className="first_btn_2" onClick={() => navigate("/Signup_with_code")}>Signup for free</button>
              </span>
            </span>
          </span>
        </nav>


        {dropdown && (
          <div className="dropdown_css">
            <div className="upper_div">
              <img src={gemini} alt="" />
              <div className="upper_div_sub">
                <div className="main_text">ChatGPT Plus</div>
                <div className="small_text">Our smartest model & more</div>
              </div>
              <button>Upgrade</button>
            </div>

            <div className="upper_div">
              <img src={star} alt="" />
              <div className="upper_div_sub">
                <div className="main_text">GPT-4</div>
                <div className="small_text">Great for everday tasks</div>
              </div>
              <img src={tick} alt="" className="tick" />
            </div>
          </div>
        )}


        <div className="chat_box">
          <p>What’s on the agenda today?</p>
          <span className="fortext">
            <img src={input1} alt="Input 1" className="svg" />
            <input autoFocus onChange={handleInputChange}></input>
            <img src={input2} alt="Input 2" className="svg" />
            {sendActive ? (
              <img src={send} alt="Send" className="svg" />
            ) : (
              <img src={input3} alt="Input 3" className="svg" />
            )}

          </span>
          <span className="suggestions suggestions_1">
            <p><LuNewspaper style={{ transform: "scaleX(-1)", paddingLeft: "6px", fontSize: "18px" }} />Turn photo into profile pic</p>
            <div className="line"></div>
            <p><LuGraduationCap style={{ paddingRight: "6px", fontSize: "22px" }} />How can I save more money?</p>
            <div className="line"></div>
            <p><LuNewspaper style={{ transform: "scaleX(-1)", paddingLeft: "6px", fontSize: "18px" }} />Is kala jaadu real?</p>

          </span>
        </div>



        <p className="disclaimer">ChatGPT is AI. By using it, you agree to our <span>Terms</span> & <span>Privacy Policy.</span> Chats may be reviewed and used to improve our AI models. <span>Learn more</span></p>
      </div>

    </div>
  );
}


// npx kill-port 9000
import { useState } from "react";
import { SiOpenai } from "react-icons/si";
import { LuGraduationCap, LuNewspaper, LuPanelLeft } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

import "../App.css";
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


import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isOpen, setIsOpen] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const [sendActive, setsendActive] = useState("");
  const [ loginbar, setloginbar ] = useState(true);

  function handleInputChange(event) {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      setsendActive(false);
    }
    setsendActive(inputValue);
  }


  return (
    <div className="container" onClick={() => setDropdown(false)}>
      <aside className={isOpen ? "sidebar" : "sidebar closed"}>
        <div className="just_div">
          <nav>
            <button><SiOpenai className="openai_logo" /></button>
            <button onClick={() => setIsOpen(!isOpen)}><LuPanelLeft className="slidebar_logo" /></button>
          </nav>
          <span>
            <i className="fa-regular fa-pen-to-square"></i><button className="button">New chat</button>
          </span>
          <span>
            <i className="fa-brands fa-sistrix"></i><button className="button">Search chats</button>
          </span>
        </div>

        <div className="table_of_content table_of_content_1">
          <button><img src={book} alt="Library" />Images</button>
          <button><img src={apps} alt="Apps" />Apps</button>
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
          {!isOpen && (
            <LuPanelLeft
              className="slidebar_logo_closed"
              onClick={() => setIsOpen(true)}
            />
          )}
          <span>
            <button className="first_btn" onClick={(e) => { e.stopPropagation(); setDropdown(true); }}>
              ChatGPT <img src={chatgpt} alt="ChatGPT" />
            </button>
             {loginbar && (
          <div className="login_form">
            <span><RxCross2 style={{fontSize:"20px", marginLeft:"auto", display:"flex"}}/></span>
            <p className="main_heading">Login or sign up</p>

            </div>
        )}

            <span>
              <span>
                <button className="first_btn first_btn_1" onClick={(e) =>{e.stopPropagation() ;setloginbar(!loginbar)}}>Log in</button>
              </span>
              <span>
                <button className="first_btn_2">Signup for free</button>
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
            <input autoFocus placeholder="SVG by jock" onChange={handleInputChange}></input>
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

      </div>
    </div>
  );
}
import react from "react"
import { SiOpenai } from "react-icons/si";
import { LuPanelLeft } from "react-icons/lu";
import { useState, useEffect, useRef } from "react"
import book from "./assets/book.svg"
import project from "./assets/project.svg"
import apps from "./assets/apps.svg"
import codex from "./assets/codex.svg"
import arrow from "./assets/arrow.svg"
import more from "./assets/more.svg"
import chatgpt from "./assets/chatgpt.svg"
import freeoffer from "./assets/freeoffer.svg"
import nothing from "./assets/nothing.svg"
import input1 from "./assets/input1.svg"
import input2 from "./assets/input2.svg"
import input3 from "./assets/input3.svg"
import button1 from "./assets/button1.svg"
import button2 from "./assets/button2.svg"
import button3 from "./assets/button3.svg"
import './App.css'


export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [dropdown, setDropdown] = useState(true);
  return (<>
    <div className="container">
      <aside className={isOpen ? "sidebar" : "sidebar closed"}>
        <div className="just_div">
          <nav >
            <button><SiOpenai className="openai_logo" /></button>
            <button onClick={() => setIsOpen(!isOpen)}><LuPanelLeft className="slidebar_logo" /></button>
          </nav>
          <span>
            <i className="fa-regular fa-pen-to-square"></i><button className="button">New chat</button>
          </span >
          <span>
            <i className="fa-brands fa-sistrix"></i><button className="button">Search chats</button>
          </span>

        </div>
        <div className="table_of_content">
          <button><img src={book} alt="Library" />Library</button>

          <button><img src={project} alt="Projects" />Projects</button>


          <button><img src={apps} alt="Apps" />Apps</button>
          <button className="codex"><img src={codex} alt="Codex" />Codex <span style={{ marginLeft: "auto" }}><img src={arrow} className="arrow" alt="Arrow" /></span></button>


          <button><img src={more} alt="More" />More</button>

          <h5 style={{ marginLeft: "15px", marginTop: "15px", marginBottom: "8px" }}>Recents</h5>
          <p>Vijay Thalapathy CM</p>
          <p>VS Code Portable Use</p>
          <p>Blast Furnace Crafting Issue</p>
          <p>Blast reegfdgdfFurnace HEllo ffdf Issue</p>
          <p>Blast Furnace Crafting Issue</p>
        </div>

        <div className="footer_div">
          <footer>
            <span>
              <i className="fa-solid fa-v"></i><p>Vishal Rajput</p>
            </span>
            <button>Upgrade</button>
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
            <button className="first_btn" onClick={() => setDropdown(!dropdown)}>
              ChatGPT <img src={chatgpt} alt="ChatGPT" />
            </button>

            <span>
              <span>
                <button className="first_btn"><img src={freeoffer} alt="Free offer" />Free offer</button>
              </span>
              <span>
                <button className="first_btn"><img src={nothing} alt="Nothing" /></button>
              </span>
            </span>
          </span>
        </nav>
        {dropdown && (
          <div className="dropdown_css">
            <p>ChatGPT Plus</p>
            <span>Our smartest model and more</span>
            <button className="upgrade_btn">Upgrade</button>
            <p>GPT-4</p>
            <span>Great for everday tasks</span>
          </div>
        )}

        <div className="chat_box">
          <p>What’s on the agenda today?</p>
          <span className="fortext">
            <img src={input1} alt="Input 1" className="svg" />
            <input autoFocus></input>
            <img src={input2} alt="Input 2" className="svg" />
            <img src={input3} alt="Input 3" className="svg" />
          </span>
          <span>
            <button><img src={button1} alt="Create an image" />Create an image</button>
            <button><img src={button2} alt="Write or edit" />Write or edit</button>
            <button><img src={button3} alt="Look Something Up" />Look Something Up</button>
          </span>
        </div>

      </div>
    </div>
  </>

  )
}
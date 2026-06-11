import react from "react"
import { SiOpenai } from "react-icons/si";
import { LuPanelLeft } from "react-icons/lu";
import { useState, useEffect, useRef } from "react"
import './App.css'


export default function App() {
  return (<>
    <div className="container">
      <aside>
        <div className="just_div">
          <nav >
            <SiOpenai className="openai_logo" />
            <LuPanelLeft className="slidebar_logo" />
          </nav>
          <span>
            <i className="fa-regular fa-pen-to-square"></i><button className="button">New chat</button>
          </span >
          <span>
            <i className="fa-brands fa-sistrix"></i><button className="button">Search chats</button>
          </span>

        </div>
        <div className="table_of_content">
          <button><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="4.5" height="14" rx="1.6"
              stroke="white" stroke-width="1.3" />

            <rect x="9.5" y="5" width="4.5" height="14" rx="1.6"
              stroke="white" stroke-width="1.3" />

            <path d="M15.3 5.4L17.8 5C18.7 4.85 19.5 5.45 19.65 6.35L21.55 17.35C21.7 18.25 21.1 19.05 20.2 19.2L17.7 19.6C16.8 19.75 16 19.15 15.85 18.25L13.95 7.25C13.8 6.35 14.4 5.55 15.3 5.4Z"
              stroke="white" stroke-width="1.3" stroke-linejoin="round" />
          </svg>Library</button>
          <p>Vijay Thalapathy CM</p>
          <p>Blast Furnace Crafting Issue</p>
          <p>VS Code Portable Use</p>
          <p>VS Code Portable Use</p>
          <p>Text Refinement Request</p>

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

        </nav>

        <div>

        </div>
      </div>
    </div>
  </>

  )
}
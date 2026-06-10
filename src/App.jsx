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
            <i class="fa-brands fa-sistrix"></i><button className="button">Search chats</button>
          </span>
          {/* <FiEdit className="btn"/> */}
        </div>
        <div className="table_of_content">
          <p>Vijay Thalapathy CM</p>
          <p>Blast Furnace Crafting Issue</p>
          <p>VS Code Portable Use</p>
          <p>Introductory Microeconomics Bo...</p>
          <p>Aadhaar surname update query</p>
          <p>Nether Portal Creation</p>
          <p>Minecraft Version Compatibility</p>
          <p>Watermark Removal Request</p>
          <p>VS Code UI Fix</p>
          <p>Text Refinement Request</p>
          <p>NCERT Class 9 Prices</p>
          <p>Brave Browser Ads Earnings</p>
          <p>Thalapathy Vijay Election Win</p>
          <p>Bengal CM and BJP</p>

        </div>
        <div className="footer_div">
          <footer>

          </footer>
        </div>
      </aside>


      <div className="chat_bot">
        <nav>
          <h1>Hey I am your new </h1>
        </nav>

        <div>

        </div>
      </div>
    </div>
  </>

  )
}
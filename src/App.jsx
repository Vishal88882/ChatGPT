import react from "react"
import { SiOpenai } from "react-icons/si";
import { LuPanelLeft } from "react-icons/lu";
import { useState, useEffect, useRef } from "react"
import './App.css'


export default function App() {
  const [isOpen, setIsOpen] = useState(true);
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
          <button><svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="4.5" height="14" rx="1.6"
              stroke="white" stroke-width="1.3" />

            <rect x="9.5" y="5" width="4.5" height="14" rx="1.6"
              stroke="white" stroke-width="1.3" />

            <path d="M15.3 5.4L17.8 5C18.7 4.85 19.5 5.45 19.65 6.35L21.55 17.35C21.7 18.25 21.1 19.05 20.2 19.2L17.7 19.6C16.8 19.75 16 19.15 15.85 18.25L13.95 7.25C13.8 6.35 14.4 5.55 15.3 5.4Z"
              stroke="white" stroke-width="1.3" stroke-linejoin="round" />
          </svg>Library</button>

          <button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-folder2" viewBox="0 0 16 16">
            <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z" />
          </svg>Projects</button>


          <button><svg width="22" height="22" viewBox="-1.20 -1.20 27.36 27.36" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 1 1 0-8.5zM9 9V6.75A2.25 2.25 0 1 0 6.75 9H9zm-2.25 4H11v4.25A4.25 4.25 0 1 1 6.75 13zm0 2A2.25 2.25 0 1 0 9 17.25V15H6.75zm10.5-12.5a4.25 4.25 0 1 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25zm0 6.5A2.25 2.25 0 1 0 15 6.75V9h2.25zM13 13h4.25A4.25 4.25 0 1 1 13 17.25V13zm2 2v2.25A2.25 2.25 0 1 0 17.25 15H15z"></path> </g> </g></svg>Apps</button>
          <button><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
          >
            <path
              d="M7.2 18
       C4.9 18 3 16.2 3 14
       C3 11.9 4.5 10.2 6.6 9.8
       C7.1 7 9.6 5 12.4 5
       C15.4 5 17.8 7.1 18.4 10
       C20.5 10.3 22 12 22 14.2
       C22 16.4 20.2 18 18 18
       Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <path
              d="M8.5 10L11 12L8.5 14"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <path
              d="M13.5 14.5H16.5"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>Codex <span style={{ marginLeft: "auto" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
          </svg></span></button>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
          </svg>More</button>

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
            <button className="first_btn">ChatGPT<svg width="12px" height="12px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.096"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff"></path></g></svg></button>
            <span>
              <span>
                <button className="first_btn"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M4 12.5V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12.5C20 12.2239 19.7761 12 19.5 12H4.5C4.22386 12 4 12.2239 4 12.5Z" fill="#ffffff"></path> <path d="M3 9.5C3 9.03534 3 8.80302 3.03843 8.60982C3.19624 7.81644 3.81644 7.19624 4.60982 7.03843C4.80302 7 5.03534 7 5.5 7H12H18.5C18.9647 7 19.197 7 19.3902 7.03843C20.1836 7.19624 20.8038 7.81644 20.9616 8.60982C21 8.80302 21 9.03534 21 9.5V9.5V9.5C21 9.96466 21 10.197 20.9616 10.3902C20.8038 11.1836 20.1836 11.8038 19.3902 11.9616C19.197 12 18.9647 12 18.5 12H12H5.5C5.03534 12 4.80302 12 4.60982 11.9616C3.81644 11.8038 3.19624 11.1836 3.03843 10.3902C3 10.197 3 9.96466 3 9.5V9.5V9.5Z" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"></path> <path d="M4 12V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 7V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.3753 6.21913L9.3959 3.74487C8.65125 2.81406 7.26102 2.73898 6.41813 3.58187C5.1582 4.8418 6.04662 7 7.82843 7L11 7C11.403 7 11.6271 6.53383 11.3753 6.21913Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.6247 6.21913L14.6041 3.74487C15.3488 2.81406 16.739 2.73898 17.5819 3.58187C18.8418 4.8418 17.9534 7 16.1716 7L13 7C12.597 7 12.3729 6.53383 12.6247 6.21913Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Free offer</button>
              </span>
              <span>
                <button className="first_btn"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8 12H8.009M11.991 12H12M15.991 12H16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
              </span>
            </span>
          </span>
        </nav>

        <div className="chat_box">
          <p>What’s on the agenda today?</p>
          <span className="fortext">
            <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg><input autoFocus></input>
            <svg width="26px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.528"></g><g id="SVGRepo_iconCarrier"><path d="M47.67,28.43v3.38a15.67,15.67,0,0,1-31.34,0V28.43" stroke-linecap="round"></path><rect x="22.51" y="6.45" width="18.44" height="34.22" rx="8.89" stroke-linecap="round"></rect><line x1="31.73" y1="57.34" x2="31.73" y2="47.71" stroke-linecap="round"></line><line x1="37.14" y1="57.55" x2="26.43" y2="57.55" stroke-linecap="round"></line></g></svg>
            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#878787"></path> <path d="M6 14.8901C5.59 14.8901 5.25 14.5501 5.25 14.1401V9.8501C5.25 9.4401 5.59 9.1001 6 9.1001C6.41 9.1001 6.75 9.4401 6.75 9.8501V14.1401C6.75 14.5601 6.41 14.8901 6 14.8901Z" fill="#878787"></path> <path d="M9 16.3202C8.59 16.3202 8.25 15.9802 8.25 15.5702V8.43018C8.25 8.02018 8.59 7.68018 9 7.68018C9.41 7.68018 9.75 8.02018 9.75 8.43018V15.5702C9.75 15.9902 9.41 16.3202 9 16.3202Z" fill="#878787"></path> <path d="M12 17.75C11.59 17.75 11.25 17.41 11.25 17V7C11.25 6.59 11.59 6.25 12 6.25C12.41 6.25 12.75 6.59 12.75 7V17C12.75 17.41 12.41 17.75 12 17.75Z" fill="#878787"></path> <path d="M15 16.3202C14.59 16.3202 14.25 15.9802 14.25 15.5702V8.43018C14.25 8.02018 14.59 7.68018 15 7.68018C15.41 7.68018 15.75 8.02018 15.75 8.43018V15.5702C15.75 15.9902 15.41 16.3202 15 16.3202Z" fill="#878787"></path> <path d="M18 14.8901C17.59 14.8901 17.25 14.5501 17.25 14.1401V9.8501C17.25 9.4401 17.59 9.1001 18 9.1001C18.41 9.1001 18.75 9.4401 18.75 9.8501V14.1401C18.75 14.5601 18.41 14.8901 18 14.8901Z" fill="#878787"></path> </g></svg>
          </span>
          <span>
            <button><svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Create an image</button>
            <button><svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>Write or edit</button>
            <button><svg width="23px" height="23px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22.3201C17.5228 22.3201 22 17.8429 22 12.3201C22 6.79722 17.5228 2.32007 12 2.32007C6.47715 2.32007 2 6.79722 2 12.3201C2 17.8429 6.47715 22.3201 12 22.3201Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 12.3201H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22.3201C13.933 22.3201 15.5 17.8429 15.5 12.3201C15.5 6.79722 13.933 2.32007 12 2.32007C10.067 2.32007 8.5 6.79722 8.5 12.3201C8.5 17.8429 10.067 22.3201 12 22.3201Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Look Something Up</button>
          </span>
        </div>

      </div>
    </div>
  </>

  )
}
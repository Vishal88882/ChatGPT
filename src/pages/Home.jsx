import { useState } from "react";

import "../App.css";
import openai from "../assets/openai.svg";
import pen from "../assets/pen.svg";
import search from "../assets/search.svg";
import panel from "../assets/panel.svg";
import book from "../assets/book.svg";
import project from "../assets/project.svg";
import apps from "../assets/apps.svg";
import codex from "../assets/codex.svg";
import arrow from "../assets/arrow.svg";
import more from "../assets/more.svg";
import chatgpt from "../assets/chatgpt.svg";
import freeoffer from "../assets/freeoffer.svg";
import nothing from "../assets/nothing.svg";
import input1 from "../assets/input1.svg";
import input2 from "../assets/input2.svg";
import input3 from "../assets/input3.svg";
import button1 from "../assets/button1.svg";
import button2 from "../assets/button2.svg";
import button3 from "../assets/button3.svg";
import gemini from "../assets/gemini.svg";
import star from "../assets/star.svg";
import tick from "../assets/tick.svg";
import send from "../assets/send.svg";

export default function App() {

    const [isOpen, setIsOpen] = useState(true);
    const [dropdown, setDropdown] = useState(false);
    const [divstate, setdivstate] = useState(true);
    const [sendActive, setsendActive] = useState("");

    function handleInputChange(event) {
        const inputValue = event.target.value;
        if (inputValue.trim() === "") {
            setsendActive(false);
        }
        setsendActive(inputValue);
    }

    return (<>
        {divstate && (
            <div className="container" onClick={() => setDropdown(false)}>

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
                        </span >
                        <span>
                            <img src={search} alt="" className="svg_images" /><button className="button">Search chats</button>
                        </span>
                        <span>
                            <img src={book} alt="Library" className="svg_images" /><button className="button">Library</button>
                        </span>
                        <span>
                            <img src={project} alt="Projects" className="svg_images" /><button className="button">Projects</button>
                        </span>
                        <span>
                            <img src={apps} alt="Apps" className="svg_images" /><button className="button">Apps</button>
                        </span>
                        <span>
                            <img src={codex} alt="Codex" className="svg_images" /><button className="button">Codex</button><img src={arrow} className="arrow" alt="Arrow" />
                        </span>
                        <span>
                            <img src={more} alt="More" className="svg_images" /><button className="button">More</button>
                        </span>

                    </div>
                    <div className="table_of_content">
                        <h5 style={{ marginLeft: "15px", marginTop: "15px", marginBottom: "8px" }}>Recents</h5>
                        <p>Vijay Thalapathy CM</p>
                        <p>VS Code Portable Use</p>
                        <p>Blast Furnace Crafting Issue</p>
                        <p>Blast reegfdgdfFurnace HEllo ffdf Issue</p>
                        <p>Blast Furnace Crafting Issue</p>
                    </div>

                    <div className="footer_div">
                        <footer className="footer_align">
                            <span>
                                <i className="fa-solid fa-v"></i><p>Vishal Rajput</p>
                            </span>
                            <button>Upgrade</button>
                        </footer>
                    </div>
                </aside>

                <div className="chat_bot">
                    <nav>
                        <span>
                            <button className="first_btn" onClick={(e) => { e.stopPropagation(); setDropdown(true); }}>
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
                        <div className="dropdown_css" >
                            <div className="upper_div">
                                <img src={gemini} alt="" />
                                <div className="upper_div_sub">
                                    <div className="main_text">
                                        ChatGPT Plus
                                    </div>
                                    <div className="small_text">
                                        Our smartest model & more
                                    </div>
                                </div>
                                <button>Upgrade</button>
                            </div>

                            <div className="upper_div">
                                <img src={star} alt="" />
                                <div className="upper_div_sub">
                                    <div className="main_text">
                                        GPT-4
                                    </div>
                                    <div className="small_text">
                                        Great for everday tasks
                                    </div>
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
                        <span className="suggestions">
                            <button><img src={button1} alt="Create an image" />Create an image</button>
                            <button><img src={button2} alt="Write or edit" />Write or edit</button>
                            <button><img src={button3} alt="Look Something Up" />Look Something Up</button>
                        </span>
                    </div>

                </div>
            </div>
        )}



    </>

    )
}
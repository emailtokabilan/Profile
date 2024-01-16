import React, { useState, useEffect } from "react"
import "./App.css"

import "./assets/css/code.css"
import "./assets/css/onedark.css"

import profileImg from "./assets/img/profile.jpg"

import NodeRedIcon from "./assets/img/icons/nodered.png"
import JavaScriptIcon from "./assets/img/icons/javaScript.png"

import ReactIcon from "./assets/img/icons/react.png"
import NodeJsIcon from "./assets/img/icons/nodejs.png"
import PhpIcon from "./assets/img/icons/php.jpg"
import HtmlIcon from "./assets/img/icons/html.png"
import MongoDBIcon from "./assets/img/icons/mongo.png"
import MaterialIcon from "./assets/img/icons/mtui.png"
import CssIcon from "./assets/img/icons/CSS-Logo.jpg"
import BootstrapIcon from "./assets/img/icons/Bootstrap.png"

import { IntroCard, LangCard, SocialCard, ProjectCard } from "./cards.js"


function App() {
  const [card1, setCard1] = useState(1)
  const [card2, setCard2] = useState(-2)
  const [card3, setCard3] = useState(-1)
  const [card4, setCard4] = useState(0)

  document.body.dataset.page = "home"

  const handleOnClick = () => {
    if (card1 == 2) setCard1(-1)
    else setCard1(card1 + 1)

    if (card2 == 2) setCard2(-1)
    else setCard2(card2 + 1)

    if (card3 == 2) setCard3(-1)
    else setCard3(card3 + 1)

    if (card4 == 2) setCard4(-1)
    else setCard4(card4 + 1)
  }

  const states = {
    "-3": "",
    "-2": "",
    "-1": "",
    0: " followed",
    1: " front",
    2: " fall",
  }

  return (
    <div className="home">
      <div className="intro">
        <div className="introCards" onClick={handleOnClick}>
          <IntroCard count={0} curState={states[card1]} />
          <ProjectCard count={1} curState={states[card2]} />
          <SocialCard count={2} curState={states[card3]} />
          <LangCard count={3} curState={states[card4]} />
        </div>
        <div className="profileImage">
          <img className="introImage" src={profileImg} alt="profile" />
          <div className="ringCircle innerCircle">
            <img className="planetCircle" src={HtmlIcon} alt="HtmlIcon" />
            <img className="planetCircle" src={JavaScriptIcon} alt="JavaScriptIcon" />
            <img className="planetCircle" src={CssIcon} alt="CssIcon" />
            <img className="planetCircle" src={BootstrapIcon} alt="BootstrapIcon" />
          </div>
          <div className="ringCircle outerCircle">
            <img className="planetCircle" src={ReactIcon} alt="ReactIcon" />
            <img className="planetCircle" src={NodeRedIcon} alt="NodeRedIcon" />
            <img className="planetCircle" src={PhpIcon} alt="PhpIcon" />
            <img className="planetCircle" src={MaterialIcon} alt="MaterialIcon" />
            <img className="planetCircle" src={MongoDBIcon} alt="MongoDBIcon" />
            <img className="planetCircle" src={NodeJsIcon} alt="NodeJsIcon" />
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default App

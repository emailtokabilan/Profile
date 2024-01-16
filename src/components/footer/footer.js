import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// "@fortawesome/free-regular-svg-icons": "^5.15.1",

import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footCont">
        <span className="copyrightText">
          Copyright © {new Date().getFullYear()}. emailtokabilan. All rights reserved
        </span>
        <div className="socialinks">
          <span>Follow me</span>
          <a href="https://github.com/emailtokabilan" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:emailtokabilan@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        
        </div>
      </div>
    </div>
  )
}

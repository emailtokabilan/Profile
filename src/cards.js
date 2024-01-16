import React from 'react'

export const IntroCard = (props) => {
  return (
    <div className={"introCard" + props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}><span className="cm-keyword">const</span> <span className="cm-def">person</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">firstname</span>: <span className="cm-string">"Kabilan"</span>, &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">lastname</span>: <span className="cm-string">"T B"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">age</span>: <span className="cm-string">"It matters not how long we live but how"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">gender</span>: <span className="cm-string">"Male"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">hobbies</span>: [<span className="cm-string">"Watch Movies"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"Playing video Games"</span>,]</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const LangCard = (props) => {
  return (
    <div className={"introCard" + props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}><span className="cm-keyword">const</span> <span className="cm-def">skills</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">HTML</span> : <span className="cm-string">"Expert"</span>, &nbsp; &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">React</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">NodeJs</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Javascript</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">CSS</span>: <span className="cm-string">"Expert"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Git</span>: <span className="cm-string">"Expert"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Material UI</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">MongoDB</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Bootstrap</span>: <span className="cm-string">"Expert"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Node-Red</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Php</span>: <span className="cm-string">"Intermediate"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const SocialCard = (props) => {
  const stoprop = (e) => {
    e.stopPropagation();
  }

  return (
    <div className={"introCard" + props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}><span className="cm-keyword">const</span> <span className="cm-def">socialLinks</span> <span className="cm-operator">=</span> {"{"}</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">github</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://github.com/emailtokabilan"
            target="_blank">"github.com/emailtokabilan"</a>
        </span>,</span></pre>
     

        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">gmail</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="mailto:emailtokabilan@gmail.com"
            target="_blank">"emailtokabilan@gmail.com"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">spotify</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://open.spotify.com/user/et76djwj32psz7ws9gv66b6qo?si=jwqDZSVpRFSB2bppFm2mEA"
            target="_blank">"../user/et76djwj32psz7ws9gv66b6qo?si=jwqDZSVpRFSB2bppFm2mEA"
          </a>
        </span>,</span></pre>
       
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const ProjectCard = (props) => {
  return (
    <div className={"introCard" + props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}><span className="cm-keyword">const</span> <span className="cm-def">projects</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Climato</span>: <span className="cm-string">"User can get the accurate weather status by simply giving the City.This application will get
          the weather status with the help of Weather API.
          "</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">E-book</span>: <span className="cm-string">"The E-book Web application user can two categories free books and paid books read"</span></span></pre>

        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">E-Commerce</span>:<span className="cm-string">"The E-Commerce site User can buy All Car spare parts to order use this application React Js."</span></span></pre>

        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">BPR TEST RIG</span>: <span className="cm-string">"Bpr testrig is a testing rig to test sensors dynamically underwater upto a distance of 1 meter. This has all the
necessary items for the testing.This has a 1200 mm water tank and a moving arm to mount the sensors.The moving
arm can be programmed either manually or in file mode. The rate of insertion and withdrawl can be programmed
from the PC. The data generated by the unit under test can also be logged to the PC."</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{" "}<span className="cm-tab" role="presentation" Cm-text="	">{" "}</span><span className="cm-tab" role="presentation" Cm-text="	">{"   "}</span> &nbsp;<span className="cm-operator"></span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{"}"} <span className="cm-comment"></span></span></pre>
      </div>
    </div>
  )
}

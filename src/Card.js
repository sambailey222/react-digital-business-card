import './App.css';
import Headshot from './Headshot.js';
import Titles from './Titles.js';
import Button from './Button.js';
import mailLogo from './Mail.png';
import linkLogo from './linkedin-logo.png';
import Info from './Info.js';
import FooterIcon from './FooterIcon.js';
import facebook from './facebook-icon.png';
import twitter from './twitter-icon.png';
import github from './github-icon.png';

function Card() {
    return (
    <div className="Card">
        <Headshot />
        <Titles />
        <div className="btnContainer">
          <Button className="emailBtn" image={mailLogo} name="Email" link="mailto:sambaileydev@gmail.com"/>
          <Button className="linkedInBtn" image={linkLogo} name="LinkedIn" link="https://www.linkedin.com/in/sam-e-bailey/"/>
        </div>
        <div className="infoContainer">
          <Info title="About" text="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." />
          <Info title="Interests" text="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja."/>
        </div>
        <div className="footer">
          <div className="iconContainer">
            <FooterIcon image={twitter}/>
            <FooterIcon image={facebook}/>
            <FooterIcon image={github} link="https://github.com/sambailey222"/>
          </div>
        </div>
    </div>
    );
}

export default Card;
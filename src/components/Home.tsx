import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import htmlIcon from "../../icons/htmlIcon.svg";
import cssIcon from "../../icons/cssIcon.svg";
import typescriptIcon from "../../icons/typescriptIcon.svg";
import HackerPhoto from "../../photos/HackerPhoto.png";
import ScrollDown from "./ScrollDown";
import LexendoWhitefixed from "../../icons/lexendoLogos/LexendoWhitefixed.svg";
import LexendoBlack from "../../icons/lexendoLogos/LexendoBlack.svg";
import LexendoColored from "../../icons/lexendoLogos/LexendoColored.svg";
import LexendoWhitexxx from "../../icons/lexendoLogos/LexendoWhitexxx.svg";
import "./Home.css";

function Home() {
  return (
    <>
      <h1 className="name">Ondrej Babinský</h1>
      <div className="slogan">First time react got in my hands</div>
      <br></br>
      <img src={HackerPhoto} className="hackerPhoto" alt="hacker photo" />
      <br></br>
      <ScrollDown />
      <span className="poweredBy">Powered by</span>
      <ScrollDown />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://html.com/html5/" target="_blank">
          <img src={htmlIcon} className="logo html" alt="HTML5 logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="https://css3.com/" target="_blank">
          <img src={cssIcon} className="logo css" alt="CSS logo" />
        </a>

        <a href="https://www.typescriptlang.org/" target="_blank">
          <img
            src={typescriptIcon}
            className="logo typescript"
            alt="typescript logo"
          />
        </a>
      </div>
    </>
  );
}

export default Home;

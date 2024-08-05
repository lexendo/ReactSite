import scrolldown2 from "../../icons/scrolldown2.png";

import "./ScrollDown.css";

function ScrollDown() {
  return (
    <>
      <a href="https://www.google.com/" target="_blank">
        <img src={scrolldown2} className="scrollDownBtn" alt="Scroll down" />
      </a>
    </>
  );
}

export default ScrollDown;

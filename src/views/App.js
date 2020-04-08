import React, { useState, useEffect } from "react";
import "./App.scss";

import resizeCheck from "../helpers/resizeCheck";

export default function App() {
  const [nav, setNav] = useState(false);
  const { height: winHeight } = resizeCheck();

  const navCheck = function() {
    if (document.scrollingElement.scrollTop > winHeight) {
      setNav(true);
      document.getElementById("nav").style.animation = 'navDown 1s forwards';
    } else if (document.scrollingElement.scrollTop < winHeight && nav === true) {
      setNav(false);
      document.getElementById("nav").style.animation = 'navUp 1s forwards';
    }
  }

  window.addEventListener("scroll", navCheck);

  return (
    <div>
      <nav id="nav" className="nav">
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </nav>
      <main>
        <div className="A-intro-img">intro img</div>
        {/* <div className="A-navigation">navigation</div> */}
        <div className="A-about">
          <div>about</div>
          <div>My name is James Ra.</div>
        </div>
        <div className="A-projects">projects</div>
        <div className="A-contacts">contacts</div>
      </main>
    </div>
  );
};
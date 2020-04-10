import React, { useState, useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

import resizeCheck from "../helpers/resizeCheck";

import "./App.scss";

export default function App() {
  const [nav, setNav] = useState(false);
  const { height: winHeight } = resizeCheck();

  const introText = "Hello. I'm James Ra.";
  const IntroText = introText.split("").map(letter => {
    return(
      <span className="letter">{letter !== " " ? letter : '\xa0'}</span>
    )
  })

  const navCheck = function() {
    if (document.scrollingElement.scrollTop > winHeight && nav === false) {
      setNav(true);
      document.getElementById("nav").style.animation = 'navDown 1s forwards';
    } else if (document.scrollingElement.scrollTop < winHeight && nav === true) {
      setNav(false);
      document.getElementById("nav").style.animation = 'navUp 1s forwards';
    }
  }

  var textWrapper = document.querySelector('.ml10 .letters');
  console.log(textWrapper);

  anime.timeline({loop: false})
    .add({
      targets: '.ml10 .letter',
      rotateY: [-90, 0],
      duration: 2000,
      delay: (el, i) => 50 * i
    });

  window.addEventListener("scroll", navCheck);

  return (
    <div>
      <nav id="nav" className="nav">
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </nav>
      <main>
        <div className="A-intro-img">
          <h1 className="ml10">
            <span className="text-wrapper">
              {IntroText}
            </span>
          </h1>
        </div>
        <div className="A-about">
          <div className="title">about</div>
          <div>My name is James Ra and I am a web developer.</div>
        </div>
        <div className="A-projects">projects</div>
        <div className="A-contacts">contacts</div>
      </main>
    </div>
  );
};
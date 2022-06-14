import React from "react";

function Nav() {
  const handleClick = () => {
    console.log("click handled");
  };

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">Christan Fox</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a href="#projects" onClick={() => handleClick()}>
              Projects
            </a>
          </li>
          <li className="mx-2">
            <a href="#resume" onClick={() => handleClick()}>
              Resume
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>Contact Me</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

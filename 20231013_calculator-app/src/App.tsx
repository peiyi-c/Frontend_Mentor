import { useState, useEffect } from "react";
import "./App.scss";
import Key from "./components/Key";
import keys from "./calculator";

function App() {
  const [colorMode, setColorMode] = useState("");
  const [calculate, setCalculate] = useState("");

  const getLocalStorage = (): string => {
    return JSON.parse(localStorage.getItem("colorMode")) || "";
  };

  const setBodyClass = (mode: string) => {
    document.body.className = mode;
  };

  useEffect(() => {
    if (getLocalStorage()) {
      setColorMode(getLocalStorage());
      setBodyClass(getLocalStorage());
    } else return;
  }, []);

  const setLocalStorage = (mode: string) => {
    localStorage.setItem("colorMode", JSON.stringify(mode));
  };

  const onClick = (e: any): void => {
    const mode = e.target.id;
    setColorMode(mode);
    setBodyClass(mode);
    setLocalStorage(mode);
  };

  return (
    <>
      <header className="header">
        <h3 className="header__title">calc</h3>
        <span className="header__description">THEME</span>
        <fieldset
          className="header__toggle"
          aria-label="theme toggle"
          role="radiogroup"
        >
          <div className="header__toggle-name" aria-hidden="true">
            <label htmlFor="dark">
              <span>1</span>
            </label>
            <label htmlFor="light">
              <span>2</span>
            </label>
            <label htmlFor="special">
              <span>3</span>
            </label>
          </div>
          <span
            className={`header__toggle-thumb ${colorMode}`}
            aria-hidden="true"
          ></span>
          <div className="header__toggle-element">
            <input onClick={onClick} id="dark" name="color-mode" type="radio" />
            <input
              onClick={onClick}
              id="light"
              name="color-mode"
              type="radio"
            />
            <input
              onClick={onClick}
              id="special"
              name="color-mode"
              type="radio"
            />
          </div>
        </fieldset>
      </header>
      <nav className="nav container">
        <h1 className="nav__screen">{calculate}</h1>
      </nav>
      <main className="main container">
        {keys.map((key: { name: string; style: string }) => {
          return <Key name={key.name} style={key.style} key={key.name} />;
        })}
      </main>
      <footer className="footer">
        <span>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </span>
      </footer>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.scss";

import Key from "./components/Key";
import keys from "./calculator";

import { ColorMode, KeyType } from "./types";

function App() {
  const [colorMode, setColorMode] = useState<ColorMode>("");
  const [calculate, setCalculate] = useState<string[]>([]);

  const getLocalStorage = (): ColorMode => {
    return JSON.parse(localStorage.getItem("colorMode")) || "";
  };

  const setBodyClass = (mode: ColorMode) => {
    document.body.className = mode;
  };

  useEffect(() => {
    if (getLocalStorage()) {
      setColorMode(getLocalStorage());
      setBodyClass(getLocalStorage());
    } else return;
  }, []);

  const setLocalStorage = (mode: ColorMode) => {
    localStorage.setItem("colorMode", JSON.stringify(mode));
  };

  const toggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const mode = event.target.id as ColorMode;
    setColorMode(mode);
    setBodyClass(mode);
    setLocalStorage(mode);
  };

  const calc = (name: string, type: string) => {
    console.log(name);
    if (type === "num" || type === "operator") {
      if (name === "x") {
        name = "*";
      }
      setCalculate((prev) => [...prev, name]);
    } else if (type === "other") {
      if (name === "DEL") {
        setCalculate(["0"]);
      }
      if (name === "RESET") {
        setCalculate((prev) => (prev = prev.slice(0, prev.length - 1)));
      }
      if (name === "=") {
        // return if nothing in screen
        if (!calculate.length) {
          return;
        }
        // eliminate "0" at the beginning
        for (let i = 0; i < calculate.length; i++) {
          let checked = false;
          if (!checked && calculate[i] === "0") {
            calculate[i] = "";
          }
          if (calculate[i] !== "0") {
            checked = true;
          }
        }
        setCalculate([eval(calculate.join(""))]);
      }
    } else {
      return;
    }
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
            <input onChange={toggle} id="dark" name="color-mode" type="radio" />
            <input
              onChange={toggle}
              id="light"
              name="color-mode"
              type="radio"
            />
            <input
              onChange={toggle}
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
        {keys.map((key: KeyType) => {
          return (
            <Key
              name={key.name}
              style={key.style}
              type={key.type}
              key={key.name}
              onClick={calc}
            />
          );
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

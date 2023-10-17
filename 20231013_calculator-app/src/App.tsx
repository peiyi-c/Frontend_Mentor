import { useState, useRef, useEffect } from "react";
import "./App.scss";

function App() {
  const [colorMode, setColorMode] = useState("");

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
        <h1 className="nav__screen">399,25</h1>
      </nav>
      <main className="main container">
        <div className="main__key key-3">
          <h2>7</h2>
        </div>
        <div className="main__key key-3">
          <h2>8</h2>
        </div>
        <div className="main__key key-3">
          <h2>9</h2>
        </div>
        <div className="main__key key-1">
          <h2>DEL</h2>
        </div>
        <div className="main__key key-3">
          <h2>4</h2>
        </div>
        <div className="main__key key-3">
          <h2>5</h2>
        </div>
        <div className="main__key key-3">
          <h2>6</h2>
        </div>
        <div className="main__key key-3">
          <h2>+</h2>
        </div>
        <div className="main__key key-3">
          <h2>1</h2>
        </div>
        <div className="main__key key-3">
          <h2>2</h2>
        </div>
        <div className="main__key key-3">
          <h2>3</h2>
        </div>
        <div className="main__key key-3">
          <h2>-</h2>
        </div>
        <div className="main__key key-3">
          <h2>.</h2>
        </div>
        <div className="main__key key-3">
          <h2>0</h2>
        </div>
        <div className="main__key key-3">
          <h2>/</h2>
        </div>
        <div className="main__key key-3">
          <h2>x</h2>
        </div>
        <div className="main__key-lg key-1">
          <h2>RESET</h2>
        </div>
        <div className="main__key-lg key-2">
          <h2>=</h2>
        </div>
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

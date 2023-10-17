import { useState, useRef } from "react";
import "./App.scss";

function App() {
  const [colorMode, setColorMode] = useState("");
  const thumbRef = useRef(null);
  const toggleColor = (e: any): void => {
    console.log(e.target);
    setColorMode(e.target.id);
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
            ref={thumbRef}
            className="header__toggle-thumb"
            aria-hidden="true"
          ></span>
          <div className="header__toggle-element">
            <input
              onClick={toggleColor}
              id="dark"
              name="color-mode"
              type="radio"
            />
            <input
              onClick={toggleColor}
              id="light"
              name="color-mode"
              type="radio"
            />
            <input
              onClick={toggleColor}
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

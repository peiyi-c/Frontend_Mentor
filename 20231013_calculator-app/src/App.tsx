/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import "./App.scss";

import Key from "./components/Key";
import keys from "./calculator";
import { ColorMode, Keys } from "./types";

function App() {
  // color modes //
  const [colorMode, setColorMode] = useState<ColorMode>("");
  const getLocalStorage = (): ColorMode => {
    const mode = localStorage.getItem("colorMode");
    if (mode === null) {
      return "";
    } else {
      return JSON.parse(mode);
    }
  };
  const getColorPreference = (): ColorMode => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"; // if no preference, deafult is light
  };
  const setBodyClass = (mode: ColorMode) => {
    document.body.className = mode;
  };
  useEffect(() => {
    setColorMode(getLocalStorage() || getColorPreference());
    setBodyClass(getLocalStorage() || getColorPreference());
  }, []);

  const setLocalStorage = (mode: ColorMode) => {
    localStorage.setItem("colorMode", JSON.stringify(mode));
  };
  const toggleColor = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const mode = event.target.id as ColorMode;
    setColorMode(mode);
    setBodyClass(mode);
    setLocalStorage(mode);
  };

  // calculation logic //
  const [prevOperand, setPrevOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [isEvaluated, setIsEvaluated] = useState(false);
  const INTEGER_FORMATTER = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });
  const format = (operand: string) => {
    if (!operand) {
      return;
    } else {
      const [integer, decimal] = operand.split(".");
      if (operand.includes(".")) {
        return `${INTEGER_FORMATTER.format(Number(integer))}.${decimal}`;
      } else {
        return `${INTEGER_FORMATTER.format(Number(integer))}`;
      }
    }
  };

  const evalutate = () => {
    const prev = parseFloat(prevOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return "";

    let result: number = 0;
    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "x":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
    }
    return result.toString();
  };
  const handleCalculate = (name: string, type: string) => {
    switch (type) {
      case "add-digit": {
        if (isEvaluated) {
          setCurrentOperand(name);
          setIsEvaluated(false);
        } else if (currentOperand === "0" && name === "0") {
          return;
        } else if (currentOperand === "," && currentOperand.includes(",")) {
          return;
        } else {
          setCurrentOperand((prev) => prev + name);
        }
        break;
      }
      case "clear": {
        setPrevOperand("");
        setCurrentOperand("");
        setOperator("");
        break;
      }
      case "delete-digit": {
        if (isEvaluated) {
          setCurrentOperand("");
          setIsEvaluated(false);
        } else if (!currentOperand) {
          return;
        } else if (currentOperand.length === 1) {
          setCurrentOperand("");
        } else {
          setCurrentOperand((prev) => prev.slice(0, -1));
        }
        break;
      }
      case "operator": {
        if (!currentOperand && !prevOperand) {
          return;
        } else if (!prevOperand) {
          setOperator((prev) => (prev = name));
          setPrevOperand((prev) => (prev = currentOperand));
          setCurrentOperand("");
        } else if (!currentOperand) {
          setOperator((prev) => (prev = name));
        } else {
          setOperator((prev) => (prev = name));
          setPrevOperand(evalutate());
          setCurrentOperand("");
        }

        break;
      }
      case "evaluate": {
        if (!operator || !currentOperand || !prevOperand) {
          return;
        } else {
          setCurrentOperand(evalutate());
          setPrevOperand("");
          setOperator("");
          setIsEvaluated(true);
        }
      }
    }
  };
  // calculate with keyboards //
  const handleKeyDown = (event: KeyboardEvent) => {
    let eventKey = event.key;
    // de-DE Zifferblock
    if (eventKey === ",") {
      eventKey = ".";
    }
    const indexOfKey = keys.findIndex((key) => {
      return key.key == eventKey;
    });

    if (indexOfKey === -1) {
      return;
    } else {
      handleCalculate(keys[indexOfKey]["name"], keys[indexOfKey]["type"]);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <>
      <header className="header">
        <h1 className="header__title">calc</h1>
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
            <input
              onChange={toggleColor}
              id="dark"
              name="color-mode"
              type="radio"
            />
            <input
              onChange={toggleColor}
              id="light"
              name="color-mode"
              type="radio"
            />
            <input
              onChange={toggleColor}
              id="special"
              name="color-mode"
              type="radio"
            />
          </div>
        </fieldset>
      </header>
      <nav className="nav container">
        <h1 className="nav__screen">
          {format(prevOperand)}
          {operator}
          {format(currentOperand)}
        </h1>
      </nav>
      <main className="main container">
        {keys.map((key: Keys) => {
          return (
            <Key
              name={key.name}
              style={key.style}
              type={key.type}
              key={key.name}
              onClick={handleCalculate}
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
          . Coded by <a href="https://github.com/peiyi-c">Pei-Yi C</a>.
        </span>
      </footer>
    </>
  );
}

export default App;

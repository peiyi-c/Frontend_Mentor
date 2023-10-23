import { useState, useEffect } from "react";
import "./App.scss";

import Key from "./components/Key";
import keys from "./calculator";
import { ColorMode, Keys } from "./types";

function App() {
  // color modes //
  const [colorMode, setColorMode] = useState<ColorMode>("");

  const getLocalStorage = (): ColorMode | "" => {
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
        return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
      } else {
        return `${INTEGER_FORMATTER.format(integer)}`;
      }
    }
  };

  const evalutate = () => {
    const prev = parseFloat(prevOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return "";

    let result: number;
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

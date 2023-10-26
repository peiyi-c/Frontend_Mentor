import "./index.scss";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../../containers/ThemeContext";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("colorMode", JSON.stringify(theme));
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className="header" role="banner">
        <div className="header__wrapper container-sm">
          <div className="header-headline">
            <h1>Where in the world?</h1>
          </div>
          <nav className="nav" role="navigation" aria-label="Color-Toggle">
            <button onClick={handleClick} className={`nav__toggle ${theme}`}>
              <ion-icon
                className="nav__toggle__icon"
                name="moon-outline"
                aria-hidden="true"
              ></ion-icon>
              <ion-icon
                className="nav__toggle__icon"
                name="moon"
                aria-hidden="true"
              ></ion-icon>
              <span className="nav__toggle-name">Dark Mode</span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

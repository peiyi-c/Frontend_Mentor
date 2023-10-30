import "./index.scss";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../containers/ThemeContext";
import { Outlet, Link } from "react-router-dom";
export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("colorMode", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <header className="header" role="banner">
        <div className="header__wrapper container-sm">
          <div className="header-headline">
            <Link to="/">
              <h1>Where in the world?</h1>
            </Link>
          </div>
          <div className="theme" aria-label="Color-Toggle">
            <button onClick={handleClick} className={`theme__toggle ${theme}`}>
              <ion-icon
                className="theme__toggle__icon"
                name="moon-outline"
                aria-hidden="true"
              ></ion-icon>
              <ion-icon
                className="theme__toggle__icon"
                name="moon"
                aria-hidden="true"
              ></ion-icon>
              <span className="theme__toggle-name">Dark Mode</span>
            </button>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

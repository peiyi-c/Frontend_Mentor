import "./index.scss";

export const Header = () => {
  return (
    <>
      <header className="header" role="banner">
        <div className="header__wrapper container-sm">
          <div className="header-headline">
            <h1>Where in the world?</h1>
          </div>
          <nav className="nav" role="navigation" aria-label="Color-Toggle">
            <div className="nav__toggle">
              <ion-icon
                className="nav__toggle-icon"
                name="moon-outline"
                aria-hidden="true"
              ></ion-icon>
              <ion-icon
                className="nav__toggle-icon"
                name="moon"
                aria-hidden="true"
              ></ion-icon>
              <span className="nav__toggle-name">Dark Mode</span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

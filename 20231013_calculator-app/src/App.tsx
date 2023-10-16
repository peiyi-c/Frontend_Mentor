import "./App.scss";

function App() {
  return (
    <>
      <header className="header">
        <h3 className="header__title">calc</h3>
        <span className="header__description">THEME</span>
        <div className="header__toggle">
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
          <span className="header__toggle-thumb" aria-hidden="true"></span>
          <div className="header__toggle-element" role="switch">
            <input id="dark" name="color-mode" type="radio" />
            <input id="light" name="color-mode" type="radio" />
            <input id="special" name="color-mode" type="radio" />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;

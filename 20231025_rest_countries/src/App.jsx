import "./App.scss";
import { ThemeMessage } from "./containers/ThemeContext";
import { CountryMessage } from "./containers/CountryContext";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { CountryCardDetail } from "./components/CountryCardDetail";
function App() {
  // get initial theme from localStorage and user preference
  const getLocalStorage = () => {
    let theme = localStorage.getItem("colorMode");
    if (theme) {
      theme = JSON.parse(theme);
      if (theme === "light" || theme === "dark") {
        return theme;
      }
    } else return "";
  };
  const getThemePreference = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
  let theme = getLocalStorage() || getThemePreference();
  return (
    <>
      <ThemeMessage initialTheme={theme}>
        <Header />
        <CountryMessage>
          <Navigation />
          <Main />
          <CountryCardDetail />
        </CountryMessage>
      </ThemeMessage>
    </>
  );
}

export default App;

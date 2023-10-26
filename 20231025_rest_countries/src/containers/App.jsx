import "./App.scss";
import { ThemeMessage } from "./ThemeContext";
import { Header } from "../components/Header";

function App() {
  // get initial theme
  const getLocalStorage = () => {
    const theme = localStorage.getItem("colorMode");
    if (theme) {
      return JSON.parse(theme);
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
      </ThemeMessage>
    </>
  );
}

export default App;

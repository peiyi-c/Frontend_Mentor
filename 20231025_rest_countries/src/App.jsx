import "./App.scss";
import { ThemeMessage } from "./containers/ThemeContext";
import { CountryMessage } from "./containers/CountryContext";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { CountryCardDetail } from "./components/CountryCardDetail";
function App() {
  return (
    <>
      <ThemeMessage>
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

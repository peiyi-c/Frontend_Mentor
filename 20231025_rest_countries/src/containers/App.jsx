import "./App.scss";
import { ThemeMessage } from "./ThemeContext";
import { Header } from "../components/Header";

function App() {
  return (
    <>
      <ThemeMessage initialTheme="light">
        <Header />
      </ThemeMessage>
    </>
  );
}

export default App;

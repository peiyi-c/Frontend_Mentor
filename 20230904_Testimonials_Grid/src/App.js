import { createContext } from "react";
import "./App.scss";
import { Grid } from "./components/Grid";
import testimonialData from "./testimonialData";

export const DataContext = createContext({ testimonialData });

function App() {
  return (
    <div className="App">
      <main>
        <DataContext.Provider value={testimonialData}>
          <Grid />
        </DataContext.Provider>
      </main>
    </div>
  );
}

export default App;

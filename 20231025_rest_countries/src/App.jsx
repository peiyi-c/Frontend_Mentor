import "./App.scss";
import { ThemeMessage } from "./containers/ThemeContext";
import { CountryMessage } from "./containers/CountryContext";

import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { CountryCardDetail } from "./components/CountryCardDetail";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />} />
      <Route path="detail/:cca3" element={<CountryCardDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <ThemeMessage>
        <CountryMessage>
          <RouterProvider router={appRouter} />
        </CountryMessage>
      </ThemeMessage>
    </>
  );
}

export default App;

/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CountryContext = createContext();
export const baseURL = "https://restcountries.com/v3.1/";

export const CountryMessage = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL + "all").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <CountryContext.Provider value={{ data }}>
      {children}
    </CountryContext.Provider>
  );
};

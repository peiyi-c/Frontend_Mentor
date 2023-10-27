/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CountryContext = createContext();
export const baseURL = "https://restcountries.com/v3.1/";

export const CountryMessage = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios.get(baseURL + "all").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <CountryContext.Provider
      value={{
        data,
        baseURL,
        filter,
        setFilter,
        keyword,
        setKeyword,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

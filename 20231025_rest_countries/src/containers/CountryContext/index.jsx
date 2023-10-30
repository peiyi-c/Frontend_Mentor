/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
export const CountryContext = createContext();

import axios from "axios";
const baseURL = "https://restcountries.com/v3.1/";

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

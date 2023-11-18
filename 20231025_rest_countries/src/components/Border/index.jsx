/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "../../containers/CountryContext";
import axios from "axios";

export const Border = ({ border }) => {
  const [fetchNameStatus, setFetchNameStatus] = useState("idle");
  const [name, setName] = useState("");
  const { baseURL } = useContext(CountryContext);

  useEffect(() => {
    setFetchNameStatus("loading");
    axios
      .get(baseURL + "alpha/" + border)
      .then((response) => {
        setName((name) => response.data[0].name.common);
        setFetchNameStatus("success");
      })
      .catch((error) => {
        setFetchNameStatus("error");
      });
  }, [baseURL, border]);

  return (
    <>
      {fetchNameStatus === "loading" && (
        <button className="skeleton-title"></button>
      )}
      {fetchNameStatus === "error" && (
        <button className="skeleton-title">not available</button>
      )}
      {fetchNameStatus === "success" && (
        <button>
          <Link to={`/detail/${border}`}>{name}</Link>
        </button>
      )}
    </>
  );
};

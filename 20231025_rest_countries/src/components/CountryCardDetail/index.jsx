/* eslint-disable no-unused-vars */
import "./index.scss";
import { CountryContext } from "../../containers/CountryContext";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { formater, getIndex } from "../../helpers";
import { CountryCardDetailLoading } from "../CountryCardDetailLoading";
import axios from "axios";

export const CountryCardDetail = () => {
  const [fetchCountryStatus, setFetchCountryStatus] = useState("idle");
  const [country, setCountry] = useState([]);
  const { cca3 } = useParams();
  const { baseURL, data } = useContext(CountryContext);

  useEffect(() => {
    setFetchCountryStatus("loading");
    axios
      .get(baseURL + "alpha/" + cca3)
      .then((response) => {
        setCountry((country) => response.data[0]);
        setFetchCountryStatus("success");
      })
      .catch((error) => {
        setFetchCountryStatus("error");
      });
  }, [baseURL, cca3]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="card-detail container-sm center">
      <button className="card-detail__btn" onClick={goBack}>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <span>Back</span>
      </button>
      {fetchCountryStatus === "loading" && <CountryCardDetailLoading />}
      {fetchCountryStatus === "error" && (
        <>
          <h1>Server is busy, please try it later...</h1>
          <br />
          <CountryCardDetailLoading />
        </>
      )}
      {fetchCountryStatus === "success" && (
        <div className="card-detail__content">
          <img
            className="card-detail__content__img"
            src={country.flags.png}
            alt={country.flags}
          ></img>
          <div className="card-detail__content__info">
            <h3 className="card-detail__content__info-title">
              {country.name.common}
            </h3>
            <div className="wrapper">
              <div>
                <span className="name">Native Name: </span>
                {country.name.nativeName &&
                  Object.keys(country.name.nativeName).map((ele, idx) => (
                    <span key={idx}>
                      {country.name.nativeName[ele].common}
                      {idx < Object.keys(country.name.nativeName).length - 1
                        ? ", "
                        : ""}
                    </span>
                  ))}
                {!country.name.nativeName && <span>-</span>}
                <br />
                <span className="name">Polulation: </span>
                {formater(country.population)}
                <br />
                <span className="name">Region: </span>{" "}
                {country.region ? country.region : "-"} <br />
                <span className="name">Sub Region: </span>{" "}
                {country.subregion ? country.subregion : "-"}
                <br />
                <span className="name">Capital: </span>{" "}
                {country.capital ? country.capital : "-"} <br />
              </div>
              <div>
                <span className="name">Top Level Domain: </span> {country.tld}
                <br />
                <span className="name">Currencies: </span>
                {country.currencies &&
                  Object.keys(country.currencies).map((ele, idx) => (
                    <span key={idx}>
                      {country.currencies[ele].name}
                      {idx < Object.keys(country.currencies).length - 1
                        ? ", "
                        : ""}
                    </span>
                  ))}
                {!country.currencies && <span>not available</span>}
                <br />
                <span className="name">Languages: </span>{" "}
                {country.languages &&
                  Object.keys(country.languages).map((ele, idx) => (
                    <span key={idx}>
                      {country.languages[ele]}
                      {idx < Object.keys(country.languages).length - 1
                        ? ", "
                        : ""}
                    </span>
                  ))}
                {!country.languages && <span>not available</span>}
                <br />
              </div>
            </div>
            <div className="wrapper-2">
              <h4>Border Countries:</h4>
              {country.borders &&
                country.borders.map((border, idx) => (
                  <button key={idx}>
                    <Link to={`/detail/${border}`}>
                      {data[getIndex(border, data)]["name"]["common"]}
                    </Link>
                  </button>
                ))}
              {!country.borders && <span>none</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

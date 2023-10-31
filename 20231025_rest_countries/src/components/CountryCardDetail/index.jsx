import "./index.scss";
import axios from "axios";
import { CountryContext } from "../../containers/CountryContext";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { formater } from "../../helpers";
import { filter } from "../../helpers";

export const CountryCardDetail = () => {
  const { cca3 } = useParams();
  const { data, baseURL } = useContext(CountryContext);
  const [country, setCountry] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(baseURL + "alpha?codes=" + cca3).then((response) => {
      console.log(response.data[0]);
      setCountry(response.data[0]);
    });
  }, [baseURL, cca3]);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="card-detail container-sm center">
      <button className="card-detail__btn" onClick={goBack}>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <span>Back</span>
      </button>
      {country && (
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
                {Object.keys(country.name.nativeName).map((ele, idx) => (
                  <span key={idx}>
                    {country.name.nativeName[ele].common}
                    {idx < Object.keys(country.name.nativeName).length - 1
                      ? ", "
                      : ""}
                  </span>
                ))}
                <br />
                <span className="name">Polulation: </span>{" "}
                {formater(country.population)}
                <br />
                <span className="name">Region: </span> {country.region} <br />
                <span className="name">Sub Region: </span> {country.subregion}{" "}
                <br />
                <span className="name">Capital: </span> {country.capital} <br />
              </div>
              <div>
                <span className="name">Top Level Domain: </span> {country.tld}{" "}
                <br />
                <span className="name">Currencies: </span>
                {Object.keys(country.currencies).map((ele, idx) => (
                  <span key={idx}>
                    {country.currencies[ele].name}
                    {idx < Object.keys(country.currencies).length - 1
                      ? ", "
                      : ""}
                  </span>
                ))}
                <br />
                <span className="name">Languages: </span>{" "}
                {Object.keys(country.languages).map((ele, idx) => (
                  <span key={idx}>
                    {country.languages[ele]}
                    {idx < Object.keys(country.languages).length - 1
                      ? ", "
                      : ""}
                  </span>
                ))}
                <br />
              </div>
            </div>
            <div className="wrapper-2">
              <h4>Border Countries:</h4>
              {country.borders &&
                country.borders.map((border, idx) => (
                  <button key={idx}>
                    <Link to={`/detail/${border}`}>
                      {data[filter(border, data)]["name"]["common"]}
                    </Link>
                  </button>
                ))}
              {!country.borders && <span>none</span>}
            </div>
          </div>
        </div>
      )}
      {!country && <h1>Loading...</h1>}
    </div>
  );
};

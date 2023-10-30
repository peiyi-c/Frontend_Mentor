import "./index.scss";
import { CountryContext } from "../../containers/CountryContext";
import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { formater } from "../../helpers";
import { filter } from "../../helpers";

export const CountryCardDetail = () => {
  const { index } = useParams();
  const { data } = useContext(CountryContext);
  const navigate = useNavigate();
  const country = data[index];
  const {
    population,
    region,
    subregion,
    capital,
    tld,
    flags: { png },
    name: { common },
    currencies: currencies,
    languages: languages,
    borders,
  } = country;
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="card-detail container-sm center">
      <button className="card-detail__btn">
        <ion-icon name="arrow-back-outline"></ion-icon>
        <span onClick={goBack}>Back</span>
      </button>
      <div className="card-detail__content">
        <img className="card-detail__content__img" src={png}></img>
        <div className="card-detail__content__info">
          <h3 className="card-detail__content__info-title">{common}</h3>
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
              <span className="name">Polulation: </span> {formater(population)}
              <br />
              <span className="name">Region: </span> {region} <br />
              <span className="name">Sub Region: </span> {subregion} <br />
              <span className="name">Capital: </span> {capital} <br />
            </div>
            <div>
              <span className="name">Top Level Domain: </span> {tld} <br />
              <span className="name">Currencies: </span>
              {Object.keys(country.currencies).map((ele, idx) => (
                <span key={idx}>
                  {country.currencies[ele].name}
                  {idx < Object.keys(country.currencies).length - 1 ? ", " : ""}
                </span>
              ))}
              <br />
              <span className="name">Languages: </span>{" "}
              {Object.keys(country.languages).map((ele, idx) => (
                <span key={idx}>
                  {country.languages[ele]}
                  {idx < Object.keys(country.languages).length - 1 ? ", " : ""}
                </span>
              ))}
              <br />
            </div>
          </div>
          <div className="wrapper-2">
            <h4>Border Countries:</h4>
            {borders &&
              borders.map((border, idx) => (
                <Link to={`/detail/${filter(border, data)}`} key={idx}>
                  <button>
                    {data[filter(border, data)]["name"]["common"]}
                  </button>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

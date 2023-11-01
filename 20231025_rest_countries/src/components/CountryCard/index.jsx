/* eslint-disable react/prop-types */
import "./index.scss";
import { Link } from "react-router-dom";
import { formater } from "../../helpers";
export const CountryCard = ({
  flag,
  alt,
  name,
  population,
  region,
  capital,
  cca3,
}) => {
  return (
    <Link to={`/detail/${cca3}`}>
      <div className="card">
        <div className="card__image" role="image">
          <img src={flag} alt={alt} />
        </div>
        <div className="card__text">
          <h3 className="card__text-title">{name}</h3>
          <div className="card__text-info">
            <span className="name">Polulation:</span> {formater(population)}
            <br />
            <span className="name">Region:</span> {region} <br />
            <span className="name">Capital:</span> {capital}
          </div>
        </div>
      </div>
    </Link>
  );
};

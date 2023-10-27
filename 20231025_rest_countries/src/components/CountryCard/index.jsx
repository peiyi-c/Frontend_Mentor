import "./index.scss";
export const CountryCard = () => {
  return (
    <div className="card">
      <div className="card__image"></div>
      <p className="card__text">
        <h3 className="card__text-title">Country Name</h3>
        <p className="card__text-info">
          <span className="name">Polulation:</span> 81,770,910
          <br />
          <span className="name">Region:</span> Europe <br />
          <span className="name">Capital:</span> Berlin
        </p>
      </p>
    </div>
  );
};

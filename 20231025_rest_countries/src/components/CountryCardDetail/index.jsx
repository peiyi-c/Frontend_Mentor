import "./index.scss";

export const CountryCardDetail = () => {
  return (
    <div className="card-detail container-sm center">
      <button className="card-detail__btn">
        <ion-icon name="arrow-back-outline"></ion-icon>
        <span>Back</span>
      </button>
      <div className="card-detail__content">
        <img className="card-detail__content__img"></img>
        <p className="card-detail__content__info">
          <h3 className="card-detail__content__info-title">Country Name</h3>
          <div className="wrapper">
            <p>
              <span className="name">Native Name: </span> Deutschland <br />
              <span className="name">Polulation: </span> 81,770,910 <br />
              <span className="name">Region: </span> Europe <br />
              <span className="name">Sub Region: </span> Western Europe <br />
              <span className="name">Capital: </span> Berlin <br />
            </p>
            <p>
              <span className="name">Top Level Domain: </span> .de <br />
              <span className="name">Currencies: </span> Euro <br />
              <span className="name">Languages: </span> German <br />
            </p>
          </div>
          <div className="wrapper-2">
            <h4>Border Countries:</h4>
            <button>France</button>
            <button>Italy</button>
            <button>Belgium</button>
          </div>
        </p>
      </div>
    </div>
  );
};

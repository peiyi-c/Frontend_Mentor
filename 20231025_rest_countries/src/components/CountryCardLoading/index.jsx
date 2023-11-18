import "./index.scss";

export const CountryCardLoading = () => {
  return (
    <div className="card skeleton">
      <div className="card__image skeleton-image" role="image"></div>
      <div className="card__text">
        <h3 className="card__text-title skeleton-title"></h3>
        <div className="card__text-info">
          <div className="name skeleton-text"></div>
          <div className="name skeleton-text"></div>
          <div className="name skeleton-text"></div>
        </div>
      </div>
    </div>
  );
};

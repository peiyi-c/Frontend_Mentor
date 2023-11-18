export const CountryCardDetailLoading = () => {
  return (
    <div className="card-detail__content">
      <div className="card-detail__content__img skeleton-image"></div>
      <div className="card-detail__content__info">
        <h3 className="card-detail__content__info-title skeleton-title"></h3>
        <div className="wrapper">
          <div>
            <div className="name skeleton-text"></div>
            <div className="name skeleton-text"></div>
            <div className="name skeleton-text"></div>
            <div className="name skeleton-text"></div>
            <div className="name skeleton-text"></div>
          </div>
          <div>
            <div className="name skeleton-text"></div>
            <div className="name skeleton-text"></div>
            <div className="name skeleton-text"></div>
          </div>
        </div>
        <div className="wrapper-2">
          <h4 className="skeleton-title"></h4>
        </div>
      </div>
    </div>
  );
};

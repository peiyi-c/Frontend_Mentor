import "./index.scss";

export const Navigation = () => {
  return (
    <nav className="nav container-sm center" role="navigation">
      <div className="nav__wrapper">
        <label className="nav__search" htmlFor="search">
          <ion-icon className="nav__search-icon" name="search-sharp"></ion-icon>
          <input
            className="nav__search-input"
            id="search"
            type="search"
            placeholder="Search for a country..."
          />
        </label>
        <div className="nav__filter">
          <select name="region" id="region">
            <option value="none">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

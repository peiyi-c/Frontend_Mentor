import "./index.scss";

export const Navigation = () => {
  return (
    <nav className="nav container-sm center" role="navigation">
      <div className="nav__wrapper">
        <div className="nav__search">
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div className="nav__filter">
          <select name="region" id="region">
            <option value="none">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

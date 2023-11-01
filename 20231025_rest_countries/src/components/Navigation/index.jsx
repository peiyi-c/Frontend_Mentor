import "./index.scss";
import { useContext, useEffect } from "react";
import { CountryContext } from "../../containers/CountryContext";
import { useSearchParams } from "react-router-dom";
export const Navigation = () => {
  const { filter, setFilter, setKeyword } = useContext(CountryContext);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    setKeyword(search.get("q"));
  }, [search, setKeyword]);

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
            value={search.get("q")}
            onChange={(e) => setSearch({ q: e.target.value })}
          />
        </label>
        <div className="nav__filter">
          <select
            name="region"
            id="region"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
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

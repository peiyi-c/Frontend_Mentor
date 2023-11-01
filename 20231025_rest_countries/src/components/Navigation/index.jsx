import "./index.scss";
import { useContext, useEffect } from "react";
import { CountryContext } from "../../containers/CountryContext";
import { useSearchParams } from "react-router-dom";
export const Navigation = () => {
  const { setFilter, setKeyword } = useContext(CountryContext);
  const [search, setSearch] = useSearchParams({ q: "", region: "All" });

  useEffect(() => {
    setKeyword(search.get("q"));
  }, [search, setKeyword]);

  useEffect(() => {
    setFilter(search.get("region"));
  }, [search, setFilter]);

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
            onChange={(e) => {
              setSearch((search) => {
                search.set("q", e.target.value);
                return search;
              });
            }}
          />
        </label>
        <div className="nav__filter">
          <select
            name="region"
            id="region"
            value={search.get("region")}
            onChange={(e) => {
              setSearch((search) => {
                search.set("region", e.target.value);
                return search;
              });
            }}
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

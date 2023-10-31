import "./index.scss";
import { useContext, useRef } from "react";
import { CountryContext } from "../../containers/CountryContext";
import { useNavigate, createSearchParams } from "react-router-dom";
export const Navigation = () => {
  const { filter, setFilter, keyword, setKeyword } = useContext(CountryContext);

  const navigate = useNavigate();
  const searchInputRef = useRef();
  const handleChange = (e) => {
    setKeyword(e.target.value);

    const searchQuery = {
      q: searchInputRef.current.value,
    };
    const query = createSearchParams(searchQuery);
    navigate({
      pathname: "/",
      search: `?${query}`,
    });
  };

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
            value={keyword}
            onChange={handleChange}
            ref={searchInputRef}
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

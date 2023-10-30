import "./index.scss";
import { CountryContext } from "../../containers/CountryContext";
import { CountryCard } from "../CountryCard";
import { useContext, useMemo } from "react";

const filters = {
  region: (countries, region) => {
    return region === "All"
      ? countries
      : countries.filter((country) => country.region === region);
  },
  word: (countries, keyword) => {
    return countries.filter((country) => {
      return country.name.common.toLowerCase().includes(keyword);
    });
  },
};

export const Main = () => {
  const { data, filter, keyword } = useContext(CountryContext);
  const filteredData = useMemo(() => {
    if (filter === "All") {
      if (!keyword) {
        return data;
      } else {
        return filters.word(data, keyword);
      }
    } else if (filter !== "All") {
      if (!keyword) {
        return filters.region(data, filter);
      } else {
        return filters.word(filters.region(data, filter), keyword);
      }
    }
  }, [data, filter, keyword]);

  return (
    <main className="main" role="main">
      <div className="main__wrapper container-lg center">
        <section className="section__country">
          {filteredData.map((item, index) => {
            return (
              <CountryCard
                flag={item.flags.png}
                alt={item.flags.alt}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
                key={index}
                index={index}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

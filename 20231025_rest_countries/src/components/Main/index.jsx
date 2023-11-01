import "./index.scss";
import { CountryContext } from "../../containers/CountryContext";
import { CountryCard } from "../CountryCard";
import { useContext, useMemo } from "react";
import { filters } from "../../helpers";

export const Main = () => {
  const { data, filter, keyword, fetchStatus } = useContext(CountryContext);
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
          {fetchStatus === "loading" && <h1>Loading...</h1>}
          {fetchStatus === "error" && (
            <h1>Server is busy, please try it later...</h1>
          )}
          {fetchStatus === "success" &&
            filteredData.map((item, index) => {
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
                  cca3={item.cca3}
                />
              );
            })}
        </section>
      </div>
    </main>
  );
};

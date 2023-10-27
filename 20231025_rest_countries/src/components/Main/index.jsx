import "./index.scss";
import { CountryContext } from "../../containers/CountryContext";
import { CountryCard } from "../CountryCard";
import { useContext } from "react";

export const Main = () => {
  const { data } = useContext(CountryContext);

  return (
    <main className="main" role="main">
      <div className="main__wrapper container-lg center">
        <section className="section__country">
          {data.map((item, index) => {
            return (
              <CountryCard
                flag={item.flags.png}
                alt={item.flags.alt}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
                key={index}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

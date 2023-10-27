import "./index.scss";
import { CountryCard } from "../CountryCard";
import { CountryCardDetail } from "../CountryCardDetail";
export const Main = () => {
  return (
    <main className="main" role="main">
      <div className="main__wrapper container-lg center">
        <section className="section__country">
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </section>
        <section className="section__country-detail">
          <CountryCardDetail />
        </section>
      </div>
    </main>
  );
};

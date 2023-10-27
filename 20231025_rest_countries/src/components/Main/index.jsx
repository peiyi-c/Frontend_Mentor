import "./index.scss";
import { CountryCard } from "../CountryCard";

export const Main = () => {
  return (
    <main className="main" role="main">
      <div className="main__wrapper container-lg center">
        <section className="section__country">
          <CountryCard />
        </section>
      </div>
    </main>
  );
};

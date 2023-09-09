import React, { useContext } from "react";
import { DataContext } from "../App";
import { GridItem } from "./GridItem";
export function Grid() {
  const data = useContext(DataContext);
  return (
    <>
      <section className="grid">
        {data.map((element) => {
          return <GridItem {...element} key={element.id} />;
        })}
      </section>
    </>
  );
}

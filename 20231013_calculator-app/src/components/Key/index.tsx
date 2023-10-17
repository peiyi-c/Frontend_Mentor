import "./index.scss";
import { KeyType } from "../../types";

function Key({ style, name, type, onClick }: KeyType) {
  return (
    <button
      className={style}
      data-key={name}
      data-type={type}
      onClick={() => onClick(name, type)}
    >
      <h2>{name}</h2>
    </button>
  );
}

export default Key;

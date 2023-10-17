import "./index.scss";

type Key = {
  style: string;
  name: string;
};
function Key({ style, name }: Key) {
  return (
    <div className={style} data-key={name}>
      <h2>{name}</h2>
    </div>
  );
}

export default Key;

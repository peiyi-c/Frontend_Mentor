export function GridItem({
  id,
  name,
  image,
  membership,
  description_accent,
  description_detail,
}) {
  return (
    <>
      <div className={`grid-item grid-item_${id}`}>
        <div className="grid-item-header">
          <img
            className="grid-item-header-img"
            src={require("../images/" + image)}
            alt={image}
          />
          <div className="grid-item-header-names">
            <h3 className="grid-item-header-names_name">{name}</h3>
            <h3 className="grid-item-header-names_membership">{membership}</h3>
          </div>
        </div>
        <div className="grid-item-description">
          <h1 className="grid-item-description_a">{description_accent}</h1>
          <h2 className="grid-item-description_d">{description_detail}</h2>
        </div>
      </div>
    </>
  );
}

const formater = (integer) => {
  return new Intl.NumberFormat("en-US").format(integer);
};

const filter = (border, data) => {
  return data
    .map((item) => {
      return item.cca3;
    })
    .indexOf(border);
};

export { formater, filter };

export const formater = (integer) => {
  return new Intl.NumberFormat("en-US").format(integer);
};

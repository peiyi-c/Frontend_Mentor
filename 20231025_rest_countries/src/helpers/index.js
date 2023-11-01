const formater = (integer) => {
  return new Intl.NumberFormat("en-US").format(integer);
};

const borderFilter = (border, data) => {
  return data
    .map((item) => {
      return item.cca3;
    })
    .indexOf(border);
};

const filters = {
  region: (countries, region) => {
    return region === "All"
      ? countries
      : countries.filter((country) => country.region === region);
  },
  word: (countries, keyword) => {
    return countries.filter((country) => {
      return country.name.common.toLowerCase().includes(keyword);
    });
  },
};

export { formater, borderFilter, filters };

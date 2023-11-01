// format population
const formater = (integer) => {
  return new Intl.NumberFormat("en-US").format(integer);
};

// get a country object's index in data array with value of the cca3 property
const getIndex = (cca3, data) => {
  return data.map((item) => item.cca3).indexOf(cca3);
};

const filters = {
  region: (countries, region) => {
    return region === "All"
      ? countries
      : countries.filter((country) => country.region === region);
  },
  word: (countries, keyword) => {
    keyword = keyword.toLowerCase();
    return countries.filter((country) => {
      let { name, region } = country;
      name = name.common.toLowerCase();
      region = region.toLowerCase();
      return name.includes(keyword) || region.includes(keyword);
    });
  },
};

export { formater, getIndex, filters };

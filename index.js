const cities = [
  {
    id: 301,
    name: "New York",
    population: 8398748,
    country: "United States",
  },
  {
    id: 302,
    name: "Paris",
    population: 2140526,
    country: "France",
  },
  {
    id: 303,
    name: "Tokyo",
    population: 13960000,
    country: "Japan",
  },
  {
    id: 304,
    name: "Sydney",
    population: 5230330,
    country: "Australia",
  },
  {
    id: 305,
    name: "Cairo",
    population: 9121515,
    country: "Egypt",
  },
];

function getCityPopulation(city) {
  return city.population;
}

console.log(getCityPopulation(cities[0]));

function isPopulationAboveThreshold(city, threshold) {
  if (threshold >= 8000000) {
    return true;
  } else {
    return false;
  }
}
console.log(isPopulationAboveThreshold(cities[1], 2140526));

function addCity(cities, city) {
  cities.push(city);
  return cities;
}

const newCity = {
  id: 306,
  name: "Kuwait City",
  population: 3354000,
  country: "Kuwait",
};

console.log(addCity(cities, newCity));

function countCitiesInCountry(cities, country) {
  let count = 0;
  cities.forEach((city) => {
    if (city.country == country) {
      count = count + 1;
    }
  });
  return count;
}
console.log(countCitiesInCountry(cities, "France"));

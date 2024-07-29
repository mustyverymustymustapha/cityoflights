const cityMap = {
  "New York City": "San Francisco",
  "London": "Paris",
  "Tokyo": "Seoul",
  "Sydney": "Melbourne",
  "Rome": "Florence",
  "Barcelona": "Madrid",
  "Amsterdam": "Berlin",
  "Dubai": "Abu Dhabi",
  "Singapore": "Hong Kong",
  "Rio de Janeiro": "Buenos Aires"
};

function getSuggestion() {
  const favoriteCity = document.getElementById("favoriteCity").value.trim();
  const resultDiv = document.getElementById("result");

  if (favoriteCity === "") {
      resultDiv.textContent = "Please enter a city name.";
      return;
  }

  const suggestion = cityMap[favoriteCity] || getRandomCity(favoriteCity);
  resultDiv.textContent = `Based on your favorite city (${favoriteCity}), we suggest visiting: ${suggestion}`;
}

function getRandomCity(excludeCity) {
  const cities = Object.values(cityMap);
  const availableCities = cities.filter(city => city !== excludeCity);
  return availableCities[Math.floor(Math.random() * availableCities.length)];
}
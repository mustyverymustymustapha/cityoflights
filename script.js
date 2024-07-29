const cityMap = {
    "New York City": "San Francisco",
    "London": "Edinburgh",
    "Tokyo": "Kyoto",
    "Sydney": "Auckland",
    "Rome": "Venice",
    "Barcelona": "Lisbon",
    "Amsterdam": "Copenhagen",
    "Dubai": "Muscat",
    "Singapore": "Kuala Lumpur",
    "Rio de Janeiro": "Buenos Aires",
    "Paris": "Prague",
    "Berlin": "Vienna",
    "Toronto": "Vancouver",
    "Moscow": "St. Petersburg",
    "Cairo": "Luxor",
    "Istanbul": "Athens",
    "Bangkok": "Hanoi",
    "Mexico City": "Oaxaca",
    "Los Angeles": "Las Vegas",
    "Miami": "Havana",
    "Marrakech": "Casablanca",
    "Cape Town": "Johannesburg",
    "Dublin": "Edinburgh",
    "Stockholm": "Oslo",
    "Helsinki": "Tallinn",
    "Reykjavik": "Bergen",
    "Zurich": "Geneva",
    "Brussels": "Bruges",
    "Budapest": "Krakow",
    "Warsaw": "Gdansk",
    "Belgrade": "Zagreb",
    "Bucharest": "Sofia",
    "Athens": "Santorini",
    "Lisbon": "Porto",
    "Madrid": "Seville",
    "Milan": "Florence",
    "Naples": "Palermo",
    "Munich": "Hamburg",
    "Frankfurt": "Cologne",
    "Beirut": "Amman",
    "Tel Aviv": "Jerusalem",
    "Doha": "Manama",
    "Abu Dhabi": "Sharjah",
    "Muscat": "Salalah",
    "Karachi": "Lahore",
    "Islamabad": "Peshawar", 
    "Delhi": "Mumbai",
    "Jaipur": "Udaipur",
    "Chennai": "Bengaluru",
    "Kolkata": "Varanasi",
    "Kathmandu": "Pokhara",
    "Colombo": "Kandy",
    "Beijing": "Shanghai",
    "Guangzhou": "Shenzhen",
    "Seoul": "Busan",
    "Taipei": "Kaohsiung",
    "Hanoi": "Ho Chi Minh City",
    "Jakarta": "Bali",
    "Manila": "Cebu",
    "Kuala Lumpur": "Penang",
    "Phnom Penh": "Siem Reap",
    "Yangon": "Mandalay",
    "Vientiane": "Luang Prabang",
    "Melbourne": "Brisbane",
    "Perth": "Adelaide",
    "Wellington": "Queenstown",
    "Honolulu": "Maui",
    "Sao Paulo": "Salvador",
    "Lima": "Cusco",
    "Bogota": "Cartagena",
    "Santiago": "Valparaiso",
    "Quito": "Galapagos Islands",
    "Nairobi": "Mombasa",
    "Accra": "Kumasi",
    "Lagos": "Abuja"
};

function getSuggestion() {
  const favoriteCity = document.getElementById("favoriteCity").value.trim();
  const resultDiv = document.getElementById("result");

  if (favoriteCity === "") {
      resultDiv.textContent = "Please enter a city name.";
      return;
  }

  const suggestion = cityMap[favoriteCity] || getRandomCity(favoriteCity);
  resultDiv.textContent = `Based on your favorite city (${favoriteCity}), I suggest visiting: ${suggestion}`;
}

function getRandomCity(excludeCity) {
  const cities = Object.values(cityMap);
  const availableCities = cities.filter(city => city !== excludeCity);
  return availableCities[Math.floor(Math.random() * availableCities.length)];
}
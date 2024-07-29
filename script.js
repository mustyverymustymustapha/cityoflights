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

const countryTourismSites = {
    "United States": "https://www.visittheusa.com/",
    "United Kingdom": "https://www.visitbritain.com/",
    "Japan": "https://www.japan.travel/en/",
    "New Zealand": "https://www.newzealand.com/int/",
    "Italy": "http://www.italia.it/en/home.html",
    "Portugal": "https://www.visitportugal.com/en",
    "Denmark": "https://www.visitdenmark.com/",
    "Oman": "https://www.experienceoman.om/",
    "Malaysia": "https://www.malaysia.travel/",
    "Argentina": "https://www.argentina.travel/en",
    "Czech Republic": "https://www.visitczechrepublic.com/en-US",
    "Austria": "https://www.austria.info/en",
    "Canada": "https://travel.gc.ca/",
    "Russia": "https://tourism.gov.ru/en/",
    "Egypt": "http://www.egypt.travel/",
    "Greece": "http://www.visitgreece.gr/",
    "Vietnam": "https://vietnam.travel/",
    "Mexico": "https://www.visitmexico.com/en/",
    "Cuba": "https://www.cuba.travel/",
    "Morocco": "https://www.visitmorocco.com/en",
    "South Africa": "https://www.southafrica.net/gl/en/",
    "Ireland": "https://www.ireland.com/",
    "Norway": "https://www.visitnorway.com/",
    "Estonia": "https://www.visitestonia.com/en",
    "Iceland": "https://visiticeland.com/",
    "Switzerland": "https://www.myswitzerland.com/en/",
    "Belgium": "https://www.belgium.be/en/about_belgium/tourism",
    "Poland": "https://www.poland.travel/en",
    "Croatia": "https://croatia.hr/en-GB",
    "Bulgaria": "https://bulgariatravel.org/en/",
    "Spain": "https://www.spain.info/en/",
    "Germany": "https://www.germany.travel/en/index.html",
    "Jordan": "https://www.mota.gov.jo/Default/En",
    "Israel": "https://israel.travel/",
    "Bahrain": "https://www.btea.bh/",
    "United Arab Emirates": "https://u.ae/en/information-and-services/visiting-and-exploring-the-uae",
    "Pakistan": "http://www.tourism.gov.pk/",
    "India": "https://www.incredibleindia.org/",
    "Nepal": "https://www.welcomenepal.com/",
    "Sri Lanka": "https://www.srilanka.travel/",
    "China": "https://www.travelchina.gov.cn/en/index/index.shtml",
    "South Korea": "https://english.visitkorea.or.kr/enu/index.kto",
    "Taiwan": "https://eng.taiwan.net.tw/",
    "Indonesia": "https://www.indonesia.travel/gb/en/home",
    "Philippines": "https://philippines.travel/",
    "Cambodia": "https://www.tourismcambodia.com/",
    "Myanmar": "https://tourism.gov.mm/",
    "Laos": "https://www.tourismlaos.org/",
    "Australia": "https://www.australia.com/en",
    "Brazil": "https://www.visitbrasil.com/en/",
    "Peru": "https://www.peru.travel/en",
    "Colombia": "https://colombia.travel/en",
    "Chile": "https://chile.travel/en",
    "Ecuador": "https://ecuador.travel/en/",
    "Kenya": "https://magicalkenya.com/",
    "Ghana": "https://www.ghana.travel/",
    "Nigeria": "https://tourism.gov.ng/"
};

let tourismLinkTimer;

function getSuggestion() {
    const favoriteCity = document.getElementById("favoriteCity").value.trim();
    const resultDiv = document.getElementById("result");
    const tourismLinkDiv = document.getElementById("tourismLink");

    if (favoriteCity === "") {
        resultDiv.textContent = "Please enter a city name.";
        return;
    }

    const suggestion = cityMap[favoriteCity] || getRandomCity(favoriteCity);
    resultDiv.textContent = `Based on your favorite city (${favoriteCity}), I suggest visiting: ${suggestion}`;


    clearTimeout(tourismLinkTimer);
    tourismLinkDiv.innerHTML = "";

    const suggestedCountry = Object.keys(countryTourismSites).find(country => 
        suggestion.toLowerCase().includes(country.toLowerCase()) ||
        Object.keys(cityMap).find(city => city.toLowerCase().includes(country.toLowerCase()) && cityMap[city] === suggestion)
    );

    if (suggestedCountry && countryTourismSites[suggestedCountry]) {
        const link = countryTourismSites[suggestedCountry];
        tourismLinkDiv.innerHTML = `<a href="${link}" target="_blank">Visit ${suggestedCountry}'s official tourism website</a>`;

        
        tourismLinkTimer = setTimeout(() => {
            tourismLinkDiv.innerHTML = "";
        }, 30000);
    }
}

function getRandomCity(excludeCity) {
    const cities = Object.values(cityMap);
    const availableCities = cities.filter(city => city !== excludeCity);
    return availableCities[Math.floor(Math.random() * availableCities.length)];
}


document.getElementById("favoriteCity").addEventListener("input", function() {
    clearTimeout(tourismLinkTimer);
    document.getElementById("tourismLink").innerHTML = "";
});
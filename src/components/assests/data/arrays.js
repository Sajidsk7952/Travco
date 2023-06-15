import backwaters from "../images/backwaters.jpg";
import jaipur from "../images/Jaipur.jpg";
import goa from "../images/Goa.jpg";
import agra from "../images/agra.jpeg";
import kolkata from "../images/kolkata.jpeg";
import munnar from "../images/munnar.jpg";
import mysore from "../images/mysore.jpeg";
import shimla from "../images/shimla.jpeg";
import udaipur from "../images/udaipur.jpg";
import varanasi from "../images/varanasi.jpg";
const IndianPlaces = [
  {
    id: "1",
    name: "Jaipur",
    state: "Rajasthan",
    type: "plan",
    image: jaipur,
    rating: 4.5,
    description:
      "Jaipur, the capital city of Rajasthan, is known for its magnificent palaces, vibrant culture, and historic architecture. Explore the grandeur of the Amber Fort, visit the iconic Hawa Mahal, and indulge in shopping for traditional handicrafts.",
    price: 20000,
    guide: "Rajesh Sharma",
    days: 3,
    tourPlan: [
      "Day 1: Visit Amber Fort and Jaigarh Fort",
      "Day 2: Explore City Palace and Hawa Mahal",
      "Day 3: Shopping in local markets and departure",
    ],
  },
  {
    id: "2",
    name: "Goa",
    state: "Goa",
    type: "plan",
    image: goa,
    rating: 4.7,
    description:
      "Goa is a popular beach destination in India, known for its beautiful sandy beaches, water sports, and vibrant nightlife. Explore the beaches of North Goa and South Goa, visit historic churches, and enjoy the laid-back coastal vibe.",
    price: 25000,
    guide: "Maria D'Souza",
    days: 4,
    tourPlan: [
      "Day 1: Relax on Baga Beach and visit Aguada Fort",
      "Day 2: Explore Old Goa and its churches",
      "Day 3: Visit Palolem Beach and Dudhsagar Falls",
      "Day 4: Enjoy water sports and nightlife in Calangute",
    ],
  },
  {
    id: "3",
    name: "Agra",
    state: "Uttar Pradesh",
    type: "plan",
    image: agra,
    rating: 4.6,
    description:
      "Agra is famous for being the home of the iconic Taj Mahal, one of the Seven Wonders of the World. Visit the Taj Mahal, explore the Agra Fort, and immerse yourself in the rich history and architectural wonders of this city.",
    price: 18000,
    guide: "Sanjay Verma",
    days: 2,
    tourPlan: [
      "Day 1: Visit the Taj Mahal at sunrise and explore Agra Fort",
      "Day 2: Explore Fatehpur Sikri and departure",
    ],
  },
  {
    id: "4",
    name: "Munnar",
    state: "Kerala",
    type: "plan",
    image: munnar,
    rating: 4.5,
    description:
      "Munnar is a breathtaking hill station in Kerala, known for its tea gardens, misty mountains, and serene natural beauty. Explore the lush green landscapes, visit the tea estates, and enjoy the tranquility of this charming destination.",
    price: 22000,
    guide: "Anita Nair",
    days: 3,
    tourPlan: [
      "Day 1: Visit Tea Gardens and Eravikulam National Park",
      "Day 2: Explore Mattupetty Dam and Kundala Lake",
      "Day 3: Relax in the scenic beauty and departure",
    ],
  },
  {
    id: "5",
    name: "Varanasi",
    state: "Uttar Pradesh",
    type: "plan",
    image: varanasi,
    rating: 4.6,
    description:
      "Varanasi, also known as Kashi, is a sacred city on the banks of the Ganges River in Uttar Pradesh. Experience the spiritual essence of this ancient city by attending the Ganga Aarti, visiting temples, and taking a boat ride along the ghats.",
    price: 15000,
    guide: "Amit Singh",
    days: 2,
    tourPlan: [
      "Day 1: Explore temples and attend Ganga Aarti",
      "Day 2: Morning boat ride and departure",
    ],
  },
  {
    id: "6",
    name: "Udaipur",
    state: "Rajasthan",
    type: "plan",
    image: udaipur,
    rating: 4.9,
    description:
      'Udaipur, known as the "City of Lakes," is a picturesque destination in Rajasthan. Admire the stunning Lake Pichola, visit the majestic City Palace, and enjoy a boat ride on the serene waters. Immerse yourself in the royal charm of Udaipur.',
    price: 23000,
    guide: "Rani Singh",
    days: 3,
    tourPlan: [
      "Day 1: Visit City Palace and Jag Mandir",
      "Day 2: Explore Lake Pichola and Saheliyon Ki Bari",
      "Day 3: Visit the Monsoon Palace and departure",
    ],
  },
  {
    id: "7",
    name: "Kolkata",
    state: "West Bengal",
    type: "plan",
    image: kolkata,
    rating: 4.4,
    description:
      "Kolkata, the cultural capital of India, is known for its colonial architecture, vibrant festivals, and delectable cuisine. Visit the iconic Victoria Memorial, explore the bustling markets, and savor the flavors of Bengali street food.",
    price: 18000,
    guide: "Sujata Basu",
    days: 3,
    tourPlan: [
      "Day 1: Explore Victoria Memorial and Howrah Bridge",
      "Day 2: Visit Dakshineswar Kali Temple and Belur Math",
      "Day 3: Experience street food in Park Street and departure",
    ],
  },
  {
    id: "8",
    name: "Mysore",
    state: "Karnataka",
    type: "plan",
    image: mysore,
    rating: 4.5,
    description:
      "Mysore, known for its rich heritage and grandeur, is famous for the magnificent Mysore Palace and vibrant Dasara festival. Explore the royal palace, visit Chamundi Hills, and indulge in the local arts and crafts of this cultural city.",
    price: 21000,
    guide: "Ravi Kumar",
    days: 3,
    tourPlan: [
      "Day 1: Visit Mysore Palace and Brindavan Gardens",
      "Day 2: Explore Chamundi Hills and St. Philomena's Cathedral",
      "Day 3: Explore local markets and departure",
    ],
  },
  {
    id: "9",
    name: "Kerala Backwaters",
    state: "Kerala",
    type: "plan",
    image: backwaters,
    rating: 4.7,
    description:
      "The Kerala Backwaters offer a unique experience of cruising through the tranquil canals, lagoons, and lakes surrounded by lush greenery. Enjoy a houseboat stay, relish authentic Kerala cuisine, and witness the beauty of this enchanting waterway.",
    price: 28000,
    guide: "Deepa Nambiar",
    days: 3,
    tourPlan: [
      "Day 1: Embark on a houseboat and cruise through backwaters",
      "Day 2: Explore local villages and enjoy cultural performances",
      "Day 3: Enjoy fishing, bird watching, and departure",
    ],
  },
  {
    id: "10",
    name: "Shimla",
    state: "Himachal Pradesh",
    type: "plan",
    image: shimla,
    rating: 4.6,
    description:
      "Shimla, the capital city of Himachal Pradesh, is a popular hill station in northern India. Enjoy the pleasant climate, visit the Mall Road, explore colonial architecture, and take a toy train ride on the UNESCO-listed Kalka-Shimla Railway.",
    price: 19000,
    guide: "Rajat Kapoor",
    days: 4,
    tourPlan: [
      "Day 1: Explore Mall Road and Christ Church",
      "Day 2: Visit Jakhu Temple and Shimla Ridge",
      "Day 3: Take a toy train ride and visit Kufri",
      "Day 4: Explore local markets and departure",
    ],
  },
  // Rest of the Indian places...
];
export default IndianPlaces;

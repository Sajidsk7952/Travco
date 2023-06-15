import family from "../images/family.jpg";
import couple from "../images/couples.jpg";
import friends from "../images/friends.jpg";
import maldivespack from "../images/maldivespack.jpg";
import cultural from "../images/cultural.jpg";
import adventures from "../images/adventures.jpg";
// import europepack from "../images/europepack.jpg";
// import swissalphs from "../images/swissaplhs.jpg";
import couple1 from '../images/couple-1.jpg';
import couple2 from '../images/couple-2.jpg';
import couple3 from '../images/couple-3.jpg';
import adven1 from '../images/adven-1.jpg';
import adven2 from '../images/adven-2.jpg';
import adven3 from '../images/adven-3.jpg';
import get1 from '../images/get-1.jpg';
import get2 from '../images/get-2.jpg';
import get3 from '../images/get-3.jpg';
import mal1 from '../images/mal-1.jpeg';
import mal2 from '../images/mal-2.jpg'
import mal3 from '../images/mal-3.jpg';
import ind1 from '../images/ind-1.jpg';
import ind2 from '../images/ind-2.jpg';
import ind3 from '../images/ind-3.jpg';
import can1 from '../images/can-1.jpg';
import can2 from '../images/can-2.jpg';
import can3 from '../images/can-3.jpg';
const TourPackages = [
  {
    id: "31",
    name: "Romantic Getaway",
    type: "pack",
    image: couple,
    pictures: [couple1,couple2,couple3],
    description:
      "Escape with your loved one and enjoy a romantic getaway in a beautiful destination. Perfect for couples looking to celebrate special occasions or simply spend quality time together.",
    state: "Maldives",
    placesCovered: ["Maldives", "Santorini", "Bora Bora"],
    duration: 7,
    price: 150000,
    rating: '4.7',
    inclusions: ["Accommodation", "Meals", "Activities", "Transportation"],
    tourPlan: [
      "Day 1: Arrive in Maldives and check-in to the romantic beachfront resort.",
      "Day 2: Indulge in a relaxing couples spa session and enjoy a candlelit dinner by the beach.",
      "Day 3: Take a private boat tour to explore the nearby islands and enjoy snorkeling or scuba diving.",
      "Day 4: Experience a sunset cruise and enjoy a romantic dinner on board.",
      "Day 5: Spend the day at leisure, lounging on the pristine beaches or exploring the local markets.",
      "Day 6: Enjoy a private yacht excursion and visit secluded islands for a romantic picnic.",
      "Day 7: Depart from Maldives with beautiful memories of the romantic getaway.",
    ],
    guide: 'mark williams',
  },
  {
    id: "32",
    name: "Family Fun Adventure",
    type: "pack",
    image: family,
    pictures: [adven1,adven2,adven3],
    description:
      "Embark on a thrilling adventure with your family and create unforgettable memories. Explore exciting destinations, engage in family-friendly activities, and bond with your loved ones.",
    state: "Phuket",
    placesCovered: ["Phuket", "Maui", "Fiji"],
    duration: 10,
    price: 200000,
    rating: '4.8',
    inclusions: [
      "Accommodation",
      "Meals",
      "Activities",
      "Transportation",
      "Family-friendly guides",
    ],
    tourPlan: [
      "Day 1: Arrive in Phuket and check-in to the family-friendly resort.",
      "Day 2: Visit the local attractions and landmarks with a knowledgeable guide.",
      "Day 3: Engage in water sports activities such as snorkeling, kayaking, or paddleboarding.",
      "Day 4: Explore the natural wonders of Phuket with a guided hiking or nature tour.",
      "Day 5: Enjoy a family beach day with beach games and a beachfront BBQ.",
      "Day 6: Visit a local cultural village and participate in traditional activities and performances.",
      "Day 7: Embark on a scenic boat tour to explore nearby islands and encounter marine life.",
      "Day 8: Relax and enjoy the resort facilities or opt for optional activities for the family.",
      "Day 9: Take part in a cooking class to learn the local cuisine and enjoy a family dinner.",
      "Day 10: Depart from Phuket with cherished memories of the family adventure.",
    ],
    guide: 'tom hardy',
  },
  {
    id: "33",
    name: "Friends' Get-together",
    type: "pack",
    image: friends,
    pictures:[get1,get2,get3],
    description:
      "Gather your friends and embark on an epic adventure together. From party destinations to outdoor activities, this tour package is designed to create amazing memories with your friends.",
    state: "Ibiza",
    placesCovered: ["Ibiza", "Galapagos Islands", "Zanzibar"],
    duration: 8,
    price: 180000,
    rating: '4.6',
    inclusions: [
      "Accommodation",
      "Meals",
      "Activities",
      "Transportation",
      "Local guides",
    ],
    tourPlan: [
      "Day 1: Arrive in Ibiza and check-in to the vibrant and centrally located accommodation.",
      "Day 2: Explore the local attractions, markets, and vibrant nightlife with your friends.",
      "Day 3: Join a thrilling adventure activity such as bungee jumping, zip-lining, or ATV riding.",
      "Day 4: Take a boat tour to nearby islands, enjoy water sports, and have a beach party.",
      "Day 5: Relax on the stunning beaches, go snorkeling, or simply soak up the sun.",
      "Day 6: Explore the local culture and visit historical sites or take a street food tour.",
      "Day 7: Join a pub crawl or visit famous clubs for a night of partying and dancing.",
      "Day 8: Depart from Ibiza with unforgettable memories of the friends' get-together.",
    ],
    guide: 'zan hiddleston'
  },
];
const travelPackages = [
  {
    id: "34",
    name: "Tropical Paradise Getaway",
    state: "Maldives",
    type: "pack",
    image: maldivespack,
    pictures:[mal1,mal2,mal3],
    duration: "7 days",
    price: "1,87,500",
    rating: 4.8,
    description:
      "Escape to the breathtaking Maldives and indulge in a week-long tropical paradise retreat. Enjoy pristine beaches, luxurious accommodations, and rejuvenating spa treatments.",
    tourPlan: [
      "Day 1: Arrival and check-in at the resort",
      "Day 2: Relax on the beach and enjoy water sports",
      "Day 3: Scuba diving or snorkeling excursion",
      "Day 4: Spa day and beachside relaxation",
      "Day 5: Island hopping tour and sunset cruise",
      "Day 6: Watersports activities and beachfront dining",
      "Day 7: Departure from the Maldives",
    ],
    placesCovered: [
      "Male",
      "North Male Atoll",
      "South Male Atoll",
      "Ari Atoll",
      "Baa Atoll",
      "Vaavu Atoll",
      "Lhaviyani Atoll",
    ],
    guide: "Rahul Sharma",
  },
  {
    id: "35",
    name: "Cultural Exploration",
    state: "India",
    type: "pack",
    image: cultural,
    pictures:[ind1,ind2,ind3],
    duration: "14 days",
    price: "2,85,000",
    rating: 4.5,
    description:
      "Immerse yourself in the rich culture and heritage of India. Visit iconic landmarks such as the Taj Mahal, explore vibrant markets, savor delicious cuisine, and witness traditional festivals.",
    tourPlan: [
      "Day 1: Arrival in Delhi and visit to historical sites",
      "Day 2: Explore the markets of Old Delhi",
      "Day 3: Visit the Taj Mahal in Agra",
      "Day 4-5: Discover the pink city of Jaipur",
      "Day 6-7: Experience the spirituality of Varanasi",
      "Day 8-10: Explore the beautiful landscapes of Kerala",
      "Day 11-14: Relax on the beaches of Goa",
    ],
    placesCovered: ["Delhi", "Agra", "Jaipur", "Varanasi", "Kerala", "Goa"],
    guide: "Priya Patel",
  },
  {
    id: "36",
    name: "Adventure in the Wilderness",
    state: "Canada",
    type: "pack",
    image: adventures,
    pictures:[can1,can2,can3],
    duration: "10 days",
    price: "3,15,000",
    rating: 4.7,
    description:
      "Embark on an exhilarating adventure through the stunning Canadian wilderness. Experience thrilling activities like hiking, kayaking, and wildlife spotting in picturesque national parks.",
    tourPlan: [
      "Day 1: Arrival in Vancouver and orientation",
      "Day 2: Hiking in the Canadian Rockies",
      "Day 3: Canoeing in Banff National Park",
      "Day 4: Wildlife watching in Jasper National Park",
      "Day 5: Explore the beauty of Whistler",
      "Day 6: Rafting on the Kicking Horse River",
      "Day 7: Discover the coastal rainforests of Vancouver Island",
      "Day 8-9: Whale watching and kayaking in Tofino",
      "Day 10: Departure from Vancouver",
    ],
    placesCovered: [
      "Vancouver",
      "Canadian Rockies",
      "Banff National Park",
      "Jasper National Park",
      "Whistler",
      "Kicking Horse River",
      "Vancouver Island",
      "Tofino",
    ],
    guide: "Michael Thompson",
  },
  // {
  //   id: "37",
  //   name: "Historical European Tour",
  //   state: "Europe",
  //   type: "pack",
  //   image: europepack,
  //   duration: "21 days",
  //   price: "4,87,500",
  //   rating: 4.9,
  //   description:
  //     "Discover the historical wonders of Europe on this comprehensive tour. Visit iconic landmarks in cities like Rome, Paris, and London while immersing yourself in Europe's rich history.",
  //   tourPlan: [
  //     "Day 1: Arrival in Rome and city tour",
  //     "Day 2-4: Explore the historical sites of Athens",
  //     "Day 5-8: Discover the beauty of Santorini and Mykonos",
  //     "Day 9-11: Visit the iconic landmarks of Rome",
  //     "Day 12-14: Explore the artistic treasures of Florence",
  //     "Day 15-17: Experience the romance of Venice",
  //     "Day 18-20: Discover the cosmopolitan city of Paris",
  //     "Day 21: Departure from London",
  //   ],
  //   placesCovered: [
  //     "Rome",
  //     "Athens",
  //     "Santorini",
  //     "Mykonos",
  //     "Florence",
  //     "Venice",
  //     "Paris",
  //     "London",
  //   ],
  //   guide: "Sophie Anderson",
  // },
  // {
  //   id: "38",
  //   name: "Serenity in the Swiss Alps",
  //   state: "Switzerland",
  //   type: "pack",
  //   image: swissalphs,
  //   duration: "5 days",
  //   price: "1,50,000",
  //   rating: 4.6,
  //   description:
  //     "Unwind in the picturesque Swiss Alps and enjoy the tranquility of nature. Explore charming alpine villages, take scenic train rides, and breathe in the fresh mountain air.",
  //   tourPlan: [
  //     "Day 1: Arrival in Zurich and transfer to the Swiss Alps",
  //     "Day 2: Explore the charming town of Lucerne",
  //     "Day 3: Take a scenic train ride to Interlaken",
  //     "Day 4: Visit the famous Jungfraujoch and enjoy panoramic views",
  //     "Day 5: Departure from Zurich",
  //   ],
  //   placesCovered: ["Zurich", "Lucerne", "Interlaken", "Jungfraujoch"],
  //   guide: "Mark Müller",
  // },
];
export { travelPackages };
export default TourPackages;
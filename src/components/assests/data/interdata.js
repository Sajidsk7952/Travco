import paris from '../images/paris.jpg';
import tokyo from '../images/tokyo.jpg';
import newyork from '../images/newyork.jpg';
import cario from '../images/egypt.jpg';
import barcelona from '../images/barcelona.jpg';
import sydney from '../images/sydney.jpg';
import rio from '../images/brazil.jpg';
import capetown from '../images/capetown.jpeg';
import bali from '../images/bali.jpeg';
import machupiccu from '../images/machupicu.jpg';
const InternationalPlaces = [
  {
    id: '21',
    name: "Paris",
    state: "France",
    type: "plan",
    image: paris,
    rating: 4.9,
    description:
      "Paris, the capital city of France, is known for its romantic ambiance, iconic landmarks, and artistic heritage. Explore the Eiffel Tower, visit the Louvre Museum, and indulge in French cuisine and shopping along the Champs-Élysées.",
    price: 50000,
    guide: "Claire Dubois",
    days: 5,
    tourPlan: [
      "Day 1: Visit the Eiffel Tower and take a boat cruise on the Seine River",
      "Day 2: Explore the Louvre Museum and stroll through the Montmartre district",
      "Day 3: Discover the Palace of Versailles and enjoy a French wine tasting",
      "Day 4: Visit Notre-Dame Cathedral and explore the Latin Quarter",
      "Day 5: Relax in the Luxembourg Gardens and departure",
    ],
  },
  {
    id: '22',
    name: "Tokyo",
    state: "Japan",
    type: "plan",
    image: tokyo,
    rating: 4.7,
    description:
      "Tokyo, the capital city of Japan, is a bustling metropolis with a unique blend of traditional culture and modern innovation. Explore the vibrant neighborhoods, visit historic temples, indulge in Japanese cuisine, and experience the tech-forward atmosphere.",
    price: 55000,
    guide: "Kenji Nakamura",
    days: 6,
    tourPlan: [
      "Day 1: Visit the Meiji Shrine and explore Harajuku district",
      "Day 2: Explore the historic Asakusa area and Senso-ji Temple",
      "Day 3: Discover the Tsukiji Fish Market and Ginza shopping district",
      "Day 4: Visit the Tokyo Skytree and Ueno Park",
      "Day 5: Explore the Odaiba area and enjoy a traditional tea ceremony",
      "Day 6: Visit the Imperial Palace and departure",
    ],
  },
  {
    id: '23',
    name: "New York City",
    state: "United States",
    type: "plan",
    image: newyork,
    rating: 4.6,
    description:
      'New York City, also known as the "Big Apple," is a vibrant and diverse city with iconic landmarks, world-class museums, and a thriving cultural scene. Explore Times Square, visit the Statue of Liberty, and immerse yourself in the bustling energy of the city.',
    price: 60000,
    guide: "Emily Johnson",
    days: 7,
    tourPlan: [
      "Day 1: Visit Times Square and take a stroll through Central Park",
      "Day 2: Explore the Statue of Liberty and Ellis Island",
      "Day 3: Visit the Metropolitan Museum of Art and explore Chelsea Market",
      "Day 4: Discover the High Line and explore the trendy neighborhoods of SoHo and Greenwich Village",
      "Day 5: Visit the 9/11 Memorial and One World Trade Center",
      "Day 6: Explore the Museum of Modern Art and enjoy a Broadway show",
      "Day 7: Explore Brooklyn and departure",
    ],
  },
  {
    id: '24',
    name: "Cairo",
    state: "Egypt",
    type: "plan",
    image: cario,
    rating: 4.5,
    description:
      "Cairo, the capital city of Egypt, is a vibrant and historic city with ancient wonders and rich cultural heritage. Explore the Great Pyramids of Giza, visit the Egyptian Museum, and cruise along the Nile River to experience the essence of Egypt.",
    price: 45000,
    guide: "Mohamed Ali",
    days: 5,
    tourPlan: [
      "Day 1: Visit the Great Pyramids of Giza and the Sphinx",
      "Day 2: Explore the Egyptian Museum and Old Cairo",
      "Day 3: Visit the Citadel of Saladin and the Mosque of Muhammad Ali",
      "Day 4: Take a cruise on the Nile River and visit the Luxor Temple",
      "Day 5: Explore the Valley of the Kings and departure",
    ],
  },
  {
    id: '25',
    name: "Barcelona",
    state: "Spain",
    type: "plan",
    image: barcelona,
    rating: 4.7,
    description:
      "Barcelona is a vibrant city on the northeastern coast of Spain, known for its unique architecture, artistic treasures, and lively atmosphere. Explore the works of Antoni Gaudí, visit the Gothic Quarter, and enjoy the vibrant beach culture.",
    price: 52000,
    guide: "Carlos Martinez",
    days: 5,
    tourPlan: [
      "Day 1: Visit the Sagrada Familia and Park Güell",
      "Day 2: Explore the Gothic Quarter and La Rambla",
      "Day 3: Visit the Picasso Museum and enjoy the beach at Barceloneta",
      "Day 4: Explore the Montjuïc Hill and enjoy the Magic Fountain show",
      "Day 5: Visit the Camp Nou stadium and departure",
    ],
  },
  {
    id: '26',
    name: "Sydney",
    state: "Australia",
    type: "plan",
    image: sydney,
    rating: 4.8,
    description:
      "Sydney, the largest city in Australia, is famous for its stunning harbor, iconic Opera House, and beautiful beaches. Explore the Sydney Harbour Bridge, visit the Royal Botanic Garden, and immerse yourself in the lively atmosphere of the city.",
    price: 58000,
    guide: "Olivia Johnson",
    days: 6,
    tourPlan: [
      "Day 1: Explore the Sydney Opera House and Circular Quay",
      "Day 2: Visit the Sydney Harbour Bridge and The Rocks district",
      "Day 3: Explore Darling Harbour and visit SEA LIFE Sydney Aquarium",
      "Day 4: Visit the Royal Botanic Garden and take a ferry to Manly Beach",
      "Day 5: Explore Bondi Beach and the coastal walk",
      "Day 6: Visit the Blue Mountains and departure",
    ],
  },
  {
    id: '27',
    name: "Rio de Janeiro",
    state: "Brazil",
    type: "plan",
    image: rio,
    rating: 4.6,
    description:
      "Rio de Janeiro, located in Brazil, is known for its stunning beaches, vibrant festivals, and iconic landmarks. Explore the Christ the Redeemer statue, visit the Copacabana and Ipanema beaches, and experience the samba-infused nightlife.",
    price: 52000,
    guide: "Luiz Silva",
    days: 5,
    tourPlan: [
      "Day 1: Visit the Christ the Redeemer statue and Sugarloaf Mountain",
      "Day 2: Explore Copacabana Beach and take a stroll on the Ipanema boardwalk",
      "Day 3: Discover the historic neighborhood of Santa Teresa and Escadaria Selarón",
      "Day 4: Relax on the beaches of Leblon and Barra da Tijuca",
      "Day 5: Visit the Tijuca Forest and departure",
    ],
  },
  {
    id: '28',
    name: "Cape Town",
    state: "South Africa",
    type: "plan",
    image: capetown,
    rating: 4.7,
    description:
      "Cape Town, located in South Africa, is a vibrant city with stunning natural landscapes, diverse culture, and rich history. Explore Table Mountain, visit Robben Island, and experience the vibrant food and wine scene of the city.",
    price: 51000,
    guide: "Lerato Mbeki",
    days: 6,
    tourPlan: [
      "Day 1: Visit Table Mountain and explore the Victoria & Alfred Waterfront",
      "Day 2: Take a trip to Robben Island and visit the District Six Museum",
      "Day 3: Explore the Kirstenbosch National Botanical Garden and enjoy a wine tasting in Stellenbosch",
      "Day 4: Visit the Cape of Good Hope and Boulders Beach",
      "Day 5: Discover the Bo-Kaap neighborhood and explore the city center",
      "Day 6: Visit the Constantia Wine Route and departure",
    ],
  },
  {
    id: '29',
    name: "Bali",
    state: "Indonesia",
    type: "plan",
    image: bali,
    rating: 4.6,
    description:
      "Bali, located in Indonesia, is a tropical paradise known for its beautiful beaches, lush landscapes, and rich cultural heritage. Visit ancient temples, enjoy water sports, experience Balinese rituals, and relax in luxurious resorts.",
    price: 57000,
    guide: "Made Sumitra",
    days: 6,
    tourPlan: [
      "Day 1: Visit Tanah Lot Temple and enjoy a Balinese dance performance",
      "Day 2: Explore Ubud and visit the Monkey Forest and Tegalalang Rice Terraces",
      "Day 3: Relax on the beaches of Nusa Dua and enjoy water sports",
      "Day 4: Discover the traditional village of Penglipuran and the Tirta Empul Temple",
      "Day 5: Visit the Uluwatu Temple and enjoy a sunset Kecak dance",
      "Day 6: Enjoy a spa day and departure",
    ],
  },
  {
    id: '30',
    name: "Machu Picchu",
    state: "Peru",
    type: "plan",
    image: machupiccu,
    rating: 4.8,
    description:
      "Machu Picchu, located in Peru, is an ancient Incan city nestled in the Andes Mountains. Explore the breathtaking ruins, hike the Inca Trail, and immerse yourself in the mystical ambiance of this UNESCO World Heritage Site.",
    price: 54000,
    guide: "Alejandro Morales",
    days: 5,
    tourPlan: [
      "Day 1: Arrive in Cusco and acclimate to the altitude",
      "Day 2: Begin the Inca Trail trek and reach Wayllabamba Camp",
      "Day 3: Continue the trek and reach the stunning Dead Woman's Pass",
      "Day 4: Explore the ruins of Wiñay Wayna and reach Machu Picchu",
      "Day 5: Explore Machu Picchu and departure",
    ],
  },
  // Rest of the international places...
];
export default InternationalPlaces;
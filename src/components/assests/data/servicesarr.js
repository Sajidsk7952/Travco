import { GiCommercialAirplane } from "react-icons/gi";
import { RiHotelLine } from "react-icons/ri";
import { BsCarFront } from "react-icons/bs";
import { RiRoadMapLine } from "react-icons/ri";
import { AiOutlineInsurance } from "react-icons/ai";
import { RiVisaLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { AiOutlineCompass } from "react-icons/ai";
import { MdOutlineGroups2 } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
const ServicesOffered = [
    {
      id:'1',
      title: 'Flight Bookings',
      icon:< GiCommercialAirplane />,
      description: 'Search, compare, and book flights to your desired destinations. Find the best deals and choose from a wide range of airlines.'
    },
    {
      id:'2',
      title: 'Hotel Reservations',
      icon: <RiHotelLine />,
      description: 'Book accommodations for your trips. Choose from a vast selection of hotels, resorts, and other types of accommodations worldwide.'
    },
    {
      id:'3',
      title: 'Car Rentals',
      icon: <BsCarFront />,
      description: 'Rent a car for your transportation needs during your trip. Choose from various car options and rental durations.'
    },
    {
      id:'4',
      title: 'Tour Packages',
      icon: <RiRoadMapLine />,
      description: 'Enjoy curated tour packages covering popular destinations and attractions. Hassle-free travel with activities, accommodations, and transportation included.'
    },
    {
      id:'5',
      title: 'Travel Insurance',
      icon:<AiOutlineInsurance />,
      description: 'Protect yourself against unforeseen circumstances during your trip. Get coverage for trip cancellations, medical emergencies, and lost luggage.'
    },
    {
      id:'7',
      title: 'Visa Assistance',
      icon:<RiVisaLine />,
      description: 'Obtain assistance in the visa application process. Get guidance and support for obtaining travel permits for destinations requiring a visa.'
    },
    {
      id:'6',
      title: '24/7 Customer Support',
      icon:< BiSupport/>,
      description: 'Get round-the-clock customer support for any inquiries, issues, or emergencies during your travel. Available via phone, email, or live chat.'
    },
    {
      id:'8',
      title: 'Destination Guides and Recommendations',
      icon:<AiOutlineCompass />,
      description: 'Access valuable destination guides and recommendations. Discover popular attractions, local culture, cuisine, and travel tips for a memorable trip.'
    },
    {
      id:'9',
      title: 'Group Travel and Events',
      icon: < MdOutlineGroups2 />,
      description: 'Organize group travel and events. Tailored services for corporate groups, schools, or organizations, including accommodations, transportation, and logistics.'
    },
    {
      id:'10',
      title: 'Travel Rewards and Loyalty Programs',
      icon: <BsWallet2 />,
      description: 'Earn points, discounts, and exclusive benefits. Take advantage of travel rewards and loyalty programs for frequent travelers.'
    }
  ];
export default ServicesOffered;  
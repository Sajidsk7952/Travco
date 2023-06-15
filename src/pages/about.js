import ImageSlider from "../components/about/imageSlider";
import classes from "./about.module.css";
import resort from "../components/assests/images/resort.jpeg";
import history from "../components/assests/images/history.jpg";
import Team from "../components/about/team";
import TravcoTeam from "../components/assests/data/team";
const AboutPage = () => {
  return (
    <div className={classes.aboutpage}>
      <ImageSlider />
      <div className={classes.section}>
        <div className={classes.info}>
          <h1>OVERVIEW</h1>
          <p className={classes.overviewText}>
            Welcome to Travco, your premier online travel agency! Discover the
            world with confidence and convenience through our exceptional travel
            services. With years of experience and a passion for creating
            unforgettable journeys, Travco is dedicated to providing you with
            personalized travel experiences tailored to your desires. From
            breathtaking destinations to seamless booking processes, we strive
            to make your travel dreams a reality.
          </p>
          <p className={classes.extraText}>
            Our team of travel experts is committed to delivering top-notch
            customer service, ensuring that every step of your journey is
            hassle-free. Whether you're seeking a relaxing beach getaway, an
            adventurous expedition, or a cultural exploration, Travco has you
            covered. We take pride in our extensive network of trusted partners,
            ensuring that you have access to the best flights, accommodations,
            and activities
          </p>
        </div>
        <img src={resort} alt="resort" />
      </div>
      <div className={classes.Historysection}>
        <img src={history} alt="history" />
        <div className={classes.historyinfo}>
          <h1>history</h1>
          <p>
            Travco, the offline travel agency, was founded 5 years ago with the
            vision of providing exceptional travel experiences to customers.
            Since then, Travco has grown to become a trusted name in the travel
            industry, offering customized tour plans and personalized service to
            travelers. With a focus on attention to detail and creating
            unforgettable memories,
          </p>
          <p>
            Travco's commitment to providing exceptional travel experiences has
            paid off, as evidenced by a 40% increase in the number of travelers
            choosing their tour plans. This growth is a testament to the quality
            of service and attention to detail that Travco provides, and the
            trust that customers have in the agency to create memorable
            vacations.
          </p>
        </div>
      </div>
      <div className={classes.Teams}>
        <h1>our team</h1>
        <div className={classes.teamList}>
          {TravcoTeam.map((team) => (
            <Team data={team} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
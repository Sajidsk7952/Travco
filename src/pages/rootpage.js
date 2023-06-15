import IndianPlaces from "../components/assests/data/arrays";
import InternationalPlaces from "../components/assests/data/interdata";
import Islands from "../components/assests/data/ilands";
import classes from "./rootpage.module.css";
import TopPlan from "../components/plan/TopPlan";
import OtherPlan from "../components/plan/otherplan";
import { travelPackages } from "../components/assests/data/packages";
import Package from "../components/plan/package";
import intro from "../components/assests/images/inro.jpg";
const allplans = [...IndianPlaces, ...InternationalPlaces, ...Islands];
const Topplan = allplans.filter((plan) => plan.rating > 4.7);
const otherplan = allplans.filter((plan) => plan.rating <= 4.7);
const Rootplans = () => {
  return (
    <div className={classes.planPage}>
      <div
        style={{
          background: `url(${intro})`,
          width: "100%",
          height: "400px",
          objectFit: "cover",
          objectPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={classes.intro}>
          <p>
            At Travco, we believe that travel is about creating unforgettable
            memories and experiences that last a lifetime. That's why we go
            above and beyond to ensure that every detail is taken care of, so
            our customers can relax and enjoy their journey.
          </p>
          <p>
            At Travco, we understand that every traveler has unique needs and
            preferences. That's why we take great care in developing our tour
            plans, ensuring that each itinerary is tailored to meet the specific
            requirements of our customers. Our team of experienced travel
            experts works closely with each client to understand their
            interests, budget, and travel style, in order to create a customized
            tour plan that exceeds their expectations.
          </p>
        </div>
      </div>
      <div className={classes.primaryPlans}>
        <h1 className={classes.title}>
          Top Picks for Unforgettable Travel Experiences
        </h1>
        <div className={classes.planslist}>
          {Topplan.map((plan) => (
            <TopPlan data={plan} />
          ))}
        </div>
      </div>
      <div className={classes.secondaryPlans}>
        <h1 className={classes.title}>
          Find Your Perfect Itinerary with Travco
        </h1>
        <div className={classes.planslist}>
          {otherplan.map((plan) => (
            <OtherPlan data={plan} />
          ))}
        </div>
      </div>
      <div className={classes.packages}>
        <h1>Discover the World with Travco's Exquisite Travel Packages</h1>
        <div className={classes.planslist}>
          {travelPackages.map((pack) => (
            <Package data={pack} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Rootplans;

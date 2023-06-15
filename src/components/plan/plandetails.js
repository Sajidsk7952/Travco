import IndianPlaces from "../assests/data/arrays";
import InternationalPlaces from "../assests/data/interdata";
import Islands from "../assests/data/ilands";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./plandetails.module.css";
import { TbArrowBackUp } from "react-icons/tb";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { useEffect } from "react";
const PlanDetails = () => {
  // console.log(TRAVCOPLACES);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const params = useParams();
  const navigate = useNavigate();
  const ID = params.planId;
  const CombinedPlans = [...IndianPlaces, ...InternationalPlaces, ...Islands];
  const planItem = CombinedPlans.find((place) => place.id === ID);
  const Backhandler = () => {
    navigate("../plan");
  };
  return (
    <div className={classes.details}>
      <div>
        <button onClick={Backhandler} className={classes.but}>
          <TbArrowBackUp />
          Back
        </button>
      </div>
      <div className={classes.container}>
        <h1>hey, traveller here are the details of {planItem.name}</h1>
        <div className={classes.imgbox}>
          <img src={planItem.image} alt={planItem.name}></img>
        </div>

        <div className={classes.content}>
          {/* <h2>{planItem.name}</h2> */}
          <h3>
            <span>located in </span>
            {planItem.state}
          </h3>
          <p className={classes.desc}>{planItem.description}</p>
          <h4>
            <AiOutlineStar />
            {planItem.rating}
            <span> rated by most of travellers</span>
          </h4>
          <p className={classes.duration}>
            Tour duration: {planItem.days} days
          </p>
          <div className={classes.plan}>
            {planItem.tourPlan.map((day) => (
              <p>{day}</p>
            ))}
          </div>
          <p className={classes.price}>
            the price of this plan is:
            <BsCurrencyRupee />
            {planItem.price}
            <span className={classes.perperson}>per person</span>
          </p>
          <div className={classes.inclusions}>
            <h4>
              By including the following amenities and inclusions in our tour
              packages, we aim to provide our customers with an unforgettable
              travel experience that exceeds their expectations.
            </h4>
            <p>
              <span>Accommodation</span>: We carefully select hotels and resorts
              that meet our high standards of quality and comfort, and include
              them in our tour packages at competitive rates.
            </p>
            <p>
              <span>Transportation</span>: Depending on the tour package, we may
              include flights, transfers, or rental cars to help you get around
              and make the most of your time at the destination.
            </p>
            <p>
              <span>Meals</span>: Depending on the tour package, we may include
              breakfast, lunch, and/or dinner at top-rated restaurants and local
              eateries.
            </p>
            <p>
              <span>Entrance fees</span>: We include entrance fees to popular
              attractions and landmarks, so you can skip the lines and make the
              most of your time at the destination.
            </p>
            <p>
              <span>Guided tours</span>: We offer a range of guided tours and
              excursions to help you explore the destination and learn about its
              history, culture, and natural wonders.
              <h5>
                the guide for {planItem.name} plan is {planItem.guide}
              </h5>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlanDetails;
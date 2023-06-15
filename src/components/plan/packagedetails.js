import { travelPackages } from "../assests/data/packages";
import TourPackages from "../assests/data/packages";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import classes from './plandetails.module.css';
const PackageDetails = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const params = useParams();
  const navigate = useNavigate();
  const ID = params.planId;
  const combinedPackages = [...TourPackages, ...travelPackages];
  let planItem = combinedPackages.find((place) => place.id === ID);
  const [currimg, setcurrimg] = useState(planItem.pictures[0]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currimg === planItem.pictures[2]) {
        setcurrimg(planItem.pictures[0]);
      }
      if (currimg === planItem.pictures[0]) {
        setcurrimg(planItem.pictures[1]);
      }
      if (currimg === planItem.pictures[1]) {
        setcurrimg(planItem.pictures[2]);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [currimg, planItem.pictures]);
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
        <h1 className={classes.packhead}>{planItem.name}</h1>
        <div className={classes.imgbox}>
          {/* <AiOutlineArrowLeft className={classes.icon}/> */}
          <img src={currimg} alt={planItem.name}></img>
          {/* <AiOutlineArrowRight className={classes.icon} /> */}
        </div>
        <div className={classes.content}>
          <h2>{planItem.state}</h2>
          <p className={classes.places}>
            the places covered in this package are:
            {planItem.placesCovered.map((loc) => (
              <span className={classes.loc}> {loc},</span>
            ))}
          </p>
          <p className={classes.desc}>{planItem.description}</p>
          <h4 className={classes.rating}>
            <AiOutlineStar />
            {planItem.rating}
            <span> rated by most of travellers</span>
          </h4>
          <p className={classes.duration}>
            Package duration: {planItem.duration}
          </p>
          <div className={classes.plan}>
            {planItem.tourPlan.map((day) => (
              <h4>{day}</h4>
            ))}
          </div>
          <p className={classes.price}>
            the price of this package is <BsCurrencyRupee />
            {planItem.price}{" "}
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
                the guide for '{planItem.name}' package is '{planItem.guide}'
              </h5>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PackageDetails;
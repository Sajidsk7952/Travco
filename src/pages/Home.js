// import { Fragment } from "react";
import classes from "./home.module.css";
import VideoBack from "../components/home/Video";
import Plans from "./plans";
import TourPackages from "../components/assests/data/packages";
import Packages from "../components/home/package";
import ServicesOffered from "../components/assests/data/servicesarr";
import Service from "../components/about/services";
const HomePage = () => {
  const services = ServicesOffered.filter((s) => s.id < 7);
  return (
    <div className={classes.container}>
      <VideoBack />
      <div className={classes.packageContainer}>
        <h1>Our latest packages are</h1>
        <div className={classes.packages}>
          {TourPackages.map((pack) => (
            <Packages data={pack} />
          ))}
        </div>
      </div>
      <div className={classes.serviceContainer}>
        <h1>Why choose us</h1>
        <div className={classes.services}>
          {services.map((service) => (
            <Service data={service} />
          ))}
        </div>
      </div>
      <Plans />
    </div>
  );
};
export default HomePage;

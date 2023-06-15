import s1 from "../assests/images/slide-1.jpg";
import s2 from "../assests/images/slide-2.jpg";
import s3 from "../assests/images/slide-3.jpg";
import s4 from "../assests/images/slide-4.jpg";
import { useEffect, useState } from "react";
import classes from "./imageSlider.module.css";
let Images = [s1, s2, s3, s4];
const ImageSlider = () => {
  const [currimg, setimg] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currimg === 3) {
        setimg(0);
      } else {
        setimg(currimg + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [currimg]);
  const imgstyles = {
    backgroundImage: `url(${Images[currimg]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  return (
    <div className={classes.slider}>
      <div style={imgstyles}>
        <div className={classes.content}>
          <h1 className={classes.head}>Our Mission</h1>
          <p className={classes.overview}>
            Travco's mission is to create memorable travel experiences by
            offering customized tour plans with a focus on exceptional service
            and attention to detail.
          </p>
          <button className={classes.choosebut}>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;

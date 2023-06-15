import { BsCurrencyRupee } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import classes from "./otherplan.module.css";
import { Link } from "react-router-dom";
const OtherPlan = (props) => {
  let data = props.data;
  return (
    <div className={classes.container}>
      <div className={classes.imgbox}>
        <img src={data.image} alt={data.name} />
      </div>
      <div className={classes.content}>
        <div className={classes.info}>
          <h2>{data.name}</h2>
          <h3>{data.state}</h3>
          <p>
            <AiOutlineStar />
            {data.rating}
          </p>
        </div>
        <div>
          <p>{data.days}days</p>
          <p>starts from 
            <BsCurrencyRupee />
            {data.price}
          </p>
        </div>
        <Link to={`${data.id}`}><button className={classes.but}>Explore Plan</button></Link>
      </div>
    </div>
  );
};
export default OtherPlan;

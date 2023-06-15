import classes from "./topplan.module.css";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const TopPlan = (props) => {
  const data = props.data;
  return (
    <div className={classes.container}>
      <div className={classes.imgbox}>
        <img src={data.image} alt={data.name}></img>
      </div>
      <div className={classes.content}>
        <div className={classes.info}>
          <h2>{data.name}</h2>
          <h4>{data.state}</h4>
          <p>
            <AiOutlineStar className={classes.icon}/>
            {data.rating}
          </p>
        </div>
        <div>
          <p>{data.days} days</p>
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
export default TopPlan;

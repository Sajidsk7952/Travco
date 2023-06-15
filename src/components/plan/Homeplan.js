import { Link } from "react-router-dom";
import classes from "./homeplan.module.css";
import { AiOutlineStar } from "react-icons/ai";
const HomePlan = (props) => {
  let data = props.data;
  return (
    <div className={classes.container}>
      <div className={classes.imgbox}>
      <img src={data.image} alt={data.name} className={classes.img}/>
      </div>
      <div className={classes.matter}>
        <div className={classes.content}>
          <h3>
            {data.name}
          </h3>
          <h4>{data.state}</h4>
          <p className={classes.rating}>
            <AiOutlineStar /> {data.rating}
          </p>
          <p className={classes.desc}> {data.description}</p>
        </div>
        <div className={classes.buts}>
          {/* <button className={classes.filled}>View More</button> */}
          <Link to={`plan/${data.id}`}><button className={classes.outline}>Explore Tour</button></Link>
        </div>
      </div>
    </div>
  );
};
export default HomePlan;

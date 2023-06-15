import classes from "./package.module.css";
import { Link } from "react-router-dom";
const Packages = (props) => {
  const pack = props.data;
  return (
    <Link to={`pack/${pack.id}`}>
      <div className={classes.package}>
        {/* <h3>{pack.type}</h3> */}
        <div className={classes.imgbox}>
          <img src={pack.image} alt={pack.type} />
          <h2 className={classes.name}>{pack.name}</h2>
        </div>
      </div>
    </Link>
  );
};
export default Packages;

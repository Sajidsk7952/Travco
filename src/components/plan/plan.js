import { Link, useLocation, useNavigate } from "react-router-dom";
import "./plan.css";
const Plan = (props) => {
  const info = props.data;
  const location = useLocation();
  const navigate = useNavigate();
  let path;
  const detailhandler = () => {
    if (location.pathname === "/") {
      path = `plan/${info.id}`;
      navigate(path);
    }
    if (location.pathname === "/plan") {
      path = `${info.id}`;
      navigate(path);
    }
  };
  return (
    <div className="plan">
      <h2>{info.name}<span className="plan-price">{info.price}</span></h2>
      <div className="plan-content">
        <img src={info.image} alt={info.name}></img>
        <div className="plan-info">
          <h4>{info.state}</h4>
          <p>{info.rating}</p>
          <p>price:{info.price}</p>
        </div>
        <div className="plan-buts">
          <Link>
            <button className="details-but" onClick={detailhandler}>
              view details
            </button>
          </Link>
          <Link>
            <button className="go-but">LET'S GO</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Plan;

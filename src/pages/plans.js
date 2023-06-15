import Island from '../components/assests/data/ilands';
import InternationalPlaces from '../components/assests/data/interdata';
import IndianPlaces from '../components/assests/data/arrays';
import HomePlan from '../components/plan/Homeplan';
import { Link } from 'react-router-dom';
import classes from './plans.module.css';
const Plans=()=>{
  const Tourplaces=[...IndianPlaces,...InternationalPlaces,...Island];
  const TopPlaces=Tourplaces.filter(place=>place.rating>4.8);
  return(
    <div className={classes.planSection}>
      <h1 className={classes.plansTitle}>Hot destinations</h1>
      {TopPlaces.map(place=><HomePlan data={place}/>)}
      <Link to="/plan"><p className={classes.morelink}>View More</p></Link>
    </div>
  )
}
export default Plans;
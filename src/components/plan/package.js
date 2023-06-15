import { Link } from 'react-router-dom';
import classes from './package.module.css';
import { BsCurrencyRupee } from "react-icons/bs";
const Package=(props)=>{
    let data=props.data
    return(
        <div className={classes.container}>
            <div className={classes.head}>
                <h2>{data.name}</h2>
            </div>
            <div className={classes.imgbox}>
                <img src={data.image} alt={data.destination}></img>
            </div>
            <div>
                <h3>{data.state}</h3>
                <p>{data.duration}</p>
                <p>starts from <BsCurrencyRupee />{data.price} per person</p>
            </div>
            <Link to={`/pack/${data.id}`}><button className={classes.but}>Explore</button></Link>
        </div>
    )
}
export default Package
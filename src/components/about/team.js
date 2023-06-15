import classes from './team.module.css';
const Team=(props)=>{
    let data=props.data;
    return(
        <div className={classes.team}>
            <img src={data.image} alt={data.role}></img>
            <div className={classes.teamInfo}>
                <h3>{data.name}</h3>
                <h5>{data.role}</h5>
                <p>{data.expertise}</p>
            </div>
        </div>
    )
}
export default Team
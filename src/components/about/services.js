import classes from './service.module.css';
const Service=(props)=>{
    return(
        <div className={classes.service}>
            <div className={classes.icons}>{props.data.icon}</div>
            <div className={classes.info}>
                <h4>{props.data.title}</h4>
                <p>{props.data.description}</p>
            </div>
        </div>
    )
}
export default Service;
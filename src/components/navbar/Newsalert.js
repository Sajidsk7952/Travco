import { useFetcher } from "react-router-dom";
import { useEffect } from "react";
import classes from './newsalert.module.css';
const NewsAlert=()=>{
    const fetcher=useFetcher();
    useEffect(()=>{
        if(fetcher.state==='idle'&&fetcher.data){
            console.log(fetcher.data.message)
        }
    },[fetcher.state,fetcher.data]);
    return(
        <fetcher.Form method="POST" action='/news' className={classes.form}>
            <input type="email" placeholder="get our latest plans"/>
            <button>Get Notified</button>
        </fetcher.Form>
    )
}
export default NewsAlert
import { useFetcher } from "react-router-dom"
import './newsletter.css'
const Newsletter=()=>{
    const fetcher=useFetcher();
    return(
        <fetcher.Form method="post" action="/" className="newsform">
            <h4>signup for latest tour packages</h4>
            {/* <label>email:</label> */}
            <input type="email" name='email' placeholder="never miss your dream destination"/>
            <button>get notified</button>
        </fetcher.Form>
    )
}
export default Newsletter;
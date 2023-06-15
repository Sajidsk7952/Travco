// import stary_sky from "../assests/stary_sky.mp4";
import { Link } from 'react-router-dom';
import homeback from '../assests/homeback.mp4';
import "./video.css";
const VideoBack = () => {
  return (
    <div>
      <div className="video">
        <video
          preload="auto"
          src={homeback}
          autoPlay
          muted
          loop
          id="player"
        ></video>
      </div>
      <div className="mobileview container">
        <div className="content">
          <h1>travel to</h1>
          <h1>your dreams</h1>
          {/* <h1>imaginations</h1> */}
          <h1>with us</h1>
        </div>
        <div className="buts">
          <Link to='auth'><button className="outline">sign up</button></Link>
          <Link to='plan'><button className="filled">book your first trip</button></Link>
        </div>
      </div>
    </div>
  );
};
export default VideoBack;

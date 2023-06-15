import Newsletter from "./newsletter";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTelephoneOutbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="company-info">
        <h4>About Travco</h4>
        <p>
          Travco offers a wide range of tour plans for both Indian and
          international destinations. From exotic islands to bustling cities,
          Travco has something for everyone. With a focus on personalized
          service and attention to detail.
        </p>
        <p className="queries">Ping Queries to- queries@travco.com</p>
      </div>
      <Newsletter />
      <div className="contacts">
        <h4>Contact Us on:</h4>
        <p><AiOutlineMail /> travco@gmail.com</p>
        <p>
            <BsTelephoneOutbound /> 93562 87240
        </p>
        <p><AiOutlineClockCircle />Mon-Sat 8.00-18.00</p>
        <div className="social-icons">
          <FaFacebook className="footer-icons"/>
          <FaInstagram className="footer-icons"/>
          <FaTwitter className="footer-icons"/>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} style={{ height: "120px", width: "160px" }} />
          <p>
            अन्नपूर्णे सदापूर्णे शंकरप्राणवल्लभे। ज्ञानविघ्ननाशिणि महालक्ष्मी
            नमोस्तुते।
          </p>
          <p>वदनि कवळ घेता नाम घ्या श्रीहरीचे । </p>
          <p>सहज हवन होते नाम घेता फुकाचे ।</p>
          <p>जिवन करि जिवित्वा अन्न हे पूर्णब्रह्म ।</p>
          <p>उदरभरण नोहे जाणिजे यज्ञकर्म ॥१॥</p>
          <div className="footer-social-icon">
            <a href="https://www.instagram.com/bhuvi__1175/" target="_blank"><img src={assets.facebook_icon} alt=""/></a>
            <a href="https://x.com/Bhuvan1175" target="_blank"><img src={assets.twitter_icon} alt="" /></a>
           <a href="https://www.linkedin.com/in/bhuvi-bagde/" target="_blank"> <img src={assets.linkedin_icon} alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7083623156</li>
            <li>bhuvan1175@gamil.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        @ अन्नपूर्णा Website Designed by{" "}
        <a href="http://bhuvaneshwar-bagde.netlify.app" target="_blank" style={{color:"orange"}}>
          Bhuvaneshwar Bagde
        </a>
      </p>
    </div>
  );
};

export default Footer;

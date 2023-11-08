import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>About</h2>
            <span>HISTORY</span>
            <span>BOARD MEMBERS</span>
            <span>MEET THE TEAM</span>
            <span>SPIRITUAL ENTREPRENEURSHIP</span>
          </div>
          <div className="item">
            <h2>Products</h2>
            <span>CLOTHING </span>
            <span> MUSIC</span>
            <span>DESIGN</span>
            <span>TECHNOLOGY </span>
            <span>MARKETING</span>
            {/* <span>Investor Relations</span>
            <span>Contact Sales</span> */}
          </div>
          <div className="item">
            <h2>Services</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Product Development</span>
            <span>Virtual Reality</span>
            <span>Fashion Design</span>
            <span>Media & Production</span>
          </div>
          <div className="item">
            <h2>Become a Freelancer </h2>
            {/* <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span> */}
          </div>
          <div className="item">
            <h2>Sign In</h2>
            {/* <span>DDS Business</span>
            <span>DDS Pro</span>
            <span>DDS Logo Maker</span>
            <span>DDS Guides</span>
            <span>Get Inspired</span>
            <span>DDS Select</span>
            <span>ClearVoice</span>
            <span>DDS Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span> */}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>DDS</h2>
            <span>© DDS International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

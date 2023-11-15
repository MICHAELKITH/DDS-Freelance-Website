import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>About</h2>
            <span>Who We Are </span>
            <span>Meet the Team</span>
            <span>Spiritual Entrepreneurship</span>
          </div>
          <div className="item">
            <h2>Products</h2>
            <span>Clothing </span>
            <span> Music</span>
            <span>Design</span>
            <span>Technology </span>
            <span>Marketing</span>
            {/* <span>Investor Relations</span>
            <span>Contact Sales</span> */}
          </div>
          <div className="item">
            <h2>Services</h2>
            <span>Graphics & Design</span>
            <span>Video & Animation</span>
            <span>Digital Marketing</span>
            <span>Product Development</span>
            <span>Music & Audio</span>
            <span>Song Writing</span>
            <span>Programming & Tech</span>
            <span>Virtual Reality</span>
            <span>Fashion Design</span>
            <span>Media & Production</span>
          </div>
          <div className="item">
            <h2>Become a Freelancer </h2>
            <span>Careers</span>
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
            <svg
      viewBox="0 0 24 24"
      fill="#1DA1F2"
      height="2em"
      width="3em"
    >
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
              <svg
      viewBox="0 0 24 24"
      fill="#1877F2"
      height="2em"
      width="3em"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
    <svg
      viewBox="0 0 960 1000"
      fill="#0077b5"
      height="2em"
      width="3em"
    >
      <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
    </svg>
    <svg
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill="#ad0c70"
      height="2em"
      width="3em"
    >
      <path d="M12 9.52A2.48 2.48 0 1014.48 12 2.48 2.48 0 0012 9.52zm9.93-2.45a6.53 6.53 0 00-.42-2.26 4 4 0 00-2.32-2.32 6.53 6.53 0 00-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 00-2.26.42 4 4 0 00-2.32 2.32 6.53 6.53 0 00-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 00.42 2.27 3.94 3.94 0 00.91 1.4 3.89 3.89 0 001.41.91 6.53 6.53 0 002.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.53 6.53 0 002.26-.42 3.89 3.89 0 001.41-.91 3.94 3.94 0 00.91-1.4 6.6 6.6 0 00.42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93zm-2.54 8a5.73 5.73 0 01-.39 1.8A3.86 3.86 0 0116.87 19a5.73 5.73 0 01-1.81.35H8.94A5.73 5.73 0 017.13 19a3.51 3.51 0 01-1.31-.86A3.51 3.51 0 015 16.87a5.49 5.49 0 01-.34-1.81V12 8.94A5.49 5.49 0 015 7.13a3.51 3.51 0 01.86-1.31A3.59 3.59 0 017.13 5a5.73 5.73 0 011.81-.35h6.12a5.73 5.73 0 011.81.35 3.51 3.51 0 011.31.86A3.51 3.51 0 0119 7.13a5.73 5.73 0 01.35 1.81V12c0 2.06.07 2.27.04 3.06zm-1.6-7.44a2.38 2.38 0 00-1.41-1.41A4 4 0 0015 6H9a4 4 0 00-1.38.26 2.38 2.38 0 00-1.41 1.36A4.27 4.27 0 006 9v6a4.27 4.27 0 00.26 1.38 2.38 2.38 0 001.41 1.41 4.27 4.27 0 001.33.26h6a4 4 0 001.38-.26 2.38 2.38 0 001.41-1.41 4 4 0 00.26-1.38v-3-3a3.78 3.78 0 00-.26-1.38zM12 15.82A3.81 3.81 0 018.19 12 3.82 3.82 0 1112 15.82zm4-6.89a.9.9 0 010-1.79.9.9 0 010 1.79z" />
    </svg>
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            {/* <img src="/img/accessibility.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

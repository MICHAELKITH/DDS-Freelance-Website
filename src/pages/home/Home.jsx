import React, { useState, useEffect } from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import vr from "/img/Group 4.png";
import icon from "/img/icon.png";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      {/* <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide> */}
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>
              <b>Who we are Divine</b> Design Studio is a global marketplace hub
              for
              <i> spiritual entrepreneurship</i>, empowering communities{" "}
              <img src={vr} alt="" />
              through diverse talents, innovative services, and a{" "}
              <i>transformative digital platform.</i>
            </h1>

            <h2>
              We create and innovate products and services that strengthens
              <b> faith-based organizations </b> to{" "}
              <b>thrive, grow and unify</b> at the local, regional, and
              international level.
            </h2>
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>What we do</h1>
          <div className="items">
            <div className="item">
              <button>Branding</button>
            </div>
            <div className="item">
              <button className="active">Graphics Design</button>
            </div>

            <div className="item">
              <button>Illustration</button>
            </div>

            <div className="item">
              <button>Storyboarding</button>
            </div>
            <div className="item">
              <button>2D Animation</button>
            </div>
            <div className="item">
              <button>Sound Desing</button>
            </div>
            <div className="item">
              <button>Fashion Design</button>
            </div>
            <div className="item">
              <button>Digital Marketing</button>
            </div>
            <div className="item">
              <button>App Development</button>
            </div>
            <div className="item">
              <button>Website Development</button>
            </div>
            <div className="item">
              <button>Product Design (UI/UX)</button>
            </div>
            <div className="item">
              <button>media and Production</button>
            </div>
            <div className="item">
              <button>Virtual Reality</button>
            </div>
            <div className="item">
              <button>Song Writing</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>Our categories</h1>
        <p>Here are the sub-categories of Divine Design Studio</p>
        <div className="markets">
          <div className="categories">
            <div className="category">
              <img src={icon} alt="" />
              <div className="inner">
                <span>Music</span>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="white"
                  height="3em"
                  width="4em"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="categories">
            <div className="category">
              <img src={icon} alt="" />
              <div className="inner">
                <span>Marketing</span>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="white"
                  height="3em"
                  width="4em"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="categories">
            <div className="category">
              <img src={icon} alt="" />
              <div className="inner">
                <span>Clothing</span>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="white"
                  height="3em"
                  width="4em"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="categories">
            <div className="category">
              <img src={icon} alt="" />
              <div className="inner">
                <span>Technology</span>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="white"
                  height="3em"
                  width="4em"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="categories">
            <div className="category">
              <img src={icon} alt="" />
              <div className="inner">
                <span>Design</span>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="white"
                  height="3em"
                  width="4em"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="categories">
            <div className="category">
              <img src={icon} alt="" />
              <div className="inner">
                <span>Real-Estate</span>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="white"
                  height="3em"
                  width="4em"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                </svg>
              </div>
              <div className="soon">
                <p> Coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div>
          <h1>“Whatever you do, work at it with all your heart, as working for the Lord, not for human masters”</h1>
          <p>Col 3:23</p>
          <p>We have opportunities here at DDS for support and partnership and also for career and business opportunities</p>
          <div>
            <button>Explore DDS for Business</button>
            <button>Become a partner</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;

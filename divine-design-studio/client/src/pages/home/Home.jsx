import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>
              Our benefits package promotes a strong work/life balance with
              these offerings:
            </h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Bi-weekly payments.
            </div>
            <p>Monthly paid co-working space, designated by leadership.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Financial assistance for relocation and transportation costs.
            </div>
            <p>
              Financial support for technical software/licenses and personal
              equipment.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Free access to spiritual counseling and training.
            </div>
            <p>
              Complimentary attendance at designated paid trip conferences,
              including airfare, hotel, and food.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Free uniforms and accompanied photography/videography.
            </div>
            <p>
              Free marketing and advertisement of your company and services.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Opportunities to collaborate with other talented professionals
            </div>
            <p>A 3-6 month evaluation period for potential bonuses.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              One paid vacation to an approved destination, as determined by
              leadership.
            </div>
          </div>
          <div className="item">
            <video src="./img/videodds.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the DDS marketplace</h1>
          <div className="items">
            <div className="item">
              <svg viewBox="0 0 24 24" fill="#c9bb16" height="4em" width="4em">
                <path d="M12.678 16.672c0 2.175.002 4.565-.001 6.494-.001.576-.244.814-.817.833-7.045.078-8.927-7.871-4.468-11.334-1.95.016-4.019.007-5.986.007-1.351 0-1.414-.01-1.405-1.351.258-6.583 7.946-8.275 11.323-3.936L11.308.928c-.001-.695.212-.906.906-.925 6.409-.187 9.16 7.308 4.426 11.326l6.131.002c1.097 0 1.241.105 1.228 1.217-.223 6.723-7.802 8.376-11.321 4.124zm.002-15.284l-.003 9.972c6.56-.465 6.598-9.532.003-9.972zm-1.36 21.224l-.001-9.97c-6.927.598-6.29 9.726.002 9.97zM1.4 11.315l9.95.008c-.527-6.829-9.762-6.367-9.95-.008zm11.238 1.365c.682 6.875 9.67 6.284 9.977.01z" />
              </svg>
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <svg
                fill="#c9bb16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="4em"
                width="4em"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M11 7 A4 4 0 0 1 7 11 A4 4 0 0 1 3 7 A4 4 0 0 1 11 7 z" />
                <path d="M7 3v4h4M9 17v4M17 14v7M13 13v8M21 12v9" />
              </svg>
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>

            <div className="item">
              <svg
                viewBox="0 0 1024 1024"
                fill="#c9bb16"
                height="4em"
                width="4em"
              >
                <path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z" />
              </svg>
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>

            <div className="item">
              <svg viewBox="0 0 24 24" fill="#c9bb16" height="4em" width="4em">
                <path d="M7.375 16.781l1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 000 1.562l5 4zm9.25-9.562l-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 000-1.562l-5-4zm-1.649-4.003l-4 18-1.953-.434 4-18z" />
              </svg>
              <div className="line"></div>
              <span>Programming & Coding</span>
            </div>
            <div className="item">
              <svg
                viewBox="0 0 512 512"
                fill="#c9bb16"
                height="4em"
                width="4em"
              >
                <path d="M256 96c33.08 0 60.71-25.78 64-58 .3-3-3-6-6-6a13 13 0 00-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.21 16.21 0 00-5.3-.9h-.06a5.69 5.69 0 00-5.38 6c3.35 32.16 31 58 64 58z" />
                <path d="M485.29 89.9L356 44.64a4 4 0 00-5.27 3.16 96 96 0 01-189.38 0 4 4 0 00-5.35-3.16L26.71 89.9A16 16 0 0016.28 108l16.63 88a16 16 0 0013.92 12.9l48.88 5.52a8 8 0 017.1 8.19l-7.33 240.9a16 16 0 009.1 14.94A17.49 17.49 0 00112 480h288a17.49 17.49 0 007.42-1.55 16 16 0 009.1-14.94l-7.33-240.9a8 8 0 017.1-8.19l48.88-5.52a16 16 0 0013.92-12.9l16.63-88a16 16 0 00-10.43-18.1z" />
              </svg>
              <div className="line"></div>
              <span>Fashion Design</span>
            </div>
            <div className="item">
              <svg viewBox="0 0 24 24" fill="#c9bb16" height="4em" width="4em">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M9.743 15h4.514a5.5 5.5 0 114.243 2h-13a5.5 5.5 0 114.243-2zM5.5 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <svg viewBox="0 0 24 24" fill="#c9bb16" height="4em" width="4em">
                <path d="M4 2h10v2H4v10H2V4c0-1.11.89-2 2-2m4 4h10v2H8v10H6V8c0-1.11.89-2 2-2m4 4h8c1.11 0 2 .89 2 2v8c0 1.11-.89 2-2 2h-8c-1.11 0-2-.89-2-2v-8c0-1.11.89-2 2-2m2 2v8l6-4-6-4z" />
              </svg>
              <div className="line"></div>
              <span>Product Development</span>
            </div>
            <div className="item">
              <svg fill="#c9bb16" viewBox="0 0 16 16" height="4em" width="4em">
                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
                <path d="M11 2.82a1 1 0 01.804-.98l3-.6A1 1 0 0116 2.22V4l-5 1V2.82z" />
                <path
                  fillRule="evenodd"
                  d="M0 11.5a.5.5 0 01.5-.5H4a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zm0-4A.5.5 0 01.5 7H8a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zm0-4A.5.5 0 01.5 3H8a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z"
                />
              </svg>
              <div className="line"></div>
              <span>Song Writing</span>
            </div>
            <div className="item">
              <svg fill="#c9bb16" viewBox="0 0 16 16" height="4em" width="4em">
                <path d="M8 1.248c1.857 0 3.526.641 4.65 1.794a4.978 4.978 0 012.518 1.09C13.907 1.482 11.295 0 8 0 4.75 0 2.12 1.48.844 4.122a4.979 4.979 0 012.289-1.047C4.236 1.872 5.974 1.248 8 1.248z" />
                <path d="M12 12a3.988 3.988 0 01-2.786-1.13l-.002-.002a1.612 1.612 0 00-.276-.167A2.164 2.164 0 008 10.5c-.414 0-.729.103-.935.201a1.612 1.612 0 00-.277.167l-.002.002A4 4 0 114 4h8a4 4 0 010 8z" />
              </svg>
              <div className="line"></div>
              <span>Virtual Reality</span>
            </div>
            <div className="item">
              <svg fill="#c9bb16" viewBox="0 0 16 16" height="4em" width="4em">
                <path
                  fillRule="evenodd"
                  d="M0 5a2 2 0 012-2h7.5a2 2 0 011.983 1.738l3.11-1.382A1 1 0 0116 4.269v7.462a1 1 0 01-1.406.913l-3.111-1.382A2 2 0 019.5 13H2a2 2 0 01-2-2V5z"
                />
              </svg>
              <div className="line"></div>
              <span>Media & Production</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Divine design studio <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore DDS Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;

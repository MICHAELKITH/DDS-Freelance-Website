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
              <svg viewBox="0 0 20 20" fill="#c9bb16" height="4em" width="4em">
                <path d="M7 17H2a2 2 0 01-2-2V2C0 .9.9 0 2 0h16a2 2 0 012 2v13a2 2 0 01-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" />
              </svg>
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <svg viewBox="0 0 24 24" fill="#c9bb16" height="4em" width="4em">
                <path d="M12 0C5.335 0 0 5.334 0 12c0 6.667 5.334 12 12 12 6.667 0 12-5.333 12-12-.06-6.666-5.393-12-12-12zm0 1.333c5.846.06 10.552 4.82 10.546 10.667 0 5.818-4.727 10.606-10.606 10.606S1.394 17.817 1.394 11.939C1.394 6.062 6.174 1.333 12 1.333zm7.334 5.273l-2.667 1.576c-.06.06-.122.06-.182.12a.843.843 0 000 1.152c.12.122.243.183.364.183.303.06.605 0 .787-.183.06-.06.122-.121.183-.242l.363-.727zM13.516 8c-4.121 0-4.788 1.94-4.788 4.364.06.606 0 1.212-.303 1.758-.303.545-.91.908-1.516.847-.242 0-1.151-.181-1.212-.423h.121c.97 0 1.758-.788 1.758-1.819v-.485h-.849c-.606 0-1.151.304-1.515.788a2.152 2.152 0 00-1.576-.726h-.848v.363c0 1.03.849 1.879 1.94 1.879h.303c0 .606.848 3.03 7.09 3.03 2.425 0 6.061-.425 6.061-5.03-.06-.789-.303-1.637-.727-2.303-.182.06-.303.06-.485.06a1.344 1.344 0 01-1.333-1.333c0-.121 0-.303.06-.425A3.565 3.565 0 0013.516 8z" />
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
                <path d="M4 2h10v2H4v10H2V4c0-1.11.89-2 2-2m4 4h10v2H8v10H6V8c0-1.11.89-2 2-2m4 4h8c1.11 0 2 .89 2 2v8c0 1.11-.89 2-2 2h-8c-1.11 0-2-.89-2-2v-8c0-1.11.89-2 2-2m2 2v8l6-4-6-4z" />
              </svg>
              <div className="line"></div>
              <span>Product Development</span>
            </div>
            <div className="item">
              <svg viewBox="0 0 24 24" fill="#c9bb16" height="4em" width="4em">
                <path d="M22 3l-3 15.1-9.1 3-7.9-3 .8-4.1h3.4l-.4 1.7 4.8 1.8 5.5-1.8.8-3.8H3.2l.7-3.4h13.6l.5-2.1H4.3L5 3h17z" />
              </svg>
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <svg viewBox="0 0 24 24" fill="#c9bb16" height="4em" width="4em">
                <path d="M12 0C8.926 0 5.852 1.17 3.511 3.511c-4.37 4.371-4.66 11.299-.869 16.01a3.138 3.138 0 01.719-3.314 3.138 3.138 0 013.672-.56 6.163 6.163 0 019.324-8.004 2.921 2.921 0 104.132-4.132A11.968 11.968 0 0012 0zm9.36 4.481a3.138 3.138 0 01-.72 3.313 3.138 3.138 0 01-3.672.56 6.165 6.165 0 01-.61 8.003 2.921 2.921 0 104.131 4.132c4.37-4.37 4.66-11.298.87-16.008zM5.576 15.501a2.92 2.92 0 00-2.922 2.922 2.92 2.92 0 002.922 2.922 2.92 2.92 0 002.922-2.922A2.92 2.92 0 005.577 15.5zm10.07 1.467a6.168 6.168 0 01-7.293 0 3.14 3.14 0 01-.56 3.672 3.136 3.136 0 01-3.314.718c4.376 3.523 10.665 3.523 15.04 0a3.136 3.136 0 01-3.313-.718 3.138 3.138 0 01-.56-3.672z" />
              </svg>
              <div className="line"></div>
              <span>Video & Animation</span>
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

import React from "react";
import Backimg1 from "/img/30324.jpg";
import Backimg2 from "/img/SLIDE 1_edited.jpg";
import Backimg4 from "/img/excel.webp";
import Backimg5 from "/img/collab.avif";
import Backimg6 from "/img/innovative.avif";
import Backimg7 from "/img/development.avif";
import Backimg8 from "/img/ethical.webp";
import Backimg9 from "/img/global.avif";
import Backimg10 from "/img/community.avif";

import "./about.scss";

const about = () => {
  return (
    <div className="about-page">
      <div className="culture">
        <p>About Us</p>
        <h1>Who We Are</h1>
      </div>

      <div className="about-culture">
        <p>
          We are called Divine Design Studio, which also stands for DDS. As
          Creative Design Studio, we are a collaborative group of freelancers
        </p>
        <img src={Backimg1} alt="Our image " />
      </div>
      <div className="about-sect">
        <div className="overview">
          <div>
            <h2>Overview</h2>
            <h3>Divine Design Studio Network</h3>
          </div>
          <div className="banner">
            <img src={Backimg2} alt="" />
            <p>
              A Brief Outlook The Divine Design Studio Network stands as a
              beacon of creativity and innovation, fostering a collaborative
              environment where artistic visionaries come together to bring
              dreams to life.{" "}
              <span>
                This unique network seamlessly integrates various creative
                disciplines, uniting artists, designers, and professionals under
                a shared mission of pushing the boundaries of aesthetic
                excellence.{" "}
              </span>
            </p>
          </div>
        </div>
        <hr />
        <div className="overview">
          <div>
            {/* <h2>Who We Are</h2> */}
            <h3>Collaborative Ecosystem</h3>
          </div>
          <div className="banner">
            <img src={Backimg5} alt="" />
            <p>
              At the core of the Divine Design Studio Network is a collaborative
              ecosystem that thrives on the synergy of diverse talents. Artists
              and designers from various backgrounds converge to share ideas,
              pool resources, and embark on collaborative projects that
              transcend the conventional boundaries of individual disciplines.
            </p>
          </div>
        </div>
        <hr />
        <div className="overview">
          <div>
            {/* <h2>Image 3</h2> */}
            <h3> Multidisciplinary Excellence</h3>
          </div>
          <div className="banner">
            <img src={Backimg4} alt="" />
            <p>
              Diversity is celebrated within the Divine Design Studio Network,
              where excellence knows no singular form. From graphic designers
              and architects to writers and multimedia artists, the network
              embraces a myriad of creative expressions. This multidisciplinary
              approach not only encourages cross-pollination of ideas but also
              results in projects that are rich in depth and innovation.
            </p>
          </div>
        </div>
        <hr />
        <div className="overview">
          <div>
            {/* <h2>Image 4</h2> */}
            <h3>Innovative Projects and Initiative</h3>
          </div>
          <div className="banner">
            <img src={Backimg6} alt="" />
            <p>
              The Divine Design Studio Network serves as a launchpad for
              innovative projects and initiatives that push the envelope of
              creative expression. Whether it's a cutting-edge design concept, a
              multimedia art installation, or a collaborative event, the network
              provides a platform for members to showcase their talents and
              contribute to the collective advancement of the arts
            </p>
          </div>
        </div>
        <hr />
        <div className="overview">
          <div>
            {/* <h2>Image 5</h2> */}
            <h3>Professional Development</h3>
          </div>
          <div className="banner">
            <img src={Backimg7} alt="" />
            <p>
              Recognizing the importance of continuous growth, the Divine Design
              Studio Network places a strong emphasis on professional
              development. Workshops, seminars, and mentorship programs are
              integral components, fostering an environment where emerging
              talents can refine their skills, learn from seasoned
              professionals, and evolve as creative forces in their respective
              fields.
            </p>
          </div>
        </div>
        <hr />
        <div className="overview">
          <div>
            {/* <h2>Image 6</h2> */}
            <h3>Ethical and Sustainable Design</h3>
          </div>
          <div className="banner">
            <img src={Backimg8} alt="" />
            <p>
              In an era where responsibility intersects with creativity, the
              Divine Design Studio Network champions ethical and sustainable
              design practices. Members are encouraged to incorporate principles
              of environmental consciousness and social responsibility into
              their work, contributing to a collective effort to make a positive
              impact on the world through creative endeavors.
            </p>
          </div>
        </div>
        <hr />
        <div className="overview">
          <div>
            {/* <h2>Image 7</h2> */}
            <h3>Global Network and Exposure</h3>
          </div>
          <div className="banner">
            <img src={Backimg9} alt="" />
            <p>
              With a global outlook, the Divine Design Studio Network provides
              its members with opportunities for international exposure.
              Collaborations, exhibitions, and partnerships extend beyond
              geographical borders, allowing artists and designers to connect
              with a diverse audience and participate in a global dialogue of
              creativity.
            </p>
          </div>
        </div>
        <hr />
        <div className="overview">
          <div>
            {/* <h2>Who We Are</h2> */}
            <h3>Community Engagement</h3>
          </div>
          <div className="banner">
            <img src={Backimg10} alt="" />
            <p>
              The network extends its influence beyond its creative endeavors,
              actively engaging with the community. Through outreach programs,
              educational initiatives, and public installations, the Divine
              Design Studio Network seeks to inspire, uplift, and enrich the
              lives of individuals by infusing creativity into everyday
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

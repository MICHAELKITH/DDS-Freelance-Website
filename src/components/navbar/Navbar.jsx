import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import DDS from "/img/DDS.png";

import "./Navbar.scss";

function Navbar() {
  const handleLinkClick = () => {
    closeAllDropdowns();
    showNavbar();
  };

  const dropdownClass = (isOpen) => {
    return isOpen ? "dropdown open" : "dropdown";
  };

  const toggleDropdownSmallDevices = (dropdownFunction) => {
    if (window.innerWidth <= 768) {
      closeAllDropdownsExcept(dropdownFunction);
      toggleDropdown(dropdownFunction);
      toggleDropdown(dropdownFunction);
    }
  };

  const toggleDropdown = (dropdownFunction) => {
    dropdownFunction((prevState) => !prevState);
    closeAllDropdownsExcept(dropdownFunction);
  };
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [becomeFreelancerDropdownOpen, setBecomeFreelancerDropdownOpen] =
    useState(false);

  const toggleClientsDropdown = () => {
    setClientsDropdownOpen(!clientsDropdownOpen);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setBecomeFreelancerDropdownOpen(false);
  };
  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
    setClientsDropdownOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setBecomeFreelancerDropdownOpen(false);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
    setClientsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setBecomeFreelancerDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    setClientsDropdownOpen(false);
    setProductsDropdownOpen(false);
    setAboutDropdownOpen(false);
    setBecomeFreelancerDropdownOpen(false);
  };

  const closeAllDropdowns = () => {
    setAboutDropdownOpen(false);
    setClientsDropdownOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setBecomeFreelancerDropdownOpen(false);
  };
  const toggleBecomeFreelancerDropdownOpen = () => {
    setBecomeFreelancerDropdownOpen(!becomeFreelancerDropdownOpen);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setClientsDropdownOpen(false);
  };
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  useEffect(() => {
    const closeDropdownOnBodyClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    document.body.addEventListener("click", closeDropdownOnBodyClick);

    return () => {
      document.body.removeEventListener("click", closeDropdownOnBodyClick);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      return err;
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img className="Logo" src={DDS} alt="" />
          </Link>
        </div>
        <div className="links">
          <nav className="nav-items" ref={navRef}>
            <Link className="link" to="/" onClick={handleLinkClick}>
              <span>Home</span>
            </Link>
            <div
              className="dropdown"
              onMouseEnter={toggleAboutDropdown}
              onMouseLeave={closeAllDropdowns}
              onClick={() => toggleDropdownSmallDevices(setAboutDropdownOpen)}
            >
              <div className="toggle-link">
                <span className="link">About</span>

                <span
                  className="dropdown-toggle"
                  onClick={() => toggleDropdown(setAboutDropdownOpen)}
                >
                  {aboutDropdownOpen ? "-" : "+"}
                </span>
              </div>

              {aboutDropdownOpen && (
                <div className="dropdown-content">
                  <Link
                    className="dropdown-link"
                    to="/about"
                    onClick={handleLinkClick}
                  >
                    Who We Are
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/team"
                    onClick={handleLinkClick}
                  >
                    Meet the Team
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/spiritual"
                    onClick={handleLinkClick}
                  >
                    Spiritual Entrepreneurship
                  </Link>
                </div>
              )}
            </div>

            <div
              className="dropdown"
              onMouseEnter={toggleClientsDropdown}
              onMouseLeave={closeAllDropdowns}
            >
              <span className="link">Our Works</span>
              {clientsDropdownOpen && <div className="dropdown-content"></div>}
            </div>
            <div
              className="dropdown"
              onMouseEnter={toggleProductsDropdown}
              onMouseLeave={closeAllDropdowns}
            >
              <span className="link">Divisions</span>

              {productsDropdownOpen && (
                <div className="dropdown-content">
                  <Link
                    className="dropdown-link"
                    to="/clothing"
                    onClick={handleLinkClick}
                  >
                    Clothing
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/music"
                    onClick={handleLinkClick}
                  >
                    Music
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/design"
                    onClick={handleLinkClick}
                  >
                    Design
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/technology"
                    onClick={handleLinkClick}
                  >
                    Technology
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/marketing"
                    onClick={handleLinkClick}
                  >
                    Marketing
                  </Link>
                </div>
              )}
            </div>
            <div
              className="dropdown"
              onMouseEnter={toggleServicesDropdown}
              onMouseLeave={closeAllDropdowns}
            >
              <span className="link">Services</span>
              {servicesDropdownOpen && (
                <div className="dropdown-content">
                  <Link
                    className="dropdown-link"
                    to="/graphic"
                    onClick={handleLinkClick}
                  >
                    Graphics & Design
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/video"
                    onClick={handleLinkClick}
                  >
                    Video & Animation
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/digital"
                    onClick={handleLinkClick}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/product"
                    onClick={handleLinkClick}
                  >
                    Product Development
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/audio"
                    onClick={handleLinkClick}
                  >
                    Music & Audio
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/song"
                    onClick={handleLinkClick}
                  >
                    Song Writing
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/program"
                    onClick={handleLinkClick}
                  >
                    Programming & Tech
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/virtual"
                    onClick={handleLinkClick}
                  >
                    Virtual Reality
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/fashion"
                    onClick={handleLinkClick}
                  >
                    Fashion Design
                  </Link>
                  <Link
                    className="dropdown-link"
                    to="/media"
                    onClick={handleLinkClick}
                  >
                    Media & Production
                  </Link>
                </div>
              )}
            </div>

            {!currentUser?.isSeller && (
              <div
                className="dropdown"
                onMouseEnter={toggleBecomeFreelancerDropdownOpen}
                onMouseLeave={closeAllDropdowns}
              >
                <span className="link">Become a Freelancer</span>
                {becomeFreelancerDropdownOpen && (
                  <div className="dropdown-content">
                    <Link
                      className="dropdown-link"
                      to="/career"
                      onClick={handleLinkClick}
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>
            )}
            {currentUser ? (
              <div className="user" onClick={() => setOpen(!open)}>
                <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
                <span>{currentUser?.username}</span>
                {open && (
                  <div className="options">
                    {currentUser.isSeller && (
                      <>
                        <Link className="link" to="/mygigs">
                          Gigs
                        </Link>
                        <Link className="link" to="/add">
                          Add New Gig
                        </Link>
                      </>
                    )}
                    <Link className="link" to="/orders">
                      Orders
                    </Link>
                    <Link className="link" to="/messages">
                      Messages
                    </Link>
                    <Link className="link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="link">
                  Sign in
                </Link>
                <Link className="link" to="/register">
                  <button
                    className="create"
                    type="button"
                    style={{ border: "1px solid white" }}
                  >
                    Create Account
                  </button>
                </Link>
              </>
            )}

            <h1 className="intro-link">Let’s discuss</h1>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="3em"
      width="4em"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
    </svg>
            </button>
          </nav>

          <button className="nav-btn" onClick={showNavbar}>
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="3em"
              width="4em"
            >
              <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

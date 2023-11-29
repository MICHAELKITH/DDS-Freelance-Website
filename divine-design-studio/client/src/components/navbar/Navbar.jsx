import React, { useRef, useEffect, useState } from 'react';
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import DDS from '../../../../../../../../img/DDS.png';

import './Navbar.scss';

function Navbar() {
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [becomeFreelancerDropdownOpen, setbecomeFreelancerDropdownOpen] = useState(false);

  const toggleClientsDropdown = () => {
    setClientsDropdownOpen(!clientsDropdownOpen);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setbecomeFreelancerDropdownOpen(false);
  };
  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
    setClientsDropdownOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setbecomeFreelancerDropdownOpen(false);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
    setClientsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setbecomeFreelancerDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    setClientsDropdownOpen(false);
    setProductsDropdownOpen(false);
    setAboutDropdownOpen(false);
    setbecomeFreelancerDropdownOpen(false);
  };

  const closeAllDropdowns = () => {
    setAboutDropdownOpen(false);
    setClientsDropdownOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setbecomeFreelancerDropdownOpen(false);
  };
  const toggleBecomeFreelancerDropdownOpen = () => {
    setbecomeFreelancerDropdownOpen(!becomeFreelancerDropdownOpen);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setClientsDropdownOpen(false);
  };
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  useEffect(() => {
    const closeDropdownOnBodyClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    document.body.addEventListener('click', closeDropdownOnBodyClick);

    return () => {
      document.body.removeEventListener('click', closeDropdownOnBodyClick);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post('/auth/logout');
      localStorage.setItem('currentUser', null);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img className="Logo" src={DDS} alt="" />
          </Link>
        </div>
        <div className="links">
          <nav className="nav-items" ref={navRef}>
            <Link className="link" to="/">
              <span>Home</span>
            </Link>
            <div
              className="dropdown"
              onMouseEnter={toggleAboutDropdown}
              onMouseLeave={closeAllDropdowns}
            >
              <span className="link">About</span>
              {aboutDropdownOpen && (
                <div className="dropdown-content">
                  <Link className="dropdown-link" to="/about">
                    Who We Are
                  </Link>
                  <Link className="dropdown-link" to="/team">
                    Meet the Team
                  </Link>
                  <Link className="dropdown-link" to="/team">
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
              {clientsDropdownOpen && (
                <div className="dropdown-content">
                  {/* <Link className="dropdown-link" to="/client1">
                    Client 1
                  </Link>
                  <Link className="dropdown-link" to="/client2">
                    Client 2
                  </Link> */}
                </div>
              )}
            </div>
            <div
              className="dropdown"
              onMouseEnter={toggleProductsDropdown}
              onMouseLeave={closeAllDropdowns}
            >
              <span className="link">Divisions</span>
              {productsDropdownOpen && (
                <div className="dropdown-content">
                  <Link className="dropdown-link" to="/product1">
                    Clothing
                  </Link>
                  <Link className="dropdown-link" to="/product2">
                    Music
                  </Link>
                  <Link className="dropdown-link" to="/product2">
                    Design
                  </Link>
                  <Link className="dropdown-link" to="/product2">
                    Technology
                  </Link>
                  <Link className="dropdown-link" to="/product2">
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
                  <Link className="dropdown-link" to="/service1">
                    Graphics & Design
                  </Link>
                  <Link className="dropdown-link" to="/service2">
                    Video & Animation
                  </Link>
                  <Link className="dropdown-link" to="/service1">
                    Digital Marketing
                  </Link>
                  <Link className="dropdown-link" to="/service2">
                    Product Development
                  </Link>
                  <Link className="dropdown-link" to="/service1">
                    Music & Audio
                  </Link>
                  <Link className="dropdown-link" to="/service2">
                    Song Writing
                  </Link>
                  <Link className="dropdown-link" to="/service1">
                    Programming & Tech
                  </Link>
                  <Link className="dropdown-link" to="/service2">
                    Virtual Reality
                  </Link>
                  <Link className="dropdown-link" to="/service1">
                    Fashion Design
                  </Link>
                  <Link className="dropdown-link" to="/service2">
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

                <Link className="dropdown-link" to="/become-freelancer">
                  Careers
                </Link>

              </div>
              )}
            </div>
            )}
            {currentUser ? (
              <div className="user" onClick={() => setOpen(!open)}>
                <img src={currentUser.img || '/img/noavatar.jpg'} alt="" />
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
                  <button>Create Account</button>
                </Link>
              </>
            )}

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <svg viewBox="0 0 470 1000" fill="red" height="2em" width="1em">
                <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
              </svg>
            </button>
          </nav>

          <button className="nav-btn" onClick={showNavbar}>
            <svg viewBox="0 0 1 16" fill="red" height="1em" width="2em">
              <path
                fillRule="evenodd"
                d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Design
            </Link>
            <Link className="link menuLink" to="/">
              Technology
            </Link>
            <Link className="link menuLink" to="/">
              Clothing
            </Link>
            <Link className="link menuLink" to="/">
              Music
            </Link>

          </div>
          <hr />
        </>
      )} */}
    </div>
  );
}

export default Navbar;

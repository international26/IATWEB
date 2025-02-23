import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [displayContact, setDisplayContact] = useState(false);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [sticky, setSticky] = useState(false);

  const [displayBlogMenu, setDisplayBlogMenu] = useState(false);
  const [displayInfoMenu, setDisplayInfoMenu] = useState(false);

  const blogMenuRef = useRef(null);
  const infoMenuRef = useRef(null);

  const toggleContact = () => {
    setDisplayContact(!displayContact);
  };
  
  const toggleMobileMenu = () => {
    setDisplayMobileMenu(!displayMobileMenu);
  };
  
  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };

  const toggleBlogMenu = () => {
    setDisplayBlogMenu(!displayBlogMenu);
  };

  const toggleInfoMenu = () => {
    setDisplayInfoMenu(!displayInfoMenu);
  };

  const showStickyMenu = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showStickyMenu);
    return () => {
      window.removeEventListener("scroll", showStickyMenu);
    };
  }, []);

  const handleMouseEnterBlog = () => {
    if (!displayBlogMenu) {
      setDisplayBlogMenu(true);
    }
  };

  const handleMouseLeaveBlog = () => {
    setDisplayBlogMenu(false);
  };

  const handleMouseEnterInfo = () => {
    if (!displayInfoMenu) {
      setDisplayInfoMenu(true);
    }
  };

  const handleMouseLeaveInfo = () => {
    setDisplayInfoMenu(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        blogMenuRef.current && !blogMenuRef.current.contains(event.target) &&
        displayBlogMenu
      ) {
        setDisplayBlogMenu(false);
      }
      if (
        infoMenuRef.current && !infoMenuRef.current.contains(event.target) &&
        displayInfoMenu
      ) {
        setDisplayInfoMenu(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [displayBlogMenu, displayInfoMenu]);

  return (
    <>
      <div className="page-wrapper">
        <div className={displayContact ? "body_overlay open" : "body_overlay"}></div>

        <header className={sticky ? "is-sticky header-wrap style1" : "header-wrap style1"}>
          <div className="header-bottom">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 col-5">
                  <div className="logo v2">
                    <Link href="/">
                      <img src="/images/logo.png" alt="Image" />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-7 col-md-9 col-7 order-lg-1 order-md-2 order-2">
                  <div className={displayMobileMenu ? "main-menu-wrap open" : "main-menu-wrap"}>
                    <div className="menu-close xl-none" onClick={toggleMobileMenu}>
                      <i className="las la-times"></i>
                    </div>

                    <div id="menu">
                      <ul className="main-menu">
                        <li className="active">
                          <Link href="/" style={{ fontSize: "18px" }}>Home</Link>
                        </li>
        
                        <li 
                          className="has-children" 
                          ref={blogMenuRef}
                          onMouseEnter={handleMouseEnterBlog}
                          onMouseLeave={handleMouseLeaveBlog}
                        >
                          <a href="#" style={{ fontSize: "18px" }} onClick={toggleBlogMenu}>Blog</a>
                          <span className="menu-expand" onClick={toggleBlogMenu}>
                            <i className="las la-angle-down"></i>
                          </span>
                          {displayBlogMenu && (
                            <ul className="sub-menu">
                              <li>
                                <Link href="https://www.internationalairporttransfers.com/blog/Best-transportation-from-punta-cana-international-airport-to-your-airbnb/" style={{ fontSize: "15px" }}>Best transportation to the airport</Link>
                              </li>
                              <li>
                                <Link href="https://www.internationalairporttransfers.com/blog/Best-transportation-to-the-airport/" style={{ fontSize: "15px" }}>Best transportation to Club Med Resort</Link>
                              </li>
                            </ul>
                          )}
                        </li>
                        
                        <li>
                          <Link href="/contact-us" style={{ fontSize: "18px" }}>Contact Us</Link>
                        </li>

                        <li 
                          className="has-children"
                          ref={infoMenuRef}
                          onMouseEnter={handleMouseEnterInfo}
                          onMouseLeave={handleMouseLeaveInfo}
                        >
                          <a href="#" style={{ fontSize: "18px" }} onClick={toggleInfoMenu}>Information</a>
                          <span className="menu-expand" onClick={toggleInfoMenu}>
                            <i className="las la-angle-down"></i>
                          </span>
                          {displayInfoMenu && (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/about-us/" className={currentPath === "/about-us/" ? "active" : ""} style={{ fontSize: "15px" }}>About Us</Link>
                              </li>
                              <li>
                                <Link href="/faq/" className={currentPath === "/faq/" ? "active" : ""} style={{ fontSize: "15px" }}>FAQ</Link>
                              </li>
                              <li>
                                <Link href="/privacy-policy/" className={currentPath === "/privacy-policy/" ? "active" : ""} style={{ fontSize: "15px" }}>Privacy Policy</Link>
                              </li>
                              <li>
                                <Link href="/terms-condition/" className={currentPath === "/terms-condition/" ? "active" : ""} style={{ fontSize: "15px" }}>Terms & Condition</Link>
                              </li>
                            </ul>
                          )}
                        </li>

                        <li>
                          <Link href="/MyBooking" style={{ fontSize: "18px" }}>My Booking</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mobile-bar-wrap">
                    <div className="mobile-menu xl-none" onClick={toggleMobileMenu}>
                      <i className="las la-bars"></i>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 order-lg-2 order-md-1 md-none">
                  <div className="header-bottom-right d-flex justify-content-center justify-content-md-start">
                    <div className="contact-box mr-md-3 mb-3">
                      <span className="ri-phone-line"></span>
                      <p>
                        Contact Now <br />
                        <a href="tel:+1809343317">+1(809)-343-3176</a>
                      </p>
                    </div>
                    
                    <div className="contact-box ml-md-3 mb-3">
                      <span className="ri-mail-line"></span>
                      <p>
                        Email Us <br /> 
                        <a href="mailto:internationalairporttransfers@gmail.com">Click Here</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;

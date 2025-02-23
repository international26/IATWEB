import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavbarThree = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [display, setDisplay] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleCart = () => {
    setDisplay(!display);
  };
  const toggleContact = () => {
    setDisplayContact(!displayContact);
  };

  const toggleMobileMenu = () => {
    setDisplayMobileMenu(!displayMobileMenu);
  };
  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };

  //sticky menu

  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }

  /*//set language
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("English");//*/

  //set currency
  const [openCurrency, setOpenCurrency] = useState(false);
  const [currencyClicked, setCurrencyClicked] = useState(false);
  const [currencyName, setCurrencyName] = useState("USD");

  const toggleTopCart = () => {
    setDisplay(!display);
  };

  //toggle language
 /* const toggleCategory = () => {
    setOpen(!open);
  };

  const category = ["English", "French", "Arabic"];

  //toggle function for select language
  const toggleSelected = (cat, index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
    setName(cat);
  };
*/
  //toggle currency
  const currency = ["USE", "EURO", "YEN"];

  const toggleCurrency = () => {
    setOpenCurrency(!openCurrency);
  };

  //toggle function for select currency
  const toggleSelectedCurrency = (cat, index) => {
    if (currencyClicked === index) {
      return setCurrencyClicked(null);
    }
    setCurrencyClicked(index);
    setCurrencyName(cat);
  };

  return (
    <>
      <div
        className={displayContact ? "body_overlay open" : "body_overlay"}
      ></div>
      <header className="header-wrap style3">
        <div className={display ? "body_overlay open" : "body_overlay"}></div>
        <div className={displayAuth ? "header-top open" : "header-top"}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="header-top-left">
                  <div
                    className="close-header-top xl-none"
                    onClick={toggleAuth}
                  >
                    <button type="button">
                      <i className="las la-times"></i>
                    </button>
                  </div>
                  <p>
                    Find the best spot, restaurant, hotel, fitness center, shop
                    etc.
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="header-top-right">
                  <Link href="/log-in" className="link style3">
                    <i className="ri-user-line"></i>SIGN IN
                  </Link>
                  <div
                    onClick={() => toggleCategory()}
                    className={open ? "nice-select open" : "nice-select"}
                  >
                    <span className="current">{name}</span>
                    <ul className="list">
                      {category.length > 0 &&
                        category.map((cat, index) => (
                          <li
                            key={index}
                            onClick={(e) => toggleSelected(cat, index)}
                            onChange={(e) => e}
                            className={
                              clicked === index
                                ? "option selected focus"
                                : "option"
                            }
                          >
                            {cat}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div
                    onClick={() => toggleCurrency()}
                    className={
                      openCurrency ? "nice-select open" : "nice-select"
                    }
                  >
                    <span className="current">{currencyName}</span>
                    <ul className="list">
                      {currency.length > 0 &&
                        currency.map((cur, index) => (
                          <li
                            key={index}
                            onClick={(e) => toggleSelectedCurrency(cur, index)}
                            onChange={(e) => e}
                            className={
                              clicked === index
                                ? "option selected focus"
                                : "option"
                            }
                          >
                            {cur}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="shopcart md-none" onClick={toggleCart}>
                    <button type="button">
                      <i className="ri-shopping-cart-line"></i>
                      <span className="item-amt">1</span>
                    </button>
                    <span className="cart-total">$0.00</span>
                  </div>
                  <div className="contact-box xl-none">
                    <span className="ri-phone-line"></span>
                    <p>
                      Contact Now <br />
                      <a href="tel:+15143214567">+1 (514) 321-4567</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header
        className={
          sticky ? "is-sticky header-wrap style2" : "header-wrap style2"
        }
      >
        <div className="header-bottom">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-5">
                <div className="logo v2">
                  <Link href="/">
                    <img src="/images/logo.png" alt="Image" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-9 col-7 order-lg-1 order-md-2 order-2">
                <div
                  className={
                    displayMobileMenu ? "main-menu-wrap open" : "main-menu-wrap"
                  }
                >
                  <div
                    className="menu-close xl-none"
                    onClick={toggleMobileMenu}
                  >
                    <i className="las la-times"></i>
                  </div>
                  <div id="menu">
                    <ul className="main-menu">
                      <li className="has-children">
                        <Link href="#">Home</Link>

                        <span className="menu-expand">
                          <i className="las la-angle-down"></i>
                        </span>

                        <ul className="sub-menu">
                          <li>
                            <Link
                              href="/"
                              className={`nav-link ${
                                currentPath == "/" && "active"
                              }`}
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/index-2/"
                              className={`nav-link ${
                                currentPath == "/index-2/" && "active"
                              }`}
                            >
                              Home Two
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/index-3/"
                              className={`nav-link ${
                                currentPath == "/index-3/" && "active"
                              }`}
                            >
                              Home Three
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="has-children">
                        <Link href="#">Tours</Link>
                        <span className="menu-expand">
                          <i className="las la-angle-down"></i>
                        </span>

                        <ul className="sub-menu">
                          <li>
                            <Link
                              href="/tours/"
                              className={`nav-link ${
                                currentPath == "/tours/" && "active"
                              }`}
                            >
                              Tours
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tours/details/"
                              className={`nav-link ${
                                currentPath == "/tours/details/" && "active"
                              }`}
                            >
                              Tour Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="has-children">
                        <Link href="#">Destination</Link>
                        <span className="menu-expand">
                          <i className="las la-angle-down"></i>
                        </span>

                        <ul className="sub-menu">
                          <li>
                            <Link
                              href="/destination/"
                              className={`nav-link ${
                                currentPath == "/destination/" && "active"
                              }`}
                            >
                              Destination
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/destination/details/"
                              className={`nav-link ${
                                currentPath == "/destination/details/" &&
                                "active"
                              }`}
                            >
                              Destination Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="has-children">
                        <Link href="#">Shop</Link>
                        <span className="menu-expand">
                          <i className="las la-angle-down"></i>
                        </span>

                        <ul className="sub-menu">
                          <li className="has-children">
                            <Link href="#">Shop Layout</Link>
                            <span className="menu-expand">
                              <i className="las la-angle-down"></i>
                            </span>

                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/shop/left-sidebar/"
                                  className={`nav-link ${
                                    currentPath == "/shop/left-sidebar/" &&
                                    "active"
                                  }`}
                                >
                                  Shop Left Sidebar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/shop/right-sidebar/"
                                  className={`nav-link ${
                                    currentPath == "/shop/right-sidebar/" &&
                                    "active"
                                  }`}
                                >
                                  Shop Right Sidebar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/shop/no-sidebar/"
                                  className={`nav-link ${
                                    currentPath == "/shop/no-sidebar/" &&
                                    "active"
                                  }`}
                                >
                                  Shop No Sidebar
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link
                              href="/shop/details/"
                              className={`nav-link ${
                                currentPath == "/shop/details/" && "active"
                              }`}
                            >
                              Shop Details
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/wishlist/"
                              className={`nav-link ${
                                currentPath == "/wishlist/" && "active"
                              }`}
                            >
                              Wishlist
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/cart/"
                              className={`nav-link ${
                                currentPath == "/cart/" && "active"
                              }`}
                            >
                              Cart
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/checkout/"
                              className={`nav-link ${
                                currentPath == "/checkout/" && "active"
                              }`}
                            >
                              Checkout
                            </Link>
                          </li>

                          <li className="has-children">
                            <Link href="#">User</Link>
                            <span className="menu-expand">
                              <i className="las la-angle-down"></i>
                            </span>

                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/log-in/"
                                  className={`nav-link ${
                                    currentPath == "/log-in/" && "active"
                                  }`}
                                >
                                  Log In
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/register/"
                                  className={`nav-link ${
                                    currentPath == "/register/" && "active"
                                  }`}
                                >
                                  Register
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/forgot-password/"
                                  className={`nav-link ${
                                    currentPath == "/forgot-password/" &&
                                    "active"
                                  }`}
                                >
                                  Forgot Password
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/admin/profile/"
                                  className={`nav-link ${
                                    currentPath == "/admin/profile/" && "active"
                                  }`}
                                >
                                  My Account
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="has-children">
                        <Link href="#">Blog</Link>
                        <span className="menu-expand">
                          <i className="las la-angle-down"></i>
                        </span>

                        <ul className="sub-menu">
                          <li className="has-children">
                            <Link href="#">Blog Layout</Link>
                            <span className="menu-expand">
                              <i className="las la-angle-down"></i>
                            </span>

                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/blog/left-sidebar/"
                                  className={`nav-link ${
                                    currentPath == "/blog/left-sidebar/" &&
                                    "active"
                                  }`}
                                >
                                  Blog Left Sidebar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/blog/right-sidebar/"
                                  className={`nav-link ${
                                    currentPath == "/blog/right-sidebar/" &&
                                    "active"
                                  }`}
                                >
                                  Blog Right Sidebar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/blog/no-sidebar/"
                                  className={`nav-link ${
                                    currentPath == "/blog/no-sidebar/" &&
                                    "active"
                                  }`}
                                >
                                  Blog No Sidebar
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="has-children">
                            <Link href="#">Blog Details</Link>
                            <span className="menu-expand">
                              <i className="las la-angle-down"></i>
                            </span>

                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/blog/details-left-sidebar/"
                                  className={`nav-link ${
                                    currentPath ==
                                      "/blog/details-left-sidebar/" && "active"
                                  }`}
                                >
                                  Blog Details Left Sidebar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/blog/details-right-sidebar/"
                                  className={`nav-link ${
                                    currentPath ==
                                      "/blog/details-right-sidebar/" && "active"
                                  }`}
                                >
                                  Blog Details Right Sidebar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/blog/details-no-sidebar/"
                                  className={`nav-link ${
                                    currentPath ==
                                      "/blog/details-no-sidebar/" && "active"
                                  }`}
                                >
                                  Blog Details No Sidebar
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="has-children">
                        <Link href="#">Pages</Link>
                        <span className="menu-expand">
                          <i className="las la-angle-down"></i>
                        </span>

                        <ul className="sub-menu">
                          <li>
                            <Link
                              href="/about-us/"
                              className={`nav-link ${
                                currentPath == "/about-us/" && "active"
                              }`}
                            >
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/contact-us/"
                              className={`nav-link ${
                                currentPath == "/contact-us/" && "active"
                              }`}
                            >
                              Contact Us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/team/"
                              className={`nav-link ${
                                currentPath == "/team/" && "active"
                              }`}
                            >
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/pricing-plan/"
                              className={`nav-link ${
                                currentPath == "/pricing-plan/" && "active"
                              }`}
                            >
                              Pricing Plan
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/testimonial/"
                              className={`nav-link ${
                                currentPath == "/testimonial/" && "active"
                              }`}
                            >
                              Testimonials
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/faq/"
                              className={`nav-link ${
                                currentPath == "/faq/" && "active"
                              }`}
                            >
                              FAQ
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/privacy-policy/"
                              className={`nav-link ${
                                currentPath == "/privacy-policy/" && "active"
                              }`}
                            >
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/terms-condition/"
                              className={`nav-link ${
                                currentPath == "/terms-condition/" && "active"
                              }`}
                            >
                              Terms & Condition
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/404/"
                              className={`nav-link ${
                                currentPath == "/404/" && "active"
                              }`}
                            >
                              404
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          href="/contact-us/"
                          className={`nav-link ${
                            currentPath == "/contact-us/" && "active"
                          }`}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mobile-bar-wrap">
                  <div className="shopcart xl-none" onClick={toggleCart}>
                    <button type="button">
                      <i className="ri-shopping-cart-line"></i>
                      <span className="item-amt">1</span>
                    </button>
                    <span className="cart-total">$0.00</span>
                  </div>
                  <div className="sidebar-menu xl-none" onClick={toggleContact}>
                    <span className="ri-menu-3-line"></span>
                  </div>
                  <div className="mobile-top-bar xl-none" onClick={toggleAuth}>
                    <i className="las la-sliders-h"></i>
                  </div>
                  <div
                    className="mobile-menu xl-none"
                    onClick={toggleMobileMenu}
                  >
                    <i className="las la-bars"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 order-lg-2 order-md-1 md-none">
                <div className="header-bottom-right">
                  <div className="contact-box">
                    <span className="ri-phone-line"></span>
                    <p>
                      Contact Now <br />
                      <a href="tel:+15143214567">+1 (514) 321-4567</a>
                    </p>
                  </div>
                  <div className="sidebar-menu" onClick={toggleContact}>
                    <span className="ri-menu-3-line"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={displayContact ? "contact-popup open" : "contact-popup"}>
        <div className="contact-popup-title">
          <h2>Contact Us</h2>
          <button type="button" className="close-popup" onClick={toggleContact}>
            <i className="ri-close-fill"></i>
          </button>
        </div>
        <div className="contact-popup-wrap">
          <div className="contact-address">
            <div className="contact-icon">
              <i className="ri-map-pin-fill"></i>
            </div>
            <div className="contact-info">
              <h5>San Francisco,USA</h5>
              <p>Address: 123 westearn Road,LA</p>
              <p>
                Phone: <a href="tel:2132008224">213-200-8224</a>
                <a href="tel:2132008225">213-200-8225</a>
              </p>

              <h5 className="mt-30 mb-20">Follow Us On:</h5>
              <ul className="social-profile v1">
                <li>
                  <a target="_blank" href="https://facebook.com">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://linkedin.com">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://instagram.com">
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="comp_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
          </div>
        </div>
      </div>

      <div className={display ? "cart-popup open" : "cart-popup"}>
        <div className="cart-popup-title">
          <h2>Shopping Cart (4)</h2>
          <button type="button" className="close-popup" onClick={toggleCart}>
            <i className="las la-times"></i>
          </button>
        </div>

        <div className="cart-popup-item-wrap">
          <div className="cart-popup-item">
            <div className="cart-popup-item-img">
              <img src="/images/product/cart-thumb-1.jpg" alt="Image" />
            </div>
            <div className="cart-popup-item-name">
              <p>Large Suitcase</p>
              <div className="product-quantity">
                <div className="qtySelector">
                  <span className="ri-subtract-line decreaseQty"></span>
                  <input
                    type="text"
                    className="qtyValue"
                    defaultValue="1"
                    onChange={(e) => e}
                  />
                  <span className="las la-plus increaseQty"></span>
                </div>
              </div>
            </div>
            <div className="cart-popup-item-price">
              <button type="button">
                <i className="las la-times"></i>
              </button>
              <span>$148.00</span>
            </div>
          </div>

          <div className="cart-popup-item">
            <div className="cart-popup-item-img">
              <img src="/images/product/cart-thumb-2.jpg" alt="Image" />
            </div>
            <div className="cart-popup-item-name">
              <p>Leather Backpack</p>
              <div className="product-quantity">
                <div className="qtySelector">
                  <span className="ri-subtract-line decreaseQty"></span>
                  <input
                    type="text"
                    className="qtyValue"
                    defaultValue="1"
                    onChange={(e) => e}
                  />
                  <span className="las la-plus increaseQty"></span>
                </div>
              </div>
            </div>
            <div className="cart-popup-item-price">
              <button type="button">
                <i className="las la-times"></i>
              </button>
              <span>$148.00</span>
            </div>
          </div>

          <div className="cart-popup-item">
            <div className="cart-popup-item-img">
              <img src="/images/product/cart-thumb-3.jpg" alt="Image" />
            </div>
            <div className="cart-popup-item-name">
              <p>Orange Suitcase</p>
              <div className="product-quantity">
                <div className="qtySelector">
                  <span className="ri-subtract-line decreaseQty"></span>
                  <input
                    type="text"
                    className="qtyValue"
                    defaultValue="1"
                    onChange={(e) => e}
                  />
                  <span className="las la-plus increaseQty"></span>
                </div>
              </div>
            </div>
            <div className="cart-popup-item-price">
              <button type="button">
                <i className="las la-times"></i>
              </button>
              <span>$148.00</span>
            </div>
          </div>
        </div>

        <div className="cart-popup-total-wrap">
          <div className="cart-popup-total">
            <h5>TOTAL</h5>
            <h5>$444.00</h5>
          </div>

          <Link href="/shop/left-sidebar" className="btn v4">
            Continue Shopping
          </Link>

          <Link href="/checkout" className="btn v3">
            Check Out
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarThree;

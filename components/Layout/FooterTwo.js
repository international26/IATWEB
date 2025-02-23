import React from "react";
import Link from "next/link";

const FooterTwo = () => {
  return (
    <>
      <footer className="footer-wrap style1">
        <div className="container">
          <div className="footer-top pt-100 pb-70">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">About</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/about-us">Company</Link>
                    </li>
                    <li>
                      <Link href="/about-us">Careers</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Help Center</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy</Link>
                    </li>
                    <li>
                      <Link href="/terms-condition">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Services</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/tours">Hotel Booking</Link>
                    </li>
                    <li>
                      <Link href="/tours">Car Rental</Link>
                    </li>
                    <li>
                      <Link href="/tours">Bus Ticket</Link>
                    </li>
                    <li>
                      <Link href="/tours">Flight Booking</Link>
                    </li>
                    <li>
                      <Link href="/tours">Restaurant</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Quick Links</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/tours">Franch Experience</Link>
                    </li>
                    <li>
                      <Link href="/tours">Ancient Rome Discover</Link>
                    </li>
                    <li>
                      <Link href="/tours">Get Into Naxos Island</Link>
                    </li>
                    <li>
                      <Link href="/tours">Vietnam Island Experience</Link>
                    </li>
                    <li>
                      <Link href="/tours">Restaurant</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Pay Safely With US</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa, quaerat nam, similique assumenda quam dolor ratione
                    voluptatibus iure dicta pariatur.
                  </p>
                  <ul className="payment-option">
                    <li>
                      <img src="/images/paypal.png" alt="Image" />
                    </li>
                    <li>
                      <img src="/images/american-express.png" alt="Image" />
                    </li>
                    <li>
                      <img src="/images/visa.png" alt="Image" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-4">
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

              <div className="col-lg-6 col-md-8">
                <div className="copyright-text">
                  <p>
                    Copyright <span className="las la-copyright"></span> Detour.
                    All Rights Reserved By{" "}
                    <a href="https://themeforest.net/user/hibootstrap/portfolio">
                      Hibootstrap
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;

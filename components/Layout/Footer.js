import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrap style1 bg-heath">
        <div className="container">
          <div className="footer-top pt-100 pb-70">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">About</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="/about-us">Company</a>
                    </li>
                    <li>
                      <a href="/faq">Faq</a>
                    </li>
                    <li>
                      <a href="/contact-us">Help Center</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy</a>
                    </li>
                    <li>
                      <a href="/terms-condition">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Transfers</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="/checkout">Private Transfers</a>
                    </li>
                    <li>
                      <a href="/checkout">Luxury Transfers</a>
                    </li>
                    <li>
                      <a href="/checkout">Punta Cana Airport</a>
                    </li>
                    <li>
                      <a href="/checkout">Santo Domingo Airport</a>
                    </li>
                    <li>
                      <a href="/checkout">La Romana Airport</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Security & Certificates</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="footer-menu">
                        <li>
                          <a href="https://www.sitelock.com/free-website-scan/?domain=internationalairporttransfers.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/Sitelock.png" alt="Sitelock" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pcisecuritystandards.org/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/pcj.png" alt="PCJ" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="footer-menu">
                        <li>
                          <a href="https://www.sslshopper.com/ssl-checker.html#hostname=https://www.internationalairporttransfers.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/SSL.png" alt="SSL" />
                          </a>
                        </li>
						
						<li>
                          <a href="https://radar.cloudflare.com/scan/d2810aab-8633-4a23-9e80-66f7d19b4857/summary" target="_blank" rel="noopener noreferrer">
                            <img src="/images/CLOUD.png" alt="SSL" />
                          </a>
                        </li>
						
						
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget text-center mx-auto">
                  <h4 className="footer-widget-title">Pay Safely With US</h4>
                  <p>
                    Embark on a worry-free journey. Our commitment to safety ensures your peace of mind from booking through to your destination. Experience hassle-free payments via our secure online platform. With Pay Safely With international airport transfers, your travel experience begins and ends with security and convenience.
                  </p>
                  <ul className="payment-option">
                    <li>
                      <img src="/images/paypal.png" alt="PayPal" />
                    </li>
                    <li>
                      <img src="/images/american-express.png" alt="American Express" />
                    </li>
                    <li>
                      <img src="/images/visa.png" alt="Visa" />
                    </li>
                    <li>
                      <img src="/images/mastercard.png" alt="MasterCard" />
                    </li>
                    <li>
                      <img src="/images/jcb.png" alt="JCB" />
                    </li>
                    <li>
                      <img src="/images/discovery.png" alt="Discovery" />
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
                    <a target="_blank" href="">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="/">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-8">
                <div className="copyright-text">
                  <p>
                    Copyright 2024 <span className="las la-copyright"></span>
                    All Rights Reserved By
                    <a href="https://internationalairporttransfers.com/">
                      {" "}
                      international airport transfers
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

export default Footer;

import React from "react";
import Link from "next/link";

const Service = ({ imgOne, imgTwo, imgThree, imgFour }) => {
  return (
    <>
      <section className="service-wrap pt-100 pb-70">
        <div className="container">
          <div className="row mb-40 align-items-end">
            <div className="col-md-8">
              <div className="section-title style1 sm-center">
                <span>Our All</span>
                <h2>Provided Services</h2>
              </div>
            </div>
            <div className="col-md-4 text-md-end sm-none">
              <Link href="/tours" className="btn v2">
                All Services <i className="ri-logout-circle-r-line"></i>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="service-item style1">
                <div className="service-img">
                  <Link href="/tours">
                    <img src={imgOne} alt="Image" />
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="/tours">Car Rental Services</Link>
                  </h4>
                  <p>100+ Listing</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="service-item style1">
                <div className="service-img">
                  <Link href="/tours">
                    <img src={imgTwo} alt="Image" />
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="/tours">Hotel Booking</Link>
                  </h4>
                  <p>78+ Listing</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="service-item style1">
                <div className="service-img">
                  <Link href="/tours">
                    <img src={imgThree} alt="Image" />
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="/tours">Restaurent</Link>
                  </h4>
                  <p>50+ Listing</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="service-item style1">
                <div className="service-img">
                  <Link href="/tours">
                    <img src={imgFour} alt="Image" />
                  </Link>
                </div>
                <div className="service-info">
                  <h4>
                    <Link href="/tours">Club & Bar</Link>
                  </h4>
                  <p>90+ Listing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row lg-none mb-30">
            <div className="col-12 text-center">
              <Link href="/tours" className="btn v2">
                All Services <i className="ri-logout-circle-r-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;

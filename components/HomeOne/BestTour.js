import React from "react";
import Link from "next/link";

const BestTour = () => {
  return (
    <>
      <section className="best-tour-wrap pt-100 pb-70">
        <div className="container">
          <div className="row mb-40 align-items-end">
            <div className="col-md-8">
              <div className="section-title style1 sm-center">
                <span>Available</span>
                <h2>Best Tour Of The Year</h2>
              </div>
            </div>

            <div className="col-md-4 text-md-end sm-none">
              <Link href="/" className="btn v2">
                View ALL Tour <i className="ri-logout-circle-r-line"></i>
              </Link>
            </div>
          </div>

          <div className="row justify-content-center">
         
         
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
  <div className="best-tour-item style1">
    <div className="best-tour-img">
      <Link href="https://api.whatsapp.com/send?phone=18093433176&text=Hello%2C%20could%20you%20give%20me%20information%20about%20the%20tour%20of%20Party%20Bus%20Night%20Tour%3F">
        <img src="/images/tour/tour-7.jpg" alt="Image" />
      </Link>
    </div>
    <div className="best-tour-info">
      <h4>
        <Link href="https://api.whatsapp.com/send?phone=18093433176&text=Hello%2C%20could%20you%20give%20me%20information%20about%20the%20tour%20of%20Party%20Bus%20Night%20Tour%3F">Party Bus Night Tour</Link>
      </h4>
      {/* Nueva descripción debajo del título */}
      <p className="tour-description">
      Private transportation, Pickup from hotels, DJ, bartender, and host to liven up the night, Bar with premium drinks, Wi-Fi and air conditioning on the bus, Visit to the best nightclubs, Music connected via Bluetooth, Entertainment and staff for endless fun.
      </p>
      <div className="feature-tour-meta">
        <div className="feature-tour-time">
          <i className="ri-time-line"></i>4 Hours
        </div>
        <div className="feature-tour-review">
          <span className="rating">5.0</span>
          <i className="ri-star-fill"></i>
          <span className="total-review">(200)</span>
        </div>
      </div>
      <div className="tour-price">
        <span>$140 USD</span>
        <span className="discount">$250 USD</span>
      </div>
    </div>
  </div>
  
  {/* Estilos CSS dentro del archivo JSX */}
  <style jsx>{`
    .tour-description {
      font-size: 14px;
      color: #555;
      margin-top: 10px;
      line-height: 1.5;
    }
  `}</style>
</div>







            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="best-tour-item style1">
                <div className="best-tour-img">
                  <Link href="https://api.whatsapp.com/send?phone=18093433176&text=Hello%2C%20could%20you%20give%20me%20information%20about%20the%20tour%20of%20Safari%20Tour%3F">
                    <img src="/images/tour/tour-8.jpg" alt="Image" />
                  </Link>
                </div>
                <div className="best-tour-info">
                  <h4>
                    <Link href="https://api.whatsapp.com/send?phone=18093433176&text=Hello%2C%20could%20you%20give%20me%20information%20about%20the%20tour%20of%20Safari%20Tour%3F">Safari Tour</Link>
                  </h4>
                  {/* Nueva descripción debajo del título */}
      <p className="tour-description">
      Round trip transportation, Pickup from hotels, Tasting of fresh fruits, Visit to local plantations, Tour of a typical house, Visit to the Basilica of Higüey, Traditional Dominican lunch, Guide and staff to accompany you throughout the tour.
      </p>
                  <div className="feature-tour-meta">
                    <div className="feature-tour-time">
                      <i className="ri-time-line"></i>6 Hours
                    </div>
                    <div className="feature-tour-review">
                      <span className="rating">4.9</span>
                      <i className="ri-star-fill"></i>
                      <span className="total-review">(200)</span>
                    </div>
                  </div>
                  <div className="tour-price">
                    <span>Adult $89</span>
                    <span className="discount">$100</span>
                  </div>
                  <div className="tour-price">
                    <span>Child $55</span>
                    <span className="discount">$80</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="best-tour-item style1">
                <div className="best-tour-img">
                  <Link href="https://api.whatsapp.com/send?phone=18093433176&text=Hello%2C%20could%20you%20give%20me%20information%20about%20the%20tour%20of%20Buggies%20Night%3F">
                    <img src="/images/tour/tour-9.jpg" alt="Image" />
                  </Link>
                </div>
                <div className="best-tour-info">
                  <h4>
                    <Link href="https://api.whatsapp.com/send?phone=18093433176&text=Hello%2C%20could%20you%20give%20me%20information%20about%20the%20tour%20of%20Buggies%20Night%3F">Buggies Night</Link>
                  </h4>
                  {/* Nueva descripción debajo del título */}
      <p className="tour-description">
      Round trip transportation, Pickup from hotels, Exciting ride in Buggies, Entrance to Domitai, Spectacular Taíno Show, Swimming in a Cenote, Visit to a Typical Shop, Specialized equipment included.
      </p>
                  <div className="feature-tour-meta">
                    <div className="feature-tour-time">
                      <i className="ri-time-line"></i>4 hours
                    </div>
                    <div className="feature-tour-review">
                      <span className="rating">4.8</span>
                      <i className="ri-star-fill"></i>
                      <span className="total-review">(100)</span>
                    </div>
                  </div>
                  <div className="tour-price">
                    <span>$125</span>
                    <span className="discount">$150</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="best-tour-item style1">
                <div className="best-tour-img">
                  <Link href="https://api.whatsapp.com/send?phone=18093433176&text=Hello%2C%20could%20you%20give%20me%20information%20about%20the%20tour%20of%20Saona%20Premium%3F">
                    <img src="/images/tour/tour-10.jpg" alt="Image" />
                  </Link>
                </div>
                <div className="best-tour-info">
                  <h4>
                    <Link href="https://api.whatsapp.com/send?phone=18093433176&text=Hello%2C%20could%20you%20give%20me%20information%20about%20the%20tour%20of%20Saona%20Premium%3F">Saona Premium</Link>
                  </h4>
                  {/* Nueva descripción debajo del título */}
      <p className="tour-description">
      Private transportation, Hotel pick-up, Ride on a speedboat, Stop at the spectacular Natural Pool, Customized lunch, Open bar, Time to relax and enjoy on Saona Island, Entertainment and staff for fun.
      </p>
                  <div className="feature-tour-meta">
                    <div className="feature-tour-time">
                      <i className="ri-time-line"></i>
                      9 hours
                    </div>
                    <div className="feature-tour-review">
                      <span className="rating">5.0</span>
                      <i className="ri-star-fill"></i>
                      <span className="total-review">(200)</span>
                    </div>
                  </div>
                  <div className="tour-price">
                    <span>Adult $110</span>
                    <span className="discount">$130</span>
                  </div>
                  <div className="tour-price">
                    <span>Child $80</span>
                    <span className="discount">$100</span>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestTour;

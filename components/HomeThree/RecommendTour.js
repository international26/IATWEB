import React from "react";
import Link from "next/link";

const RecommendTour = () => {
  return (
    <>
      <section className="recommend-tour-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center style4 mb-40">
                <span>Our All</span>
                <h2>Recommended Destinations</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="rec-wrap">
                <div className="recommend-tour-item style3">
                  <div
                    className="recommend-tour-bg bg-f "
                    style={{
                      backgroundImage: `url(/images/tour/rec_tour_1.jpg)`,
                    }}
                  ></div>
                  <div className="recommend-tour-info">
                    <h4>
                      <Link href="/tours-details">Australia</Link>
                    </h4>
                    <p>27+ Place</p>
                    <Link href="/tours-details" className="link">
                      Explore <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>

                <div className="recommend-tour-item style3">
                  <div
                    className="recommend-tour-bg bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/rec_tour_2.jpg)`,
                    }}
                  ></div>
                  <div className="recommend-tour-info">
                    <h4>
                      <Link href="/tour/details">Newzealand</Link>
                    </h4>
                    <p>15+ Place</p>
                    <Link href="/tours-details" className="link">
                      Explore <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>

                <div className="recommend-tour-item style3">
                  <div
                    className="recommend-tour-bg bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/rec_tour_3.jpg)`,
                    }}
                  ></div>
                  <div className="recommend-tour-info">
                    <h4>
                      <Link href="/tour/details">Egypt</Link>
                    </h4>
                    <p>20+ Place</p>
                    <Link href="/tours-details" className="link">
                      Explore <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>

                <div className="recommend-tour-item style3">
                  <div
                    className="recommend-tour-bg bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/rec_tour_4.jpg)`,
                    }}
                  ></div>
                  <div className="recommend-tour-info">
                    <h4>
                      <Link href="/tour/details">Africa</Link>
                    </h4>
                    <p>30+ Place</p>
                    <Link href="/tours-details" className="link">
                      Explore <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>

                <div className="recommend-tour-item style3">
                  <div
                    className="recommend-tour-bg bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/rec-tour-5.jpg)`,
                    }}
                  ></div>
                  <div className="recommend-tour-info">
                    <h4>
                      <Link href="/tour/details">Africa</Link>
                    </h4>
                    <p>15+ Place</p>
                    <Link href="/tours-details" className="link">
                      Explore <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>

                <div className="recommend-tour-item style3">
                  <div
                    className="recommend-tour-bg bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/rec-tour-6.jpg)`,
                    }}
                  ></div>
                  <div className="recommend-tour-info">
                    <h4>
                      <Link href="/tour/details">Africa</Link>
                    </h4>
                    <p>27+ Place</p>
                    <Link href="/tours-details" className="link">
                      Explore <i className="ri-logout-circle-r-line"></i>
                    </Link>
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

export default RecommendTour;

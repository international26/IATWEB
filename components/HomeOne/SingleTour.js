import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const SingleTour = () => {
  return (
    <>
      <div className="single-tour z-0">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-md-12">
              <Swiper
                autoHeight={true}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="single-tour-slider"
              >
                <SwiperSlide>
                  <div
                    className="single-tour-item bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/single-tour-1.jpg)`,
                    }}
                  >
                    <div className="single-tour-info style1">
                      <div className="box">
                        <div className="tour-shape-two sm-none">
                          <img src="/images/tour/shape-2.png" alt="Image" />
                        </div>
                        <span className="tour-discount">Up To 40% Off</span>
                        <div className="feature-tour-meta">
                          <div className="feature-tour-time">
                            <i className="ri-time-line"></i>
                            10 days
                          </div>
                          <div className="feature-tour-review">
                            <span className="rating">4.8</span>
                            <i className="ri-star-fill"></i>
                            <span className="total-review">(200)</span>
                          </div>
                        </div>
                        <div className="tour-details">
                          <Link href="/tour/details">
                            <h4>Bali Experience</h4>
                          </Link>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum.
                          </p>
                        </div>

                        <div className="tour-btn">
                          <Link href="/tour/details" className="btn v3 ms-3">
                            Book Now <i className="ri-logout-circle-r-line"></i>
                          </Link>
                          <Link href="/tour/details" className="btn v4">
                            Tour Details
                            <i className="ri-logout-circle-r-line"></i>
                          </Link>
                        </div>

                        <div className="swiper-pagination tours-pagination">
                          1 / 3
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="single-tour-item bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/single-tour-2.jpg)`,
                    }}
                  >
                    <div className="single-tour-info style1">
                      <div className="box">
                        <div className="tour-shape-two sm-none">
                          <img src="/images/tour/shape-2.png" alt="Image" />
                        </div>
                        <span className="tour-discount">Up To 30% Off</span>
                        <div className="feature-tour-meta">
                          <div className="feature-tour-time">
                            <i className="ri-time-line"></i>3 days
                          </div>
                          <div className="feature-tour-review">
                            <span className="rating">4.85</span>
                            <i className="ri-star-fill"></i>
                            <span className="total-review">(100)</span>
                          </div>
                        </div>
                        <div className="tour-details">
                          <Link href="/tour/details">
                            <h4>Hackon Vally, USA</h4>
                          </Link>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum.
                          </p>
                        </div>

                        <div className="tour-btn">
                          <Link href="/tour/details" className="btn v3 ms-3">
                            Book Now <i className="ri-logout-circle-r-line"></i>
                          </Link>
                          <Link href="/tour/details" className="btn v4">
                            Tour Details
                            <i className="ri-logout-circle-r-line"></i>
                          </Link>
                        </div>

                        <div className="swiper-pagination tours-pagination">
                          2 / 3
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="single-tour-item bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/single-tour-3.jpg)`,
                    }}
                  >
                    <div className="single-tour-info style1">
                      <div className="box">
                        <div className="tour-shape-two sm-none">
                          <img src="/images/tour/shape-2.png" alt="Image" />
                        </div>
                        <span className="tour-discount">Up To 40% Off</span>
                        <div className="feature-tour-meta">
                          <div className="feature-tour-time">
                            <i className="ri-time-line"></i>
                            10 days
                          </div>
                          <div className="feature-tour-review">
                            <span className="rating">4.8</span>
                            <i className="ri-star-fill"></i>
                            <span className="total-review">(200)</span>
                          </div>
                        </div>
                        <div className="tour-details">
                          <Link href="/tour/details">
                            <h4>Vietnam Experience</h4>
                          </Link>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum.
                          </p>
                        </div>

                        <div className="tour-btn">
                          <Link href="/tour/details" className="btn v3 ms-3">
                            Book Now <i className="ri-logout-circle-r-line"></i>
                          </Link>
                          <Link href="/tour/details" className="btn v4">
                            Tour Details
                            <i className="ri-logout-circle-r-line"></i>
                          </Link>
                        </div>

                        <div className="swiper-pagination tours-pagination">
                          3 / 3
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTour;

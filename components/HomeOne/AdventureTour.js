import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const AdventureTour = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="adventure-tour-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title style1 mb-40">
                  <span>Plan Your Next</span>
                  <h2>Adventure In Summer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <Swiper
            autoHeight={true}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="adventure-tour-slider"
          >
            <SwiperSlide>
              <div
                className="tour-details-item bg-f style1"
                style={{
                  backgroundImage: `url(/images/tour/single-tour-4.jpg)`,
                }}
              >
                <div className="single-tour-info style2">
                  <div className="tour-shape-two sm-none">
                    <img src="/images/tour/shape-5.png" alt="Image" />
                  </div>
                  <span className="tour-discount">Up To 30% Off</span>
                  <div className="feature-tour-meta">
                    <div className="feature-tour-time">
                      <i className="ri-time-line"></i>2 days
                    </div>
                    <div className="feature-tour-review">
                      <span className="rating">4.8</span>
                      <i className="ri-star-fill"></i>
                      <span className="total-review">(99)</span>
                    </div>
                  </div>
                  <div className="tour-details">
                    <Link href="/tour/details">
                      <h4>Sydney Tour</h4>
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>

                  <div className="tour-btn">
                    <Link href="/tour/details" className="btn v3 me-3">
                      Book Now <i className="ri-logout-circle-r-line"></i>
                    </Link>
                    <Link href="/tour/details" className="btn v4 border">
                      Tour Details
                      <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="tour-details-item bg-f style1"
                style={{
                  backgroundImage: `url(/images/tour/single-tour-5.jpg)`,
                }}
              >
                <div className="single-tour-info style2">
                  <div className="tour-shape-two sm-none">
                    <img src="/images/tour/shape-5.png" alt="Image" />
                  </div>
                  <span className="tour-discount">Up To 50% Off</span>
                  <div className="feature-tour-meta">
                    <div className="feature-tour-time">
                      <i className="ri-time-line"></i>5 days
                    </div>
                    <div className="feature-tour-review">
                      <span className="rating">4.8</span>
                      <i className="ri-star-fill"></i>
                      <span className="total-review">(200)</span>
                    </div>
                  </div>

                  <div className="tour-details">
                    <Link href="/tour/details">
                      <h4>Makao Tour</h4>
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>

                  <div className="tour-btn">
                    <Link href="/tour/details" className="btn v3 me-3">
                      Book Now <i className="ri-logout-circle-r-line"></i>
                    </Link>
                    <Link href="/tour/details" className="btn v4 border">
                      Tour Details
                      <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="tour-details-item bg-f style1"
                style={{
                  backgroundImage: `url(/images/tour/single-tour-6.jpg)`,
                }}
              >
                <div className="single-tour-info style2">
                  <div className="tour-shape-two sm-none">
                    <img src="/images/tour/shape-5.png" alt="Image" />
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
                      <h4>Thailand Experience</h4>
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>

                  <div className="tour-btn">
                    <Link href="/tour/details" className="btn v3 me-3">
                      Book Now <i className="ri-logout-circle-r-line"></i>
                    </Link>
                    <Link href="/tour/details" className="btn v4 border">
                      Tour Details
                      <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="tour-details-item bg-f style1"
                style={{
                  backgroundImage: `url(/images/tour/single-tour-7.jpg)`,
                }}
              >
                <div className="single-tour-info style2">
                  <div className="tour-shape-two sm-none">
                    <img src="/images/tour/shape-5.png" alt="Image" />
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
                      <h4>Slora Experience</h4>
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>

                  <div className="tour-btn">
                    <Link href="/tour/details" className="btn v3 me-3">
                      Book Now <i className="ri-logout-circle-r-line"></i>
                    </Link>
                    <Link href="/tour/details" className="btn v4 border">
                      Tour Details
                      <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AdventureTour;

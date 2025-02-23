import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const TourSlider = () => {
  return (
    <>
      <div className="tour-slider-wrap pb-100">
        <div className="tour-slider-v3">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 1.5,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="tour-slider-v3"
          >
            <SwiperSlide>
              <div
                className="tour-slide_item bg-f"
                style={{
                  backgroundImage: `url(/images/tour/single-tour-1.jpg)`,
                }}
              >
                <span className="tour-discount style4">Up To 40% Off</span>
                <div className="tour-slide-info">
                  <div className="single-tour-info style3">
                    <div className="feature-tour-meta justify-content-center">
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
                      <h4>Bali Experience</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum.
                      </p>
                      <Link href="/tour/details" className="link">
                        Tour Details <i className="ri-logout-circle-r-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="tour-slide_item bg-f"
                style={{
                  backgroundImage: `url(/images/tour/single-tour-2.jpg)`,
                }}
              >
                <span className="tour-discount style4">Up To 20% Off</span>
                <div className="tour-slide-info">
                  <div className="single-tour-info style3">
                    <div className="feature-tour-meta justify-content-center">
                      <div className="feature-tour-time">
                        <i className="ri-time-line"></i>4 days
                      </div>
                      <div className="feature-tour-review">
                        <span className="rating">4.8</span>
                        <i className="ri-star-fill"></i>
                        <span className="total-review">(230)</span>
                      </div>
                    </div>
                    <div className="tour-details">
                      <h4>Navoli Vally</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum.
                      </p>
                      <Link href="/tour/details" className="link">
                        Tour Details <i className="ri-logout-circle-r-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="tour-slide_item bg-f"
                style={{
                  backgroundImage: `url(/images/tour/single-tour-3.jpg)`,
                }}
              >
                <span className="tour-discount style4">Up To 10% Off</span>
                <div className="tour-slide-info">
                  <div className="single-tour-info style3">
                    <div className="feature-tour-meta justify-content-center">
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
                      <h4>Vietnam Experience</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonum.
                      </p>
                      <Link href="/tour/details" className="link">
                        Tour Details <i className="ri-logout-circle-r-line"></i>
                      </Link>
                    </div>
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

export default TourSlider;

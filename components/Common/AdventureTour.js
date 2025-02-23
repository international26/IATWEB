import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const AdventureTour = ({ radiusStyle, shape, pb44 }) => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <section className="adventure-tour-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title style4 text-center mb-40">
                <span>PLAN YOUR NEXT</span>
                <h2>Adventure In Summer</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Swiper
        autoHeight={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
          },
        }}
        modules={[Pagination]}
        className={`tour-slider-v1 ${pb44}`}
      >
        <SwiperSlide>
          <div
            className="tour-details-item bg-f style1"
            style={{
              backgroundImage: `url(/images/tour/single-tour-4.jpg)`,
            }}
          >
            <span className="tour-discount style4">Up To 30% Off</span>
            <div className="single-tour-info  style4">
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
                <h4>Sydney Tour</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
              <div className="tour-btn">
                <Link href="/tour/details" className="btn v3 me-3">
                  Book Now <i className="ri-logout-circle-r-line"></i>{" "}
                </Link>
                <Link href="/tour/details" className="btn v4 me-3">
                  Tour Details <i className="ri-logout-circle-r-line"></i>{" "}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="tour-details-item bg-f style1"
            style={{ backgroundImage: `url(/images/tour/single-tour-5.jpg)` }}
          >
            <span className="tour-discount style4">Up To 50% Off</span>
            <div className="single-tour-info  style4">
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
                <h4>Makao Tour</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
              <div className="tour-btn">
                <Link href="/tour/details" className="btn v3 me-3">
                  Book Now <i className="ri-logout-circle-r-line"></i>{" "}
                </Link>
                <Link href="/tour/details" className="btn v4 me-3">
                  Tour Details <i className="ri-logout-circle-r-line"></i>{" "}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="tour-details-item bg-f style1"
            style={{ backgroundImage: `url(/images/tour/single-tour-6.jpg)` }}
          >
            <span className="tour-discount  style4">Up To 40% Off</span>
            <div className="single-tour-info style4">
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
                <h4>Thailand Experience</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
              <div className="tour-btn">
                <Link href="/tour/details" className="btn v3 me-3">
                  Book Now <i className="ri-logout-circle-r-line"></i>{" "}
                </Link>
                <Link href="/tour/details" className="btn v4 me-3">
                  Tour Details <i className="ri-logout-circle-r-line"></i>{" "}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="tour-details-item bg-f style1"
            style={{ backgroundImage: `url(/images/tour/single-tour-6.jpg)` }}
          >
            <span className="tour-discount style4">Up To 40% Off</span>
            <div className="single-tour-info  style4">
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
                <h4>Slora Experience</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
              <div className="tour-btn">
                <Link href="/tour/details" className="btn v3 me-3">
                  Book Now <i className="ri-logout-circle-r-line"></i>{" "}
                </Link>
                <Link href="/tour/details" className="btn v4 me-3">
                  Tour Details <i className="ri-logout-circle-r-line"></i>{" "}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AdventureTour;

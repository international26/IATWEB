import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const About = ({ bgColor, shape, featureStyle, ptb100 }) => {
  return (
    <>
      <section className={`about-wrap pb-100 ${ptb100} ${bgColor}`}>
        {shape && (
          <>
            <div className="shape-10 sm-none">
              <img src="/images/shape-10.png" alt="Image" />
            </div>
            <div className="shape-11 sm-none">
              <img src="/images/shape-10.png" alt="Image" />
            </div>
          </>
        )}

        <div className="container">
          <div className="row gx-5 align-item-center">
            <div className="col-lg-6">
              <div className="section-title style6 sm-center mb-40">
                <span>ABOUT US</span>
                <h2>We Provide Best Deals</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.
                </p>
              </div>

              <div className="about-features">
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-icon">
                    <i className="flaticon-customer-care"></i>
                  </div>
                  <div className="about-feature-text">
                    <h4>Quality Services Ensure</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>

                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-icon">
                    <i className="flaticon-support"></i>
                  </div>
                  <div className="about-feature-text">
                    <h4>Customer Care</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>

                <div className={`about-feature-item ${featureStyle}`}>
                  <div className="about-feature-icon">
                    <i className="flaticon-tour-guide"></i>
                  </div>
                  <div className="about-feature-text">
                    <h4>Experience Guides</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial-wrap">
                <Swiper
                  autoHeight={true}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="testimonial-slider-two"
                >
                  <SwiperSlide>
                    <div className="testimonial-item new-design">
                      <div
                        className="testimonial-bg bg-f"
                        style={{
                          backgroundImage: `url(/images/testimonial/testimonial-bg-4.jpg)`,
                        }}
                      ></div>
                      <div className="client-info">
                        <div className="client-name">
                          <h5>Tony Stark</h5>
                          <span>USA</span>
                        </div>
                        <div className="client-quote">
                          <p>
                            "Lorem, ipsum, dolor sit amet consectetur
                            adipisicing elit. Quidem adipisci amet perferendis,
                            ipsum beatae, vero iste veritatis, neque, maxime
                            suscipit molestias. Perferendis obcaecati saepe "
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial-item new-design">
                      <div
                        className="testimonial-bg bg-f"
                        style={{
                          backgroundImage: `url(/images/testimonial/testimonial-bg-5.jpg)`,
                        }}
                      ></div>
                      <div className="client-info">
                        <div className="client-name">
                          <h5>Carlos Misith</h5>
                          <span>Canada </span>
                        </div>
                        <div className="client-quote">
                          <p>
                            "Lorem, ipsum, dolor sit amet consectetur
                            adipisicing elit. Quidem adipisci amet perferendis,
                            ipsum beatae, vero iste veritatis, neque, maxime
                            suscipit molestias. Perferendis obcaecati saepe "
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial-item new-design">
                      <div
                        className="testimonial-bg bg-f"
                        style={{
                          backgroundImage: `url(/images/testimonial/testimonial-bg-6.jpg)`,
                        }}
                      ></div>
                      <div className="client-info">
                        <div className="client-name">
                          <h5>Jhon Doe</h5>
                          <span>USA</span>
                        </div>
                        <div className="client-quote">
                          <p>
                            "Lorem, ipsum, dolor sit amet consectetur
                            adipisicing elit. Quidem adipisci amet perferendis,
                            ipsum beatae, vero iste veritatis, neque, maxime
                            suscipit molestias. Perferendis obcaecati saepe "
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

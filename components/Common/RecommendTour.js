import Link from "next/link";

const RecommendTour = ({ title, subTitle, bgStyle }) => {
  return (
    <>
      <section className={`recommend-tour-area ${bgStyle} ptb-100`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center style4 mb-40">
                {title && <span>{title}</span>}

                <h2>{subTitle}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="rec-wrap">
                <div className="recommend-tour-item style2">
                  <div
                    className="recommend-tour-bg bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/rec_tour_1.jpg)`,
                    }}
                  ></div>
                  <div className="recommend-tour-info">
                    <p>27+ Place</p>
                    <h4>
                      <Link href="/tour/details">Australia</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <Link href="/tour/details" className="link">
                      Explore <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>

                <div className="recommend-tour-item style2">
                  <div
                    className="recommend-tour-bg bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/rec_tour_2.jpg)`,
                    }}
                  ></div>
                  <div className="recommend-tour-info">
                    <p>15+ Place</p>
                    <h4>
                      <Link href="/tour/details">Newzealand</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <Link href="/tour/details" className="link">
                      Explore <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>

                <div className="recommend-tour-item style2">
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
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <p>20+ Place</p>
                    <Link href="/tour/details" className="link">
                      Explore <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>

                <div className="recommend-tour-item style2">
                  <div
                    className="recommend-tour-bg bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/rec_tour_4.jpg)`,
                    }}
                  ></div>
                  <div className="recommend-tour-info">
                    <p>30+ Place</p>
                    <h4>
                      <Link href="/tour/details">Africa</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <Link href="/tour/details" className="link">
                      Explore <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>

                <div className="recommend-tour-item style2">
                  <div
                    className="recommend-tour-bg bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/rec-tour-5.jpg)`,
                    }}
                  ></div>
                  <div className="recommend-tour-info">
                    <p>15+ Place</p>
                    <h4>
                      <Link href="/tour/details">Africa</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <Link href="/tour/details" className="link">
                      Explore <i className="ri-logout-circle-r-line"></i>
                    </Link>
                  </div>
                </div>

                <div className="recommend-tour-item style2">
                  <div
                    className="recommend-tour-bg bg-f"
                    style={{
                      backgroundImage: `url(/images/tour/rec-tour-6.jpg)`,
                    }}
                  ></div>
                  <div className="recommend-tour-info">
                    <p>27+ Place</p>
                    <h4>
                      <Link href="/tour/details">Africa</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <Link href="/tour/details" className="link">
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

import React from "react";

const RecommendTour = () => {
  return (
    <section style={{ backgroundColor: "#00ACEA", padding: "100px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center style2 mb-40">
              <span></span>
              <h2>Our customers, Our inspiration</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="rec-wrap">
              <div className="recommend-tour-item style1">
                <div
                  className="recommend-tour-bg bg-f"
                  style={{
                    backgroundImage: `url(/images/tour/rec_tour_1.jpg)`,
                  }}
                ></div>
              </div>

              <div className="recommend-tour-item style1">
                <div
                  className="recommend-tour-bg bg-f"
                  style={{
                    backgroundImage: `url(/images/tour/rec_tour_2.jpg)`,
                  }}
                ></div>
              </div>

              <div className="recommend-tour-item style1">
                <div
                  className="recommend-tour-bg bg-f"
                  style={{
                    backgroundImage: `url(/images/tour/rec_tour_3.jpg)`,
                  }}
                ></div>
              </div>

              <div className="recommend-tour-item style1">
                <div
                  className="recommend-tour-bg bg-f"
                  style={{
                    backgroundImage: `url(/images/tour/rec_tour_4.jpg)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendTour;

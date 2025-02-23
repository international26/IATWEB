import React from "react";
import Link from "next/link";

const PageBannerTwo = ({ bannerTitle, pageName }) => {
  return (
    <>
      <section
        className="breadcrumb-wrap bg-f"
        style={{ backgroundImage: `url(/images/breadcrumb/breadcrumb-1.jpg)` }}
      >
        <div className="overlay op-8 bg-minsk"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="breadcrumb-title">
                <h2>{bannerTitle}</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link href="/">Home</Link>
                    <i className="las la-angle-double-right"></i>
                  </li>
                  <li>{pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageBannerTwo;

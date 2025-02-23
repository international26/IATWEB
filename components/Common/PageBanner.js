import React from "react";
import Link from "next/link";

const PageBanner = ({ bannerTitle, pageName }) => {
  return (
    <>
      <div className="breadcrumb-wrap style2 bg-heath">
        <div className="container text-center">
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
    </>
  );
};

export default PageBanner;

import React from "react";

const SearchTour = () => {
  return (
    <>
      <div className="search-tour">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <form className="filter-tours-wrap style1 mt-30">
                <div className="filter-box">
                  <div className="form-group">
                    <input type="search" placeholder="Keywords" />
                    <button type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </div>
                </div>

                <div className="filter-box">
                  <div className="filter-dropdown">
                    <select className="hero-filter">
                      <option defaultValue="1">Destination</option>
                      <option defaultValue="2">Europe</option>
                      <option defaultValue="3">Asia</option>
                      <option defaultValue="4">Africa</option>
                    </select>
                    <span className="hero-filter-down-arrow">
                      <i className="ri-arrow-down-s-line"></i>
                    </span>
                  </div>
                </div>

                <div className="filter-box">
                  <div className="filter-dropdown">
                    <select className="hero-filter">
                      <option defaultValue="1">Duration</option>
                      <option defaultValue="2">3 Days</option>
                      <option defaultValue="3">5 Days</option>
                      <option defaultValue="4">10 Days</option>
                    </select>
                    <span className="hero-filter-down-arrow">
                      <i className="ri-arrow-down-s-line"></i>
                    </span>
                  </div>
                </div>

                <div className="filter-box">
                  <div className="filter-dropdown">
                    <select className="hero-filter">
                      <option defaultValue="1">Person</option>
                      <option defaultValue="2">1-3</option>
                      <option defaultValue="3">1-5</option>
                      <option defaultValue="4">5-10</option>
                    </select>
                    <span className="hero-filter-down-arrow">
                      <i className="ri-arrow-down-s-line"></i>
                    </span>
                  </div>
                </div>

                <div className="filter-box">
                  <button type="submit" className="search-btn">
                    Search <i className="ri-logout-circle-r-line"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchTour;

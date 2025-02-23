import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <section className="blog-wrap pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title style1 text-center mb-40">
                <span>Blogs</span>
                <h2>Latest News And Updates</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6">
              <div className="blog-card style1">
                <div className="blog-img">
                  <Link href="/blog/details-left-sidebar">
                    <img src="/images/blog/blog-1.jpg" alt="Image" />
                  </Link>
                  <span className="blog-date">
                    <i className="ri-time-line"></i>
                    06 Feb , 2021
                  </span>
                </div>

                <div className="blog-info">
                  <div className="blog-meta">
                    <span>
                      By <Link href="/blog/details-left-sidebar">Admin</Link>
                    </span>
                    <span>
                      <Link href="/blog/details-left-sidebar">4 Comments</Link>
                    </span>
                  </div>
                  <h3 className="blog-title">
                    <Link href="/blog/details-left-sidebar">
                      24 Of Our Favorite Things To Do In Cape Town And Around
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-card style1">
                <div className="blog-img">
                  <Link href="/blog/details-left-sidebar">
                    <img src="/images/blog/blog-5.jpg" alt="Image" />
                  </Link>
                  <span className="blog-date">
                    <i className="ri-time-line"></i>
                    26 Jan , 2021
                  </span>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span>
                      By <Link href="/blog/details-left-sidebar">Admin</Link>
                    </span>
                    <span>
                      <Link href="/blog/details-left-sidebar">2 Comments</Link>
                    </span>
                  </div>
                  <h3 className="blog-title">
                    <Link href="/blog/details-left-sidebar">
                      Our Favorite Things To Do In The Fascinating City Of
                      Córdoba
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-card style1">
                <div className="blog-img">
                  <Link href="/blog/details-left-sidebar">
                    <img src="/images/blog/blog-3.jpg" alt="Image" />
                  </Link>
                  <span className="blog-date">
                    <i className="ri-time-line"></i>
                    15 Jan , 2021
                  </span>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span>
                      By <Link href="/blog/details-left-sidebar">Admin</Link>
                    </span>
                    <span>
                      <Link href="/blog/details-left-sidebar">3 Comments</Link>
                    </span>
                  </div>
                  <h3 className="blog-title">
                    <Link href="/blog/details-left-sidebar">
                      Mexico Road Trip – Impressions Of A Challenging Journey
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

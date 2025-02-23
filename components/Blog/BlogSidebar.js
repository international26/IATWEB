import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-widget search-box">
          <input type="search" placeholder="Search By Keywords" />
          <button type="submit">
            {" "}
            <i className="ri-search-line"></i>{" "}
          </button>
        </div>

        <div className="sidebar-widget recent-post">
          <h4>Popular Posts </h4>
          <div className="popular-post-widget">
            <div className="pp-post-item">
              <div className="pp-post-img">
                <img src="/images/blog/post-thumb-1.jpg" alt="Image" />
              </div>
              <div className="pp-post-info">
                <span>09 Jan 2021</span>
                <h6>
                  <Link href="/blog/details-no-sidebar">
                    Lessons In Planning And Traveling During COVID-19
                  </Link>
                </h6>
              </div>
            </div>

            <div className="pp-post-item">
              <div className="pp-post-img">
                <img src="/images/blog/post-thumb-2.jpg" alt="Image" />
              </div>
              <div className="pp-post-info">
                <span>08 Jan 2021</span>
                <h6>
                  <Link href="/blog/details-no-sidebar">
                    How To Pack For The Camino De Santiago
                  </Link>
                </h6>
              </div>
            </div>

            <div className="pp-post-item">
              <div className="pp-post-img">
                <img src="/images/blog/post-thumb-3.jpg" alt="Image" />
              </div>
              <div className="pp-post-info">
                <span>15 Dec 2020</span>
                <h6>
                  <Link href="/blog/details-no-sidebar">
                    Best Street Food Around the World
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-widget categories">
          <h4>Popular Category</h4>
          <div className="category-box">
            <ul>
              <li>
                <Link href="/blog/details-no-sidebar">City Travel</Link>
              </li>
              <li>
                <Link href="/blog/details-no-sidebar">Hiking</Link>
              </li>
              <li>
                <Link href="/blog/details-no-sidebar">Historical Places</Link>
              </li>
              <li>
                <Link href="/blog/details-no-sidebar">Nature</Link>
              </li>
              <li>
                <Link href="/blog/details-no-sidebar">Sea Beaches</Link>
              </li>
              <li>
                <Link href="/blog/details-no-sidebar">World Tourism</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-widget tags">
          <h4>Popular Tags </h4>
          <div className="tag-list">
            <ul>
              <li>
                <Link href="/blog/no-sidebar">Tourism</Link>
              </li>
              <li>
                <Link href="/blog/no-sidebar">Hiking</Link>
              </li>
              <li>
                <Link href="/blog/no-sidebar">Nature</Link>
              </li>
              <li>
                <Link href="/blog/no-sidebar">Seo</Link>
              </li>
              <li>
                <Link href="/blog/no-sidebar">Travel</Link>
              </li>
              <li>
                <Link href="/blog/no-sidebar">Ocean</Link>
              </li>
              <li>
                <Link href="/blog/no-sidebar">Group Tour</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;

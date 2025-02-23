import React from "react";
import Link from "next/link";

const ShopSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-widget category-widget">
          <h4>Category</h4>
          <ul className="product-category-list">
            <li className="has-subcat">
              <Link className="active" href="/shop/left-sidebar">
                Travel Bag <span>4</span>
              </Link>
            </li>
            <li className="has-subcat">
              <Link href="/shop/left-sidebar">
                Shoe <span>3</span>
              </Link>
            </li>
            <li className="has-subcat">
              <Link href="/shop/left-sidebar">
                RainCoat <span>3</span>
              </Link>
            </li>
            <li className="has-subcat">
              <Link href="/shop/left-sidebar">
                Power Bank <span>2</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-widget new-product">
          <h4>Popular Products</h4>
          <div className="new-product-wrap">
            <div className="new-product-item">
              <div className="new-product-img">
                <img src="/images/product/product-thumb-1.jpg" alt="Iamge" />
              </div>
              <div className="new-product-info">
                <h6>
                  <Link href="/shop/details">
                    Orange Suitcase
                  </Link>
                </h6>
                <span>$58.00</span>
                <span className="discount">$80</span>
              </div>
            </div>

            <div className="new-product-item">
              <div className="new-product-img">
                <img src="/images/product/product-thumb-2.jpg" alt="Iamge" />
              </div>
              <div className="new-product-info">
                <h6>
                  <Link href="/shop/details">
                    Olive Backpack
                  </Link>
                </h6>
                <span>$98.00</span>
              </div>
            </div>

            <div className="new-product-item">
              <div className="new-product-img">
                <img src="/images/product/product-thumb-3.jpg" alt="Iamge" />
              </div>
              <div className="new-product-info">
                <h6>
                  <Link href="/shop/details">
                    Large Suitcase
                  </Link>
                </h6>
                <span>$98.00</span>
                <span className="discount">$120</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSidebar;

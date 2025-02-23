import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const MyAccountNavbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  return (
    <>
      <div className="col-lg-3">
        <ul className="nav nav-tabs user-tablist" id="myTab">
          <Link 
            href="/admin/profile/" 
            className={` ${
              currentPath == "/admin/profile/" && "active"
            }`}
          >
            <li className="nav-item">
              <button className="nav-link">Profile</button>
            </li>
          </Link>

          <Link 
            href="/admin/shipping-address/" 
            className={` ${
              currentPath == "/admin/shipping-address/" && "active"
            }`}
          >
            <li className="nav-item">
              <button className="nav-link">Shipping Address</button>
            </li>
          </Link>

          <Link 
            href="/admin/my-orders/" 
            className={` ${
              currentPath == "/admin/my-orders/" && "active"
            }`}
          >
            <li className="nav-item">
              <button className="nav-link">My Orders</button>
            </li>
          </Link>
          
          <li className="nav-item">
            <button className="nav-link">Log Out</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MyAccountNavbar;

import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import logo from '../../Asset/—Pngtree—cartoon brown hedgehog_4284177.png'

import "./navbar.styles.scss";

const navheader = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Education",
    path: "/education",
  },
  {
    display: "Certificate",
    path: "/certificate",
  },
  {
    display: "Experience",
    path: "/experience",
  },
  {
    display: "Story",
    path: "/story",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const headerRef = useRef();

  const active = navheader.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const Shrink = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", Shrink);
    return () => {
      window.removeEventListener("scroll", Shrink);
    };
  }, []);
  return (
    <>
    <Outlet />
      <div ref={headerRef} className="Nav">
        <div className="Nav_wrap container">
          <div className="Nav-icon">
            <Link>
            KeviN'sir<img src={logo} alt="" />
            </Link>
            <div>toggle</div>
          </div>
            <ul className="Nav_list">
              {navheader.map((e, i) => (
                <li key={i} className={`${i === active ? "active" : ""}`}>
                  <Link to={e.path}>{e.display}</Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;

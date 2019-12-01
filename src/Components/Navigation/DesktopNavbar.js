import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import Button from "../Buttons/Button";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;
  padding: 6px 12rem;
`;

const MyDesktopNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffffe6;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 6rem;
  z-index: 1000;

  .logo {
    font-size: 3rem;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
  }

  .nav_links {
    text-decoration: none;
    list-style: none;
    display: flex;
    white-space: nowrap;
    justify-content: space-around;
    flex-flow: row nowrap;
    align-items: center;
    width: 30vw;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 7rem;
  }

  .Link {
    color: var(--color-blackMatte);
    transition: all 0.1s;

    &:hover {
      color: var(--color-main);
    }
  }
`;

const DesktopNavbar = () => {
  return (
    <MyDesktopNavbar>
      <NavWrapper>
        <div className="logo">eduCat </div>

        <BrowserRouter>
          <ul className="nav_links">
            <li>
              <Link to="/" className="Link">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/contact" className="Link">
                CONTACT
              </Link>
            </li>

            <li>
              <Button
                style={{
                  color: "peachpuff",
                  dropShadow: "none",
                  marginTop: "0"
                }}
              >
                Get Started
              </Button>
            </li>
          </ul>
        </BrowserRouter>
      </NavWrapper>
    </MyDesktopNavbar>
  );
};

export default DesktopNavbar;

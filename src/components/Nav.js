import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

export default function Nav() {
  return (
    <NavContainer>
      <Logo src={logo} />
      <LinkContainer>
        <NavLink to="/"> Start </NavLink>
        <NavLink to="/informationen"> Information </NavLink>
        <NavLink to="/eindruecke"> Eindrücke </NavLink>
        <NavLink to="/preise"> Preise </NavLink>
        <NavLink to="/kontakt"> Kontakt </NavLink>
      </LinkContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  margin: 0 auto;
  padding: 1rem 3rem 0 3rem;
  width: 70%;
  height: 3rem;
  display: flex;
  flex-direction: column;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 3px black solid;
  border-bottom: 3px black solid;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 200;
  text-transform: uppercase;
  padding: 0.5rem;

  &:hover {
    color: #fb5c00;
  }
`;

const Logo = styled.img`
  max-width: 200px;
  max-height: 80px;
  object-fit: cover;
  margin: 0.5rem;
`;

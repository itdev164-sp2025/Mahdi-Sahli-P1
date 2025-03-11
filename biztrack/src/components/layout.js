/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;
`;

const Navbar = styled.nav`
  background: #2c3e50;
  padding: 10px;
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/invoices">Invoices</Link></li>
        </ul>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;


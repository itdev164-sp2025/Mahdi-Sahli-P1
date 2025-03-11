import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const IndexPage = () => {
  return (
    <Layout>
      <HomeContainer>
        <h1>Welcome to BizTrack</h1>
        <p>Your Business Productivity Tracker</p>
        <nav>
          <ul>
            <li><Link to="/tasks">Task Management</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/invoices">Invoices</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/reports">Reports</Link></li>
          </ul>
        </nav>
      </HomeContainer>
    </Layout>
  );
};

export default IndexPage;


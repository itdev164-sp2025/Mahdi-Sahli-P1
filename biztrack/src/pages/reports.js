import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ReportsContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const ReportsPage = () => {
  return (
    <Layout>
      <ReportsContainer>
        <h1>Reports & Analytics</h1>
        <p>Analyze your business performance.</p>
      </ReportsContainer>
    </Layout>
  );
};

export default ReportsPage;

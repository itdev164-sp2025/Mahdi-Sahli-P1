import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ClientsContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const ClientsPage = () => {
  return (
    <Layout>
      <ClientsContainer>
        <h1>Client Management</h1>
        <p>Keep track of your clients and their details.</p>
      </ClientsContainer>
    </Layout>
  );
};

export default ClientsPage;

import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const InvoiceContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const InvoicesPage = () => {
  return (
    <Layout>
      <InvoiceContainer>
        <h1>Invoices</h1>
        <p>Manage invoices for your business.</p>
      </InvoiceContainer>
    </Layout>
  );
};

export default InvoicesPage;


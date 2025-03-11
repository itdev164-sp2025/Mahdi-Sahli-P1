import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ScheduleContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const SchedulePage = () => {
  return (
    <Layout>
      <ScheduleContainer>
        <h1>Schedule</h1>
        <p>Plan and organize your meetings and tasks.</p>
      </ScheduleContainer>
    </Layout>
  );
};

export default SchedulePage;

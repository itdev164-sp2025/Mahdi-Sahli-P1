import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const TaskList = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const TaskCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #f9f9f9;
`;

const TasksPage = () => {
  return (
    <Layout>
      <TaskList>
        <h1>Task Management</h1>
        <TaskCard>
          <h2>Example Task</h2>
          <p>Manage your business tasks efficiently.</p>
        </TaskCard>
      </TaskList>
    </Layout>
  );
};

export default TasksPage;


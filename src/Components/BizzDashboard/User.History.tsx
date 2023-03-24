import React from "react";
import styled from "styled-components";

const UserHistory = () => {
  return (
    <div style={{ overflowX: "hidden", background: "red" }}>
      <Container>
        <Top></Top>
      </Container>
    </div>
  );
};

export default UserHistory;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Top = styled.div`
  width: 100%;
  height: 250px;
  background-color: red;
`;

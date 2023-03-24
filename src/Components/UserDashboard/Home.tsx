import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

const Home = () => {
  return (
    <Div
      style={{
        width: "100%",
        height: "100vh",
        marginLeft: "250px",
        // background: "red",
        // fontFamily: "sans-serif",
      }}
    >
      <Container>
        <Main>
          <h4>Purchase Gift Cards</h4>
          <p>What kind of card would you like to sell?</p>
          <InputHold>
            <AiOutlineSearch style={{ fontSize: "20px", marginLeft: "10px" }} />
            <input type="text" placeholder="Search gift card" />
          </InputHold>
        </Main>
        <Cardhold></Cardhold>
      </Container>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 10px;
  }
`;

const Cardhold = styled.div`
  width: 100%;
  height: 300vh;
  background-color: red;
  margin-top: 40px;
  /* margin-left: 30px; */
`;

const Main = styled.div`
  position: sticky;
  top: 0.1px;
  z-index: 4;
  background: green;

  width: 100%;
`;

const InputHold = styled.div`
  width: 57%;
  height: 55px;
  background-color: #f5f5f5;

  display: flex;
  align-items: center;

  border-radius: 10px;
`;

const Container = styled.div`
  h4 {
    margin: 0;

    font-size: 29px;
    font-weight: 700;
  }
  p {
    margin: 0;
    margin-top: 6px;

    font-size: 14px;
  }

  input {
    flex: 1;
    height: 100%;
    border: 0;
    outline: 0;

    background-color: transparent;

    ::placeholder {
      color: silver;
    }
  }
`;

import React, { useState } from "react";
import styled, { css } from "styled-components";
import ProfileComp from "../Home/ProfileComp";
import { AiFillEye, AiFillEyeInvisible, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { Waypoint } from "react-waypoint";

const UserWallet = () => {
  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  const ShowPop = () => {
    setPopup(true);
  };
  const HidePop = () => {
    setPopup(false);
  };

  return (
    <Container style={{ overflowX: "hidden", width: "100%", height: "100vh" }}>
      {popup ? (
        <Popup popup={popup}>
          <MdOutlineCancel
            onClick={HidePop}
            style={{
              color: "white",
              fontSize: "40px",
              position: "absolute",
              right: "32%",
              top: "16%",
              cursor: "pointer",
            }}
          />
          <Card>
            <h2>Process Withdrawal</h2>
            <p>Withdraw funds from wallet</p>

            <AmountHold>$3000.00</AmountHold>
            <input type="text" placeholder="Enter amount to withdraw" />
            <button>Process Payment</button>
          </Card>
        </Popup>
      ) : null}
      <Prof>
        <p>Wallet</p>
        <Hold>
          <h5>Available balance</h5>

          {show ? (
            <AiFillEyeInvisible
              onClick={Toggle}
              style={{
                fontSize: "26px",
                marginTop: "2px",
                marginLeft: "30px",
                cursor: "pointer",
              }}
            />
          ) : (
            <AiFillEye
              onClick={Toggle}
              style={{
                fontSize: "26px",
                marginTop: "2px",
                marginLeft: "30px",
                cursor: "pointer",
              }}
            />
          )}
        </Hold>
        {show ? (
          <div
            style={{
              fontSize: "30px",
              color: "blue",
              fontWeight: "bolder",
            }}
          >
            NGN 0
          </div>
        ) : (
          <div
            style={{
              fontSize: "30px",
              color: "blue",
              fontWeight: "bolder",
            }}
          >
            ******
          </div>
        )}
      </Prof>
      <p
        style={{
          marginLeft: "270px",
          fontSize: "23px",
          fontWeight: "600",
          marginTop: "40px",
        }}
      >
        Withdrawal
      </p>
      <AddBox onClick={ShowPop}>
        <AiOutlinePlus
          style={{ fontSize: "30px", color: "blue", marginBottom: "6px" }}
        />
        <p>Request Withdrawal</p>
      </AddBox>
      <History>
        <p>Withdrawal History</p>
        <HistoryHold>
          <Up>
            <Inn>
              <p>S/N</p>
              <p>Logo</p>
              <p>Company Name</p>
              <p>Date and Time</p>
              <p>Amount</p>
            </Inn>
          </Up>
          <All>
            <Two>
              <p>1</p>
              <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                <p style={{ color: "white", fontSize: "18px" }}>I</p>
              </Circle>
              <p>Issac Enterprises</p>
              <p>13-03-23/10:00am</p>
              <p>{(3000.0).toLocaleString()}</p>
            </Two>
            <Two>
              <p>1</p>
              <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                <p style={{ color: "white", fontSize: "18px" }}>I</p>
              </Circle>
              <p>Issac Enterprises</p>
              <p>13-03-23/10:00am</p>
              <p>{(3000.0).toLocaleString()}</p>
            </Two>
            <Two>
              <p>1</p>
              <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                <p style={{ color: "white", fontSize: "18px" }}>I</p>
              </Circle>
              <p>Issac Enterprises</p>
              <p>13-03-23/10:00am</p>
              <p>{(3000.0).toLocaleString()}</p>
            </Two>
            <Two>
              <p>1</p>
              <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                <p style={{ color: "white", fontSize: "18px" }}>I</p>
              </Circle>
              <p>Issac Enterprises</p>
              <p>13-03-23/10:00am</p>
              <p>{(3000.0).toLocaleString()}</p>
            </Two>
            <Two>
              <p>1</p>
              <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                <p style={{ color: "white", fontSize: "18px" }}>I</p>
              </Circle>
              <p>Issac Enterprises</p>
              <p>13-03-23/10:00am</p>
              <p>{(3000.0).toLocaleString()}</p>
            </Two>
            <Two>
              <p>1</p>
              <Circle bc={`#${Math.floor(Math.random() * 1000 + 1543)}`}>
                <p style={{ color: "white", fontSize: "18px" }}>I</p>
              </Circle>
              <p>Issac Enterprises</p>
              <p>13-03-23/10:00am</p>
              <p>{(3000.0).toLocaleString()}</p>
            </Two>
          </All>
        </HistoryHold>
      </History>
    </Container>
  );
};

export default UserWallet;

const Inn = styled.div`
  width: 91%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Two = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Circle = styled.div<{ bc: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bc }) => bc};
`;

const All = styled.div`
  width: 100%;
  height: 263px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  /* background-color: red; */
  /* margin-left: 30px; */
  /* padding: 25px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(17, 12, 12, 0.06) 0px 2px 4px -1px;
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

const Datas = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0;

  p {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const Up = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid silver;
  position: sticky;
  top: 0.1px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: white;
`;

const HistoryHold = styled.div`
  width: 85%;
  height: 330px;
  background-color: white;
  margin-left: 30px;
  /* padding: 25px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const Container = styled.div`
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 10px;
  }
`;

const History = styled.div`
  width: 76%;
  height: 380px;
  /* background-color: #f9f4ff; */
  margin-left: 269px;
  border-radius: 10px;
  margin-top: 50px;
  padding-left: 23px;
  padding-top: 13px;
  margin-bottom: 50px;

  p {
    font-size: 20px;
    font-weight: 600;
  }
`;

const AmountHold = styled.div`
  width: 97%;
  height: 48px;
  border-radius: 10px;
  background-color: #f9f4ff;
  margin-bottom: 20px;
  display: flex;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
`;

const Card = styled.div`
  width: 310px;
  padding: 30px;
  height: 350px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  h2 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 25px;
  }

  input {
    width: 97%;
    height: 48px;
    border-radius: 10px;
    background-color: #f9f4ff;
    border: 0;
    outline: 0;
    padding-left: 10px;

    ::placeholder {
      color: silver;
    }
  }

  button {
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 10px;
    color: white;
    background-color: blueviolet;
    margin-top: 80px;
    cursor: pointer;

    :hover {
      transform: scale(0.99);
      transition: all 350ms ease-in-out;
    }
  }
`;

const Popup = styled.div<{ popup: boolean }>`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.1s ease-in-out;

  ${({ popup }) =>
    popup &&
    css`
      opacity: 1;
    `}
`;

const AddBox = styled.div`
  width: 280px;
  height: 130px;
  border: 1px solid blue;
  margin-left: 270px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  p {
    margin: 0;
    font-size: 17px;
    color: blue;
  }
`;

const Prof = styled.div`
  background-color: #f9f4ff;
  width: 80%;
  height: 180px;
  padding-top: 23px;
  padding-left: 30px;
  margin-left: 250px;

  z-index: 3;
  position: sticky;
  top: 0.2px;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    margin: 0;
    width: 100%;
    padding-bottom: 23px;
  }

  p {
    margin: 0;
    font-size: 25px;
  }

  button {
    width: 120px;
    height: 45px;
    background-color: #8246f3;
    border: 0;
    color: white;
    font-size: 15px;
    border-radius: 10px;
    margin-left: 85%;
    margin-bottom: 20px;

    @media screen and (max-width: 500px) {
      margin: 0;
      margin-top: 20px;
      width: 80%;
    }
  }
`;

const Hold = styled.div`
  display: flex;
  color: blue;
  align-items: center;
  margin-top: 25px;

  h5 {
    font-size: 23px;
    font-weight: lighter;
    margin: 0;
  }
`;

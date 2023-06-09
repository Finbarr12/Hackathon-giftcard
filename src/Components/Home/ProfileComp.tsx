import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import card from "../Assets/card.svg";
import spiral from "../Assets/robo.svg";
import two from "../Assets/two.svg";
import { Waypoint } from "react-waypoint";

const ProfileComp = () => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <Mid>
          <Prof>
            <p>
              Welcome,
              <span style={{ fontWeight: "650", textTransform: "capitalize" }}>
                Team Mauvericks
              </span>
            </p>
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
            <button>Withdraw</button>
          </Prof>
          <h4>Quick Actions</h4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Card>
              <img src={card} alt="" />
              <Sec>
                <h1>Create Gift Cards</h1>
                <p>Create gift cards and sell</p>
                <button>Generate Gift Card</button>
              </Sec>
            </Card>
            <Held>
              <Box bg="#FDF3E7" cl="#EF9837" bc="#EF9837">
                <img src={spiral} alt="" style={{ height: "40px" }} />
                <h2>Top Gift Cards</h2>
                <p>Know your gift card’s value at a glance.</p>
                <button>See top Gift cards</button>
              </Box>
              <Box bg="#f9f4ff" cl="blue" bc="#8246f3">
                <Circle>
                  <img src={two} alt="" style={{ height: "40px" }} />
                </Circle>
                <h2>Check Rates</h2>
                <p>Know your gift card’s value at a glance.</p>
                <button>Check rates</button>
              </Box>
            </Held>
          </div>
          <P>Notifications</P>
          <NottHold>
            <Lists>
              <p>Sylvia bought your gift card at $3000.00</p>
            </Lists>
          </NottHold>
        </Mid>
      </Container>
    </div>
  );
};

export default ProfileComp;

const P = styled.div`
  margin-top: 40px;
  margin-left: 300px;
  font-size: 19px;
  font-weight: bold;

  @media screen and (max-width: 960px) {
    margin: 0;
    margin-left: 20px;
    margin-top: 40px;
  }
`;

const Transc = styled.div`
  display: flex;
`;

const Up = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f9f4ff;
  padding-left: 20px;
  padding-top: 20px;

  h3 {
    margin: 0;
  }
`;

const Lists = styled.div`
  width: 75%;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 265px;

  p {
    margin: 0;
    margin-left: 20px;
    font-weight: 600;

    @media screen and (max-width: 960px) {
      margin: 0;
      font-size: 14px;
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 960px) {
    margin: 0;
    width: 90%;
    margin-top: 15px;
  }
`;

const NottHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Circle = styled.div`
  width: 55px;
  height: 55px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;

const Sec = styled.div`
  margin-left: 570px;

  @media screen and (max-width: 960px) {
    margin: 0;
    margin-left: 25px;
    margin-top: 15px;
  }
  h1 {
    margin: 0;
    color: white;
    font-size: 45px;

    @media screen and (max-width: 960px) {
      font-size: 23px;
    }
  }
  button {
    width: 150px;
    height: 40px;
    background-color: white;
    border: 0;
    color: blue;
    border-radius: 10px;
    margin-top: 25px;
    font-weight: 600;

    @media screen and (max-width: 960px) {
      width: 63%;
      height: 35px;
      font-size: 13px;
      margin-top: 20px;
    }
  }
  p {
    margin: 0;
    margin-top: 3px;
    font-size: 16px;
    color: white;

    @media screen and (max-width: 960px) {
      margin: 0;
      font-size: 14px;
    }
  }
`;

const Box = styled.div<{ bg: string; cl: string; bc: string }>`
  width: 48%;
  height: 250px;
  background: ${({ bg }) => bg};
  border-radius: 10px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 15px;
  }

  h2 {
    margin: 0;
    margin-top: 15px;
    font-size: 36px;
    margin-left: 40px;
    color: ${({ cl }) => cl};

    @media screen and (max-width: 960px) {
      font-size: 25px;
    }
  }

  p {
    margin: 0;
    margin-top: 7px;
    font-size: 13px;
    margin-left: 40px;
  }

  button {
    margin-top: 20px;
    width: 140px;
    margin-left: 40px;
    height: 40px;
    background-color: ${({ bc }) => bc};
    border: 0;
    color: white;
    font-weight: bold;
    border-radius: 10px;
  }
`;

const Held = styled.div`
  width: 75%;
  display: flex;
  margin-top: 25px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 265px;

  @media screen and (max-width: 960px) {
    margin: 0;
    width: 90%;
    display: block;
    margin-top: 25px;
  }
`;

const Card = styled.div`
  width: 75%;
  height: 280px;
  background-color: #8246f3;
  border-radius: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 265px;

  @media screen and (max-width: 960px) {
    margin: 0;
    width: 90%;
    display: block;
    margin-top: 20px;
  }

  img {
    position: absolute;
    bottom: 1px;
    height: 290px;

    @media screen and (max-width: 960px) {
      height: 61%;
      /* width: 95%; */
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

const Prof = styled.div`
  background-color: #f9f4ff;
  width: 80%;
  height: 180px;
  padding-top: 30px;
  padding-left: 30px;
  margin-left: 250px;

  z-index: 3;
  position: sticky;
  top: 0.2px;

  @media screen and (max-width: 960px) {
    margin: 0;
    width: 100%;
    padding-bottom: 23px;
  }

  p {
    margin: 0;
    font-size: 14px;
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

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;
const Mid = styled.div`
  width: 100%;
  height: 100vh;
  /* background: red; */
  /* overflow: hidden; */
  display: flex;
  /* justify-content: flex-start; */
  overflow: hidden;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 10px;
  }
  h4 {
    margin: 0;
    margin-top: 40px;
    margin-left: 300px;
    font-size: 19px;

    @media screen and (max-width: 960px) {
      margin: 0;
      margin-left: 20px;
      margin-top: 40px;
    }
  }
`;
const Left = styled.div`
  width: 30%;
  height: 100vh;
  /* background-color: gold; */
  position: sticky;
  top: 0;
  overflow: hidden;
  /* z-index: 3; */
`;

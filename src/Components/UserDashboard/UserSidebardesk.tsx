import React from "react";
import styled from "styled-components";
import DashboardBars from "../BizzDashboard/Props.Bars";
import { HiHome, HiBell } from "react-icons/hi";
import { MdInsertChart } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import pic from "../Assets/phone.png";
import { TbArrowsLeftRight } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const UserSidebarDesk = () => {
  const [home, setHome] = React.useState(true);
  const [myCards, setMyCards] = React.useState(true);
  const [profile, setProfile] = React.useState(true);
  const [contact, setContact] = React.useState(true);
  const [logout, setLogout] = React.useState(true);
  const [show, setShow] = React.useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <Container dsp={show ? "flex" : "none"}>
        <Logo>GIFTHAVEN</Logo>
        <br />
        <br />
        <br />
        <Bars>
          <div
            onClick={() => {
              setHome(false);
              setContact(true);
              setProfile(true);
              setLogout(true);
              setMyCards(true);
              navigate("/userdashboard");
            }}
          >
            <DashboardBars
              pic={<HiHome />}
              routeName="Home"
              cl={home ? "#d1abf5" : "white"}
              bd={home ? "" : "4px solid white"}
              hov={home ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setMyCards(false);
              setContact(true);
              setProfile(true);
              setLogout(true);
              navigate("/dashboard/mycards");
            }}
          >
            <DashboardBars
              pic={<MdInsertChart />}
              routeName="My Cards"
              cl={myCards ? "#d1abf5" : "white"}
              bd={myCards ? "" : "4px solid white"}
              hov={myCards ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setMyCards(true);
              setContact(true);
              setProfile(false);
              setLogout(true);
              navigate("/dashboard/profile");
            }}
          >
            <DashboardBars
              pic={<FaWallet />}
              routeName="Profile"
              cl={profile ? "#d1abf5" : "white"}
              bd={profile ? "" : "4px solid white"}
              hov={profile ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setMyCards(true);
              setContact(false);
              setProfile(true);
              setLogout(true);

              navigate("/dashboard/contact");
            }}
          >
            <DashboardBars
              pic={<HiBell />}
              routeName="Contact"
              cl={contact ? "#d1abf5" : "white"}
              bd={contact ? "" : "4px solid white"}
              hov={contact ? " #4c2be2" : ""}
            />
          </div>
          <div
            style={{ marginTop: "100%" }}
            onClick={() => {
              setHome(true);
              setContact(true);
              setMyCards(true);
              setProfile(true);
              setLogout(false);
              navigate("/dashboard/logouts");
            }}
          >
            <DashboardBars
              pic={<AiFillMessage />}
              routeName="Logout"
              cl={logout ? "#d1abf5" : "white"}
              bd={logout ? "" : "4px solid white"}
              hov={logout ? " #4c2be2" : ""}
            />
          </div>
        </Bars>

        {/* <Stars>
          <div
            style={{
              position: "absolute",
              color: "gold",
              top: "63%",
              left: "40px",
              fontSize: "6px",
            }}
          >
            <TiStarFullOutline />
          </div>
          <div
            style={{
              position: "absolute",
              color: "gold",
              top: "75%",
              left: "55px",
              fontSize: "9px",
            }}
          >
            <TiStarFullOutline />
          </div>

          <div
            style={{
              position: "absolute",
              color: "gold",
              top: "91%",
              left: "53px",
              fontSize: "7px",
            }}
          >
            <TiStarFullOutline />
          </div>

          <div
            style={{
              position: "absolute",
              color: "gold",
              top: "70%",
              right: "27px",
              fontSize: "14px",
            }}
          >
            <TiStarFullOutline />
          </div>

          <div
            style={{
              position: "absolute",
              color: "gold",
              top: "69%",
              right: "25px",
              fontSize: "4px",
            }}
          >
            <TiStarFullOutline />
          </div>
          <div
            style={{
              position: "absolute",
              color: "gold",
              top: "58%",
              right: "55px",
              fontSize: "10px",
            }}
          >
            <TiStarFullOutline />
          </div>
        </Stars> */}
        <Shower
          onClick={() => {
            setShow(false);
          }}
        >
          <TbArrowsLeftRight />
        </Shower>
      </Container>
    </div>
  );
};

export default UserSidebarDesk;

const Container = styled.div<{ dsp: string }>`
  width: 250px;
  background-color: blueviolet;
  padding-top: 10px;
  display: ${(props) => props.dsp};
  flex-direction: column;
  position: relative;
  /* transition: all 350ms; */
  height: 100vh;
  overflow: hidden;
  position: fixed;
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 10px;
  }

  @media screen and (min-width: 801px) and (max-width: 1051px) {
    width: 60px;
    height: 100vh;
  }
`;
const Logo = styled.div`
  color: white;
  padding-left: 30px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;
const Bars = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    gap: 25px;
  }
  margin: 0;
  padding: 0;
`;
const Image = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  margin: 5px;
  width: calc(100% - 10px);
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  background-color: #372be2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 160px;
    height: 120px;
    object-fit: cover;
    object-position: center;
  }
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    font-weight: 400;
  }
`;
const Small = styled.div`
  font-size: 11px;
  margin-bottom: 20px;
`;
const Big = styled.div`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
`;
const Button = styled.button`
  border-radius: 10px;
  color: white;
  background-color: #a002a0f2;
  width: 60px;
  height: 30px;
  /* font-size: 12px; */
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 11px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 350ms;
  :hover {
    background-color: #940294;
  }
`;
const Shower = styled.div`
  position: absolute;
  right: -15px;
  top: 2px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-weight: 200;
  color: purple;
  background-color: white;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
const Stars = styled.div`
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;

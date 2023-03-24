import React from "react";
import { useRoutes } from "react-router-dom";
import UserSidebarMob from "./UserSidebarMob";
import styled from "styled-components";
import { TbArrowsLeftRight } from "react-icons/tb";
import UserSidebarDesk from "./UserSidebardesk";
import Home from "./Home";
import Profile from "./Profile";
import MyCards from "./MyCards";
import Contact from "./Contact";

const UserDashRoute = () => {
  const [show, setShow] = React.useState(false);
  const toggle = () => {
    setShow(!show);
  };
  let element = useRoutes([
    {
      path: "/userdashboard",
      element: <Home />,
    },
    {
      path: "/dashboard/profile",
      element: <Profile />,
    },
    {
      path: "/dashboard/mycards",
      element: <MyCards />,
    },
    {
      path: "/dashboard/contact",
      element: <Contact />,
    },
  ]);
  return (
    <div style={{ overflow: "hidden" }}>
      <Shower onClick={toggle}>
        <Hold>
          <TbArrowsLeftRight />
        </Hold>
      </Shower>
      <div
        style={{
          width: "100vw",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Mobile>{show ? <UserSidebarMob sow={show} /> : null}</Mobile>
        <Container>
          <UserSidebarDesk />
        </Container>
        {element}
      </div>
    </div>
  );
};

export default UserDashRoute;

// const Full = styled.div``

const Hold = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    z-index: 4;
  }
`;

const Container = styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    display: block;
  }
`;
const Mobile = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
const Shower = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-weight: 200;
  color: purple;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;

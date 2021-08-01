import "twin.macro";
import * as S from "./styles";
import Content from "../../components/Sidebar/Content";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { MenuAlt1Icon } from "@heroicons/react/solid";
import person from "../../img/person_black_24dp.svg";
import settings from "../../img/settings_white_24dp.svg";

const NavbarButton = styled.div`
  color: blue;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #000;
`;

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const hideSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <S.Wrapper>
      <Sidebar open={sidebarOpen} onClose={hideSidebar} />
      <S.ContentWrapper>
        <S.Nav>
          <S.CollapseSidebar>
            <S.Button type="button" onClick={toggleSidebar}>
              <MenuAlt1Icon strokeWidth={2} tw="h-6 w-6" />
            </S.Button>
          </S.CollapseSidebar>
          <S.Profile onClick={hideSidebar}>
            <S.Gretting>
              <S.GrettingPerson>
                <span>Hello, </span>
                <S.GrettingPersonName>Carlos</S.GrettingPersonName>
              </S.GrettingPerson>
              <S.Rol>Editor</S.Rol>
            </S.Gretting>
            <div tw="pl-4">
              <NavbarButton
                as="button"
                tw="flex justify-center items-center bg-white"
              >
                <Link to="">
                  <img
                    src={person}
                    alt="person"
                    tw="rounded-full align-middle border-none bg-white"
                  />
                </Link>
              </NavbarButton>
            </div>
            <div tw="pl-4">
              <NavbarButton
                as="button"
                tw="flex justify-center items-center shadow"
              >
                <Link to="">
                  <img
                    src={settings}
                    alt="settings"
                    tw="rounded-full align-middle border-none"
                    width="20px"
                    height="20px"
                  />
                </Link>
              </NavbarButton>
            </div>
          </S.Profile>
        </S.Nav>
        <S.Content onClick={hideSidebar}>
          <S.MainTitle>Dashboard</S.MainTitle>
          <S.ContentFrame>
            <Content />
          </S.ContentFrame>
        </S.Content>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Dashboard;

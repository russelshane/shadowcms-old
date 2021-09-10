/**
 * @description Header Component
 * @author ShadowCMS
 */

import React, { useState } from "react";
import loadable from "@loadable/component";
import HeaderProps from "./types";
import mockUser from "../../mocks/user";
import { HeaderContainer } from "./style";
import { BellIcon, MenuIcon } from "@heroicons/react/outline";

/* Dynamic Components */
const Avatar = loadable(() => import("../../ui/avatar"));
const Logo = loadable(() => import("../../ui/logo"));
const Container = loadable(() => import("../../ui/container"));
const Button = loadable(() => import("../../ui/button"));
const Dropdown = loadable(() => import("../../ui/dropdown"));

const Header: React.FC<HeaderProps> = () => {
  const [notificationsActive, setNotificationsActive] = useState(false);

  const mockNotifs = [
    {
      label: "Attention! An article under your byline needs correction",
      path: "/n/3409rgeklj",
      description:
        "An article that appears you wrote is in need of some corrections, please take action as soon as possible.",
      date: `2021-09-10T13:29:41`,
    },
    {
      label: "John Doe published your article",
      path: "/n/ae2234903",
      description:
        "Your article 'Biden Mandates Vaccines for Workers, Saying, ‘Our Patience Is Wearing Thin’' has been published and is now live.",
      date: `2021-09-10T13:29:22`,
    },
  ];

  return (
    <HeaderContainer>
      <Container gridGap={20} display="flex" alignItems="center">
        <Logo />
        <Button icon={<MenuIcon />}>MENU</Button>
      </Container>
      <Container gridGap={15} display="flex" alignItems="center">
        <Container justifyContent="flex-end">
          <Button icon={<BellIcon />} onClick={() => setNotificationsActive(!notificationsActive)}>
            Notifications
          </Button>
          <Dropdown items={mockNotifs} active={notificationsActive} />
        </Container>
        <Avatar withMenu={true} user={mockUser} />
      </Container>
    </HeaderContainer>
  );
};

export default Header;

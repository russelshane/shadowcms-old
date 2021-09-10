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
import mockNotifications from "../../mocks/notifications";

/* Dynamic Components */
const Avatar = loadable(() => import("../../ui/avatar"));
const Logo = loadable(() => import("../../ui/logo"));
const Container = loadable(() => import("../../ui/container"));
const Button = loadable(() => import("../../ui/button"));
const Dropdown = loadable(() => import("../../ui/dropdown"));

const Header: React.FC<HeaderProps> = () => {
  const [notificationsActive, setNotificationsActive] = useState(false);

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
          <Dropdown items={mockNotifications} active={notificationsActive} />
        </Container>
        <Avatar withMenu={true} user={mockUser} />
      </Container>
    </HeaderContainer>
  );
};

export default Header;

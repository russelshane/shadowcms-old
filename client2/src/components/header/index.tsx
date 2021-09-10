/**
 * @description Header Component
 * @author ShadowCMS
 */

import React, { useState } from "react";
import loadable from "@loadable/component";
import dayjs from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import HeaderProps from "./types";
import mockUser from "../../mocks/user";
import mockNotifications from "../../mocks/notifications";
import { HeaderContainer } from "./style";
import { BellIcon, MenuIcon } from "@heroicons/react/outline";

/* Dynamic Components */
const Avatar = loadable(() => import("../../ui/avatar"));
const Logo = loadable(() => import("../../ui/logo"));
const Container = loadable(() => import("../../ui/container"));
const Button = loadable(() => import("../../ui/button"));
const Dropdown = loadable(() => import("../../ui/dropdown"));
const Label = loadable(() => import("../../ui/label"));

const Header: React.FC<HeaderProps> = ({ setSidebarActive, sidebarActive }) => {
  const [notificationsActive, setNotificationsActive] = useState(false);

  /**
   * Dayjs advanced formats plugin
   */
  dayjs.extend(AdvancedFormat);

  return (
    <HeaderContainer>
      <Container gridGap={20} display="flex" alignItems="center">
        <Logo />
        <Button icon={<MenuIcon />} onClick={() => setSidebarActive(!sidebarActive)}>
          MENU
        </Button>
        <Label fontSize={12} color="#ccc">
          {dayjs().format("dddd, MMMM Do")}
        </Label>
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

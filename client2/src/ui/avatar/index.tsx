/**
 * @description Avatar UI Component
 * @author ShadowCMS
 */

import React, { useState } from "react";
import loadable from "@loadable/component";
import AvatarProps from "./types";
import { UserIcon, LogoutIcon, ClipboardIcon } from "@heroicons/react/solid";
import { AvatarContainer } from "./style";

/**
 * Dynamic Components
 */
const Dropdown = loadable(() => import("../dropdown"));
const Container = loadable(() => import("../container"));

const Avatar: React.FC<AvatarProps> = ({ onClick, withMenu, user }) => {
  const [profileMenuActive, setProfileMenuActive] = useState(false);
  const dropItems = [
    {
      icon: <UserIcon />,
      label: "Profile",
      path: `/profile/${user.ein}`,
    },
    {
      icon: <ClipboardIcon />,
      label: "My Tasks",
      path: `/tasks/${user.ein}`,
    },
    {
      icon: <LogoutIcon />,
      label: "Sign Out",
      path: "/eject",
    },
  ];

  return (
    <>
      {!withMenu ? (
        <AvatarContainer onClick={onClick} style={{ backgroundImage: `url(${user.image})` }} />
      ) : (
        <Container width="auto" display="flex" alignItems="flex-end" flexDirection="column">
          <AvatarContainer
            onClick={() => setProfileMenuActive(!profileMenuActive)}
            style={{ backgroundImage: `url(${user.image})` }}
          />
          <Dropdown items={dropItems} active={profileMenuActive} />
        </Container>
      )}
    </>
  );
};

export default Avatar;

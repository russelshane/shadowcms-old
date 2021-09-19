/**
 * @description Sidebar Component
 * @author ShadowCMS
 */

import React from "react";
import SidebarProps from "./types";
import navItems from "../../constants/nav-items";
import Label from "../../ui/label";
import Button from "../../ui/button";
import Container from "../../ui/container";
import { PencilIcon } from "@heroicons/react/solid";
import { Link, useHistory } from "react-router-dom";
import { SidebarContainer, SidebarIcon, SidebarItem, SidebarSeperator } from "./style";
import { LogoutIcon } from "@heroicons/react/outline";
import { customAlphabet } from "nanoid";
import { firestore } from "../../services/firebase";
import { NewsModel } from "../../models/news-model";
import dayjs from "dayjs";

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  const history = useHistory();

  /**
   * Function to create a new news article
   */
  const nanoid = customAlphabet("0987654321", 12);
  const newId = nanoid();
  const createArticle = async () => {
    await firestore
      .collection("articles")
      .doc(`shadow_${newId}`)
      .set({
        id: `shadow_${newId}`,
        lastUpdated: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
        interactiveState: {
          saving: null,
        },
        doc: {
          ...NewsModel.doc,
        },
      });

    history.push(`/doc/shadow_${newId}/web/editing`);
  };
  return (
    <SidebarContainer className={`${active && "active"}`}>
      <Container padding="0 10px" width="100%" display="block">
        <Button icon={<PencilIcon />} size="md" onClick={createArticle}>
          Compose
        </Button>
      </Container>
      {navItems.slice(0, 5).map((val, index) => (
        <Link to={val.path} key={index}>
          <SidebarItem>
            {val?.icon && <SidebarIcon>{val.icon}</SidebarIcon>}
            <Label fontSize={13} color="#444" letterSpacing={0.25} fontWeight={500}>
              {val.label}
            </Label>
          </SidebarItem>
        </Link>
      ))}
      <SidebarSeperator />
      {navItems.slice(5, 10).map((val, index) => (
        <Link to={val.path} key={index}>
          <SidebarItem>
            {val?.icon && <SidebarIcon>{val.icon}</SidebarIcon>}
            <Label fontSize={13} color="#444" letterSpacing={0.25} fontWeight={500}>
              {val.label}
            </Label>
          </SidebarItem>
        </Link>
      ))}
      <SidebarSeperator />
      {navItems.slice(10, 14).map((val, index) => (
        <Link to={val.path} key={index}>
          <SidebarItem>
            {val?.icon && <SidebarIcon>{val.icon}</SidebarIcon>}
            <Label fontSize={13} color="#444" letterSpacing={0.25} fontWeight={500}>
              {val.label}
            </Label>
          </SidebarItem>
        </Link>
      ))}
      <Link to="/eject" style={{ padding: "0 10px" }}>
        <Button variant="danger" icon={<LogoutIcon />}>
          Sign Out
        </Button>
      </Link>
      <Label fontSize={12} color="#999" textAlign="center" margin="5px 0">
        Copyright &copy; 2021 Shadow
      </Label>
    </SidebarContainer>
  );
};

export default Sidebar;

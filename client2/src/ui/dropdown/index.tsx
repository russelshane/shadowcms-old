/**
 * @description Dropdown UI Component
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import React from "react";
import { Link } from "react-router-dom";
import COLORS from "../../styles/global-colors";
import Container from "../container";
import Label from "../label";
import { DropdownContainer, DropdownIcon, DropdownItem, DropdownLabel } from "./style";
import DropdownProps from "./types";

const Dropdown: React.FC<DropdownProps> = ({ items, active }) => {
  /**
   * Relative time plugin for DayJS
   */
  dayjs.extend(RelativeTime);

  return (
    <DropdownContainer className={`${active && "active"}`}>
      {items.map((val, index) => (
        <Link to={val.path} key={index}>
          <DropdownItem>
            {val?.icon && <DropdownIcon>{val.icon}</DropdownIcon>}
            <Container display="flex" flexDirection="column" gridGap={10}>
              <DropdownLabel color={COLORS.default}>{val.label}</DropdownLabel>
              {val?.description && (
                <>
                  <Label color={COLORS.muted} fontSize={12} padding="0 0 10px 0">
                    {val?.description}
                  </Label>
                  {val?.date && (
                    <Label color={COLORS.primary} fontSize={12}>
                      {dayjs(val.date).fromNow()}
                    </Label>
                  )}
                </>
              )}
            </Container>
          </DropdownItem>
        </Link>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;

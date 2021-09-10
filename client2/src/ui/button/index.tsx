/**
 * @description Button UI Component
 * @author ShadowCMS
 */

import React from "react";
import { DropdownIcon } from "../dropdown/style";
import Label from "../label";
import { ButtonContainer } from "./style";
import ButtonProps from "./types";

const Button: React.FC<ButtonProps> = ({ children, onClick, variant, icon, size }) => {
  return (
    <ButtonContainer className={`${variant} ${size}`} onClick={onClick}>
      {icon && (
        <DropdownIcon style={{ color: "#f8f8f8", width: 18, padding: 0 }}>{icon}</DropdownIcon>
      )}
      {children && (
        <Label color="#f8f8f8" fontSize={14}>
          {children}
        </Label>
      )}
    </ButtonContainer>
  );
};

export default Button;

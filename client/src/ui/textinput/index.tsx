/**
 * @description Text Input UI Component
 * @author ShadowCMS
 */

import React from "react";
import { TextInputContainer, TextInputDescription, TextInputField, TextInputLabel } from "./styles";
import { TextInputProps } from "./types";

const TextInput: React.FC<TextInputProps> = ({
  label,
  description,
  value,
  onChange,
  disabled,
  required,
}) => {
  return (
    <TextInputContainer>
      <TextInputLabel>
        {label} {required ? "*" : ""}
      </TextInputLabel>
      <TextInputDescription>{description}</TextInputDescription>
      <TextInputField value={value} onChange={onChange} disabled={disabled} />
    </TextInputContainer>
  );
};

export default TextInput;

/**
 * @description Textarea UI Component
 * @author ShadowCMS
 */

import React from "react";
import { TextareaProps } from "./types";
import { Text } from "evergreen-ui";
import { TextareaContainer, TextareaLabel, TextareaDescription, TextareaField } from "./styles";

const Textarea: React.FC<TextareaProps> = ({
  label,
  required,
  description,
  value,
  onChange,
  onBlur,
  disabled,
  rows,
}) => {
  return (
    <TextareaContainer>
      <TextareaLabel>
        {label} {required ? <Text color="danger">*</Text> : ""}
      </TextareaLabel>
      <TextareaDescription>{description}</TextareaDescription>
      <TextareaField
        rows={rows}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
      />
    </TextareaContainer>
  );
};

export default Textarea;
